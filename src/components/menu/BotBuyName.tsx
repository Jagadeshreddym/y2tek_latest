import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {  View, StyleSheet, Text, Image, ScrollView,TouchableOpacity, Alert, SafeAreaView, Dimensions, Animated, PanResponder } from 'react-native';
import Svg, { G, Line, Rect  } from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';
import { getBotData, getSymbolData } from '../../api/AuthService';
import { LineChart, CandlestickChart } from 'react-native-chart-kit';





const BotBuyName = ({ route }) => {
    const { item } = route.params;
    const [data, setData] = useState([]);
    const [graphData, setgraphData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = 300;

    const navigation = useNavigation();
    const plans = ['1'];
    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected

    const handleNavigateToBotSummary = (index: React.SetStateAction<number>) => {
        if (data) {
            navigation.navigate('botsummary', { item: item });
            console.log("Selected Index", index);
        } else {
            Alert.alert('Please enter some data');
        }
    };

   // Convert raw data into a more usable format for candlestick chart
    const candlestickData = graphData.map(item => ({
        time: item[0], // Open time
        open: parseFloat(item[1]),
        high: parseFloat(item[2]),
        low: parseFloat(item[3]),
        close: parseFloat(item[4]),
    }));

    // eslint-disable-next-line @typescript-eslint/no-shadow, react/no-unstable-nested-components
    const CandlestickChart = () => {

        // States for zoom/pan
        const [scale, setScale] = useState(1); // initial scale of 1
        const [pan, setPan] = useState({ x: 0, y: 0 }); // initial pan position
        const scaleAnim = useRef(new Animated.Value(1)).current;

        // Gesture handlers for zooming and panning
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) => {
                // Pinch gesture for zooming
                if (gestureState.numberActiveTouches === 2) {
                    const initialDistance = Math.sqrt(
                        Math.pow(gestureState.x0 - gestureState.x0, 2) + Math.pow(gestureState.y0 - gestureState.y0, 2)
                    );
                    const currentDistance = Math.sqrt(
                        Math.pow(gestureState.moveX - gestureState.moveX, 2) + Math.pow(gestureState.moveY - gestureState.moveY, 2)
                    );

                    const scaleFactor = currentDistance / initialDistance; // Compare current and initial distance
                    setScale(prevScale => Math.max(0.5, prevScale * scaleFactor)); // Limit min zoom scale to 0.5
                } else {
                    // Dragging (Panning)
                    setPan({
                        x: gestureState.dx + pan.x,
                        y: gestureState.dy + pan.y,
                    });
                }
            },
            onPanResponderRelease: () => { },
        });
        // Render candlesticks
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const renderCandlestick = (data: { open: any; high: any; low: any; close: any; }[]) => {
            console.log('Candlestick Data:', data); // Debugging log
            return data.map((item: { open: any; high: any; low: any; close: any; }, index: number) => {
              const { open, high, low, close } = item;
              console.log('Rendering candlestick:', { open, high, low, close }); // Log each candlestick
              const x = (screenWidth / data.length) * index;
          

                return (
                    <G key={index}>
                        {/* The wick (line from low to high) */}
                        <Line
                            x1={x}
                            y1={high}
                            x2={x}
                            y2={low}
                            stroke={open < close ? 'green' : 'red'}
                            strokeWidth={2}
                        />
                        {/* The body (rectangular part) */}
                        <Rect
                            x={x - 5}
                            y={Math.min(open, close)}
                            width={10}
                            height={Math.abs(close - open)}
                            fill={open < close ? 'green' : 'red'}
                        />
                    </G>
                );
            });
        };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', margin: 10 }}>Candlestick Chart</Text>
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'black',
          }}
          {...panResponder.panHandlers}
        >
          <Svg width={screenWidth} height={screenHeight}>
          {/* Ensure renderCandlestick returns JSX */}
          <G
            transform={`scale(${scale}) translate(${pan.x}, ${pan.y})`} // Apply zoom and pan transforms
          >
            {renderCandlestick(candlestickData)}
          </G>
         
        </Svg>
        </View>
      </View>
    );
  };

    const handleBotPerformance = () => {
        navigation.navigate('botperformance', { item: data });
    };

    const handleLiveOrderBook = () => {
        navigation.navigate('liveorderbook');
    };

    const callAPIOnLoad = () => {
        getBotBuyNameDetails();
        getSymbolInfo();

    };

    const getBotBuyNameDetails = async () => {
        try {
            setLoading(true);
            setError('');
            try {
                //https://userbot.y2tek.io/bot/dashboard/Solana_Buy_5m_1_1_2025_01_20_12_53_09
                const response = await getBotData('bot/dashboard/' + item.botName);  // Get posts from API
                console.log("response of bot", response);
                setData(response);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        } catch (error) {
            console.error('Error gathering device info:', error);
        }
    };

    const getSymbolInfo = async () =>{
        try{
            const response = await getSymbolData('symbolData?name=khanAli&symbol=SOLUSDT&interval=5m&startTime=2025-01-17T07:23:37&endTime=2025-01-20T18:43:37&limit=1000');
            console.log(response);
            setgraphData(response);
        }catch(error){

        }
    }

    const options = {
        chartConfig: {
          backgroundColor: '#000',
          backgroundGradientFrom: '#000',
          backgroundGradientTo: '#000',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 204, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        },
       
      };

    useEffect(() => {
        getBotBuyNameDetails();
    }, []);

    return (
        <View style={styles.container} onLayout={callAPIOnLoad} >
            <View style={{
                backgroundColor: "white",
                flexDirection: "row",
                padding: 10,
                borderBottomEndRadius: 10,
                borderBottomLeftRadius: 10,
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
            }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={styles.button} onPress={handleGoBack}>
                        <Image source={require('../../assets/images/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{item.botName}</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.buyBotContainer_1}>
                    <View style={styles.subContainer}>
                        <Text style={styles.titleDocuments_1}>Live Price Chart with Buy and Sell History</Text>
                        {/* <SvgUri width="15" height="15" source={{ uri:'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg'}} /> */}
                    </View>

                    {/* <View style={styles.priceViewContainer_11}> */}
                        <View style={styles.priceView_1}>
                        <SafeAreaView>
                            <CandlestickChart />
                        </SafeAreaView>
                        </View>
                    {/* </View> */}

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.priceView_111}>
                            <Text style={styles.titleText_Graph}>OPEN : </Text>
                            <Text style={styles.priceText_Graph}>276.51</Text>
                        </View>
                        <View style={styles.priceView_111}>
                            <Text style={styles.titleText_Graph}>CLOSE : </Text>
                            <Text style={styles.priceText_Graph}>277.93</Text>
                        </View>
                    </View>

                    <View style={styles.priceViewContainer_111}>
                        <View style={styles.priceView_111}>
                            <Text style={styles.titleText_Graph}>HIGH : </Text>
                            <Text style={styles.priceText_Graph}>248.02</Text>
                        </View>
                        <View style={styles.priceView_111}>
                            <Text style={styles.titleText_Graph}>LOW : </Text>
                            <Text style={styles.priceText_Graph}>247.23</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.mainView_1}>
                    <View style={styles.subContainer}>
                        <Text style={styles.titleDocuments}>Realized P&L</Text>
                    </View>
                    <View style={styles.priceViewContainer_1}>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Absolute</Text>
                            <Text style={styles.priceText_1}>{'$ '+ data.netRealisedPL}</Text>
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Percentage</Text>
                            <Text style={styles.priceText_1}>{data.targetProfitPercentage}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mainView_2}>
                    <View style={styles.subContainer}>
                        <Text style={styles.titleDocuments}>Unrealized P&L</Text>
                    </View>
                    <View style={styles.priceViewContainer_2}>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Absolute</Text>
                            <Text style={styles.priceText_1}>{'$ '+ (data.netUnRealisedPL || 0)}</Text>
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Percentage</Text>
                            <Text style={styles.priceText_1}>{data.stoplossPercentage}</Text>
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.titleText_1}>Trade Free</Text>
                            <Text style={styles.priceText_1}>{'$ '+(data.futurePrice || 0)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.subViewWithColor}>
                    <Image
                        source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                    />
                    <Text style={styles.text_1}>Charged Interest </Text>
                    <Image
                        source={require("../../assets/images/info.png")}
                        style={{ marginTop: 8, marginLeft: 5 }}
                    />
                    <Text style={styles.text_2}>0</Text>
                </View>

                {plans.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tab,
                            selectedTab === index && styles.tab, // Highlight selected tab
                        ]}
                        onPress={() => handleNavigateToBotSummary(index)} // Change selected tab
                    >
                        <View style={styles.buyBotContainer}>
                            <View style={styles.subContainer}>
                                <Text style={styles.titleDocuments}>Bot Summary</Text>
                                <Image source={require('../../assets/images/navigate.png')} />
                            </View>
                            <View style={styles.priceViewContainer}>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>Symbol</Text>
                                    <Text style={styles.priceText_1}>{data.symbol}</Text>
                                </View>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>Timeframe</Text>
                                    <Text style={styles.priceText_1}>{data.timeFrame}</Text>
                                </View>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>ML Bot</Text>
                                    <Text style={styles.priceText_1}>{data.mlBot}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity style={[
                    styles.tab, // Highlight selected tab
                ]} onPress={handleBotPerformance}>
                    <View style={styles.subView}>
                        <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        <Text style={styles.text_1}>Bot Performance</Text>
                        <Image
                            source={require("../../assets/images/navigate.png")}
                            style={{ marginEnd: 2, marginTop: 8, justifyContent: "flex-end" }}
                        />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[
                    styles.tab, // Highlight selected tab
                ]} onPress={handleLiveOrderBook}>
                    <View style={styles.subView}>
                        <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        <Text style={styles.text_1}>Live Order Book</Text>
                        <Image
                            source={require("../../assets/images/navigate.png")}
                            style={{ marginEnd: 2, marginTop: 8, justifyContent: "flex-end" }}
                        />
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },

    button: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 5,
    },

    scrollContainer: {
        flex: 1,
        width: '100%',  
    },

    subView: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    subViewWithColor: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: '#F0DFCB',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    mainView_1: {
        height: 110,
        backgroundColor: '#5D4CE0',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    mainView_2: {
        // flex: 1,
        // flexDirection: 'row', // Aligns image and text horizontally
        height: 110,
        backgroundColor: '#C75178',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
        // justifyContent: "space-between"
    },

    text_1: {
        flex: 1,
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center', // Center aligns both image and text vertically
    },

    text_2: {
        color: 'black',
        fontSize: 16,
        paddingTop: 10,
        marginEnd: 10,
        justifyContent: "flex-end" ,
    },

    timeIcon: {
        width: 23,  // Set the width of the image
        height: 23, // Set the height of the image
        marginTop:8,
        marginLeft:10,
    },

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buyBotContainer: {
        flex: 1,
        height: 110,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    buyBotContainer_1: {
        flex: 1,
        height: 310,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    priceViewContainer: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        marginRight:10,
        height: 60,
        backgroundColor : 'white',
        borderRadius: 8,
        alignItems : 'center',
    },

    priceViewContainer_111: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        marginLeft:5,
        marginRight:10,
        backgroundColor : 'white',
        borderRadius: 8,
    },

    priceViewContainer_11: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        height: 180,
        backgroundColor : 'white',
        borderRadius: 8,
    },

    priceViewContainer_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        marginRight:10,
        height: 60,
        backgroundColor : '#5D4CE0',
        borderRadius: 8,
        alignItems : 'center'
    },

    priceViewContainer_2: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        marginRight:10,
        height: 60,
        backgroundColor : '#C75178',
        borderRadius: 8,
        alignItems : 'center'
    },

    priceView: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:55,
        marginLeft: 5,
        borderRadius: 10,
    },

    priceView_111: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:25,
        flexDirection: 'row', // Aligns image and text horizontally
        margin: 5,
        borderRadius: 3,
        //justifyContent: "space-between",
    },

    priceView_1: {
        backgroundColor: '#F2F2F7',
        height:170,
        margin:5,
        borderRadius: 10,
    },

    titleText_1: {
        color: 'black',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 10,
    },

    priceText_1: {
        color: 'black',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },

    subContainer: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginTop: 10,
        marginLeft: 5,
        paddingRight:15,
        width: '100%',
        height: 30,
        borderRadius: 8,
        alignItems : 'center',
    },

    titleDocuments: {
        flex: 1, // Take up remaining space between the images
        fontSize: 15,
        alignItems: 'center',
        marginLeft: 5,
    },

    titleDocuments_1: {
        flex: 1, // Take up remaining space between the images
        fontSize: 14,
        alignItems: 'center',
        marginLeft: 5,
        color: '#6A5ECC',
    },

    titleText_Graph: {
        color: 'black',
        fontSize: 10,
        height:25,
        lineHeight:25,
        paddingLeft: 10,
    },

    priceText_Graph: {
        color: 'black',
        fontSize: 10,
        height:25,
        lineHeight:25,
        paddingRight: 10,
    },
});

export default BotBuyName;