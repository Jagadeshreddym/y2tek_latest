import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  View, StyleSheet, Text, Image, ScrollView,TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const Exchange = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    const plans = ['1', '2', '3'];
    const details = {
        'Profit': '+$200.01 (20.38%)',//item.dashboardData.totalTrades = 0,//'0',
        'Charges & Taxes': '18.929462',//item.dashboardData.averageProfitPerTrade = 0,//'0',
        'Unrealized P&L': '0.37496',//item.dashboardData.percentageTimeInTrades = 0,//'0.295',
        'Total Trades': '38',//item.dashboardData.winRate = 0,//'0',
        'Total Investments': '$120,000.00',//item.dashboardData.winRate = 0,//'0',
    };


    const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected

    const navigateToRipple = (index: React.SetStateAction<number>) => {
        navigation.navigate('');
    };

    const handleOrderBook = () => {
        navigation.navigate('orderbook');
    };


    return (
        <View style={styles.container}>
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
                    <Text style={styles.text}>Exchange</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>

                <View style={styles.container_1} >
                    <View style={styles.subContainer_1}>
                        <Text style={styles.titleDocuments}>All</Text>
                        <Image source={require('../../assets/images/navigate.png')} />
                    </View>

                    <View style={styles.subContainer_1}>
                        <Text style={styles.titleDocuments}>All</Text>
                        <Image source={require('../../assets/images/navigate.png')} />
                    </View>

                    <View style={styles.subContainer_1}>
                        <Text style={styles.titleDocuments}>All</Text>
                        <Image source={require('../../assets/images/navigate.png')} />
                    </View>

                    <View style={styles.subContainer_111}>
                        <Text style={{ color: 'white', fontSize: 15, backgroundColor: '#A5A9AB', borderRadius: 10, height: 45, lineHeight: 45, width: '100%', textAlign: 'center' }}>Buy</Text>
                    </View>

                    <View style={styles.note}>
                        <Text style={styles.titleText_1}>Note: This will place a spot buy order.</Text>
                    </View>

                </View>

                <TouchableOpacity style={[
                    styles.tab, // Highlight selected tab
                ]} onPress={handleOrderBook}>
                    <View style={styles.subView}>
                        <Image
                            source={require("../../assets/images/home_tab.png")} style={styles.timeIcon}
                        />
                        <Text style={styles.text_1}>Order Book</Text>
                        <Image
                            source={require("../../assets/images/navigate.png")}
                            style={{ marginEnd: 2, marginTop: 8, justifyContent: "flex-end" }}
                        />

                    </View>
                </TouchableOpacity>

                <View style={styles.buyBotContainer_Graph}>
                    <View style={styles.subContainer_1}>
                        <Text style={styles.titleDocuments}>All</Text>
                        <Image source={require('../../assets/images/navigate.png')} />
                    </View>

                    <View style={styles.priceViewContainer_Graph}>
                        <View style={styles.priceView_Graph}>
                            <Text style={styles.titleText_Graph}>OPEN : </Text>
                            <Text style={styles.priceText_Graph}>276.51</Text>
                        </View>
                        <View style={styles.priceView_Graph}>
                            <Text style={styles.titleText_Graph}>CLOSE : </Text>
                            <Text style={styles.priceText_Graph}>277.93</Text>
                        </View>
                    </View>

                    <View style={styles.priceViewContainer_Graph}>
                        <View style={styles.priceView_Graph}>
                            <Text style={styles.titleText_Graph}>HIGH : </Text>
                            <Text style={styles.priceText_Graph}>248.02</Text>
                        </View>
                        <View style={styles.priceView_Graph}>
                            <Text style={styles.titleText_Graph}>LOW : </Text>
                            <Text style={styles.priceText_Graph}>247.23</Text>
                        </View>
                    </View>
                </View>

                {plans.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tab,
                            selectedTab === index && styles.tab, // Highlight selected tab
                        ]}
                        onPress={() => navigateToRipple(index)} // Change selected tab
                    >
                        <View style={index === 0 ? styles.buyBotContainer : styles.buyBotContainer_1} >
                            {index === 0 ? (
                                <View style={styles.subContainer_1}>
                                    <Text style={styles.titleDocuments}>Position</Text>
                                    <Image source={require('../../assets/images/navigate.png')} />
                                </View>
                            ) : (
                                <></>
                            )}
                            <View style={styles.subContainer}>
                                <Text style={styles.titleDocuments}>Solana(SOLUSDT)</Text>
                                <Text style={{ color: 'white', fontSize: 10, backgroundColor: '#89BC42', borderRadius: 5, height: 20, lineHeight: 20, width: 40, textAlign: 'center' }}>BUY</Text>
                            </View>
                            <View style={styles.priceViewContainer_1}>
                                <View style={styles.priceView_11}>
                                    <Text style={styles.titleText_1}>Invested</Text>
                                    <Text style={styles.priceText_1}>250</Text>
                                </View>
                                <View style={styles.priceView_11}>
                                    <Text style={styles.titleText_1}>Qty</Text>
                                    <Text style={styles.priceText_1}>1.238</Text>
                                </View>
                            </View>
                            <View style={styles.priceViewContainer_1}>
                                <View style={styles.priceView_11}>
                                    <Text style={styles.titleText_1}>Price</Text>
                                    <Text style={styles.priceText_1}>201.9</Text>
                                </View>
                            </View>
                            <View style={styles.priceViewContainer}>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>Realized</Text>
                                    <Text style={styles.priceText_1}>$2.9430</Text>
                                </View>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>Unrealized</Text>
                                    <Text style={styles.priceText_1}>$2.9430</Text>
                                </View>
                            </View>
                            <View style={styles.subContainer_111}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <SvgUri  width="15" height="15" source={{ uri:'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg' }}/> 
                                    <Text style={{ marginLeft: 5, fontSize: 13, }}>12-01-2024</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 100 }}>
                                    <Text style={{ marginLeft: 5, fontSize: 11, color: 'gray' }}>TRADE ID</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 11, color: 'black' }}>4801899637</Text>
                                </View>
                            </View>
                            <View style={styles.subContainer_111}>
                                <Text style={{ color: 'white', fontSize: 15, backgroundColor: '#C13441', borderRadius: 10, height: 45, lineHeight: 45, width: '100%', textAlign: 'center' }}>Sell</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
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

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    text_2: {
        color: 'black',
        fontSize: 15,
        paddingTop: 10,
        marginEnd: 10,
        justifyContent: "flex-end" ,
    },

    text_3: {
        color: 'gray',
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 10,
        marginEnd: 10,
    },

    text_4: {
        color: 'black',
        fontSize: 14,
        paddingTop: 10,
        paddingLeft: 5,
        marginEnd: 10,
        justifyContent: "flex-end" ,
    },

    subViewWithBorder: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
        borderWidth:1,
        borderColor: '#E1DFF4',
        justifyContent: 'space-between',
    },

    priceViewContainer_111: {
        width: '100%',
        height: 280,
        marginLeft:5,
        marginRight:10,
        paddingTop:10,
        borderRadius: 8,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buyBotContainer: {
        flex: 1,
        height: 330,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    buyBotContainer_1: {
        flex: 1,
        height: 280,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    priceView: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:55,
        marginLeft: 5,
        borderRadius: 10,
    },
    priceView_1: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#FAE9D1',
        height:35,
        margin:5,
        paddingLeft:5,
        paddingRight:10,
        borderRadius: 10,
        flexDirection: 'row', // Aligns image and text horizontally
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    titleText_1: {
        color: '#554BA4',
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

     priceView_11: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:40,
        marginLeft: 5,
        flexDirection: 'row', // Aligns image and text horizontally
        borderRadius: 10,
    },

    titleDocuments: {
        flex: 1, // Take up remaining space between the images
        fontSize: 15,
        alignItems: 'center',
        marginLeft: 10,
    },

    title_1: {
        flex: 1, // Take up remaining space between the images
        fontSize: 14,
        alignItems: 'center',
        marginLeft: 5,
        color: 'gray',
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

    subContainer_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        width: '95%',
        height: 40,
        borderRadius: 8,
        alignItems : 'center',
        borderColor: '#E1DFF4',
        borderWidth: 0.5,
    },

    subContainer_11: {
        flex:1,
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        width: '95%',
        height: 40,
        borderRadius: 8,
        alignItems : 'center',
        borderColor: '#E1DFF4',
        borderWidth: 0.5,
        //justifyContent: 'space-between',
    },

    container_1: {
        height: 470,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop:10,
        marginBottom:10,
        borderRadius: 8,
    },

    priceViewContainer_1: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        marginRight:10,
        paddingTop:10,
        paddingBottom:10,
        height: 45,
        backgroundColor : 'white',
        borderRadius: 8,
        alignItems : 'center',
    },
    titleText_11: {
        color: 'gray',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },

    subContainer_111: {
        flexDirection: 'row', // Aligns image and text horizontally
        // marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom:10,
        width: '100%',
        height: 30,
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

    text_1: {
        flex: 1,
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center', // Center aligns both image and text vertically
    },

    timeIcon: {
        width: 23,  // Set the width of the image
        height: 23, // Set the height of the image
        marginTop:8,
        marginLeft:10,
    },

    buyBotContainer_Graph: {
        flex: 1,
        height: 310,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    titleDocuments_Graph: {
        flex: 1, // Take up remaining space between the images
        fontSize: 14,
        alignItems: 'center',
        marginLeft: 5,
        color: '#6A5ECC',
    },

    priceView_Graph: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:25,
        flexDirection: 'row', // Aligns image and text horizontally
        margin: 5,
        borderRadius: 3,
        //justifyContent: "space-between",
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

    priceViewContainer_Graph: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        marginLeft:5,
        marginRight:10,
        backgroundColor : 'white',
        borderRadius: 8,
    },

    note: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:40,
        lineHeight:40,
        margin:10,
        flexDirection: 'row', // Aligns image and text horizontally
        borderRadius: 10,
    },

    note_text: {
        color: 'black',
        fontSize: 14,
        paddingTop: 10,
        paddingLeft: 10,
    },
});

export default Exchange;