import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import DropdownComponent from '../../utils/DropdownComponent';
import { getManualTrade, getManualTradePL, getPLData } from '../../api/AuthService';


const PandL = ({ route }) => {
    const { userData } = route.params;
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState(null);
    const [response, setResponse] = useState([]);
    const [responseList, setResponseList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleValueChange = (value) => {
        setSelectedValue(value);
    };
    console.log('from bot screen', userData);

    const botNames = userData.userBotListResponse.map(bot => bot.botName);

    // Now map over the `userBotListResponse` to create the JSON
    const botStatusData = botNames.map(bot => {
    return {
      label: bot, // Set the botName as the label
      value: bot, // Set 'active' or 'inactive' based on the bot's status
    };
  });
  
    console.log('console.log(botStatusData)',botStatusData);
    console.log(botNames);
    const data = [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'In Active', value: 'inactive' },
    ];

    const duratoionData = [
        { label: 'All', value: 'all' },
        { label: 'Today', value: 'today' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Quarterly', value: 'quarterly' },
        { label: 'Yearly', value: 'yearly' },
        { label: 'Custom', value: 'custom' },
    ];


    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };
    const callAPIOnLoad = () => {
        getpl();
        getManualTradeList();
    };

    useEffect(() => {
        getManualTradeList();
    }, []);

    const getpl = async () => {
        try {
            setLoading(true);
            setError('');

            try {
                const responseData = await getPLData();  // Get posts from API
                console.log("response of bot", responseData);
                setResponse(responseData);

            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }

            // Get Location (latitude and longitude)

        } catch (error) {
            console.error('Error gathering device info:', error);

        }
    };



    const getManualTradeList = async () => {
        try {
            setLoading(true);
            setError('');
            const pageNumber = 0;//(await AsyncStorage.getItem('pageNumber'));
            const pageSize = 10;//(await AsyncStorage.getItem('pageNumber'));
            // ?pageNumber=0&pageSize=5&sortBy=auditInfo.createdDate
            try {
                const responseData = await getManualTradePL('?userName=' + + pageNumber + '&pageSize=' + pageSize + '&sortBy=auditInfo.createdDate');  // Get posts from API
                console.log("response of responseData", responseData);

                setResponseList(responseData);

            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }

            // Get Location (latitude and longitude)

        } catch (error) {
            console.error('Error gathering device info:', error);

        }
    };


    const plans = ['1', '2', '3', '4'];
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

    return (
        <View style={styles.container} onLayout={callAPIOnLoad}>
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
                    <TouchableOpacity style={styles.button_title} onPress={handleGoBack}>
                        <Image source={require('../../assets/images/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>P&L</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>

                <View style={styles.container_1} >
                    <View style={{ width: '100%', height: 60 }}>
                        <DropdownComponent data1={botStatusData} dropdowntype={'Bot List'} />
                    </View>

                    <View style={{ width: '100%', height: 60 }}>
                        <DropdownComponent data1={data} dropdowntype={'Status'} />
                    </View>

                    <View style={{ width: '100%', height: 50 }}>
                        <DropdownComponent data1={duratoionData} dropdowntype={'Duration'} />
                    </View>

                    <View style={styles.subContainer_11}>
                    <Image
                    source={require("../../assets/images/total_trade.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
                        <Text style={styles.title_1}>Profit</Text>
                        <Text style={styles.titleDocuments}>{response.totalProfit}</Text>
                    </View>

                    <View style={styles.subContainer_11}>
                    <Image
                    source={require("../../assets/images/charges_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
                        <Text style={styles.title_1}>Charges & Taxes</Text>
                        <Text style={styles.titleDocuments}>{response.chargeAndTax}</Text>
                    </View>

                    <View style={styles.subContainer_11}>
                    <Image
                    source={require("../../assets/images/unreleasedpl.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
                        <Text style={styles.title_1}>Unrealized P&L</Text>
                        <Text style={styles.titleDocuments}>{response.UnRealisedPL}</Text>
                    </View>

                    <View style={styles.subContainer_11}>
                    <Image
                    source={require("../../assets/images/total_trade.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
                        <Text style={styles.title_1}>Total Trades</Text>
                        <Text style={styles.titleDocuments}>{response.totalNoOfTrades}</Text>
                    </View>

                    <View style={styles.subContainer_11}>
                    <Image
                    source={require("../../assets/images/total_investment.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
                        <Text style={styles.title_1}>Total Investments</Text>
                        <Text style={styles.titleDocuments}>{response.totalInvestments}</Text>
                    </View>




                    <View style={styles.priceViewContainer_1}>
                        <View style={styles.priceView_11}>
                            <Text style={styles.titleText_11}>Winning Trades</Text>
                            <Text style={styles.priceText_1}>{'$' + response.totalNoOfWinningTrades}</Text>
                        </View>
                        <View style={styles.priceView_11}>
                            <Text style={styles.titleText_11}>Losing Trades</Text>
                            <Text style={styles.priceText_1}>{'$' + response.totalNoOfLosingTrades}</Text>
                        </View>
                    </View>
                </View>

                {Object.entries(plans).map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tab,
                            selectedTab === index && styles.tab, // Highlight selected tab
                        ]}
                        onPress={() => navigateToRipple(index)} // Change selected tab
                    >
                        <View style={index === 1 ? styles.buyBotContainer : styles.buyBotContainer_1} >
                            <View style={styles.subContainer}>
                                <Text style={styles.titleDocuments}>Bot Summary</Text>
                                <Image source={require('../../assets/images/navigate.png')} />
                            </View>
                            <View style={styles.priceViewContainer}>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>Net Realized P&L</Text>
                                    <Text style={styles.priceText_1}>0.00000</Text>
                                </View>
                                <View style={styles.priceView}>
                                    <Text style={styles.titleText_1}>Net Unrealized P&L</Text>
                                    <Text style={styles.priceText_1}>-0.396457</Text>
                                </View>
                            </View>
                            {index === 1 ? (
                                <View style={styles.priceView_1}>
                                    <Text style={styles.priceText_1}>Charges</Text>
                                    <Text style={styles.priceText_1}>3.006457</Text>
                                </View>
                            ) : (
                                <></>
                            )}
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
    picker: {
        height: 50,
        width: 200,
    },
    text_2: {
        color: 'black',
        fontSize: 15,
        paddingTop: 10,
        marginEnd: 10,
        justifyContent: "flex-end",
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
        justifyContent: "flex-end",
    },

    subViewWithBorder: {
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E1DFF4',
        justifyContent: 'space-between',
    },

    priceViewContainer_111: {
        width: '100%',
        height: 280,
        marginLeft: 5,
        marginRight: 10,
        paddingTop: 10,
        borderRadius: 8,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buyBotContainer: {
        flex: 1,
        height: 150,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    buyBotContainer_1: {
        flex: 1,
        height: 105,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },

    priceView: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height: 55,
        marginLeft: 5,
        borderRadius: 10,
    },

    priceView_1: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#FAE9D1',
        height: 35,
        margin: 5,
        paddingLeft: 5,
        paddingRight: 10,
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
        marginLeft: 5,
        marginRight: 10,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
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
        paddingRight: 15,
        width: '100%',
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
    },

    subContainer_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        width: 300,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        borderColor: '#E1DFF4',
        borderWidth: 0.5,
    },

    subContainer_11: {
        flex: 1,
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        padding: 10,
        width: '92%',
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        borderColor: '#E1DFF4',
        borderWidth: 0.5,
        //justifyContent: 'space-between',
    },

    container_1: {
        flexDirection: 'column',
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
    },

    priceViewContainer_1: {
        width: '96%',
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft: 5,
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        // height: 60,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
    },

    priceView_11: {
        flex: 1,               // Equal width for each button
        backgroundColor: 'white',
        height: 55,
        marginLeft: 5,
        borderRadius: 10,
        borderColor: '#E9E7F7',
        borderWidth: 0.5,
    },

    titleText_11: {
        color: 'gray',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
    },
    dropdown: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    row: {
        backgroundColor: '#fff',
        height: 50,
        justifyContent: 'center',
    },
    rowText: {
        fontSize: 16,
        color: '#000',
    },
    button_title: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 5,
    },
});

export default PandL;