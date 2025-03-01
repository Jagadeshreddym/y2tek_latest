import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {  View, StyleSheet, Text, Image, ScrollView,TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const TradeBook = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    const plans = ['1', '2', '3', '4'];
    const details = {
        'Solana(SOLUSDT)': '1',//item.dashboardData.totalTrades = 0,//'0',
        'Solana(SOLUSDT)_1': '1',//item.dashboardData.averageProfitPerTrade = 0,//'0',
        'Solana(SOLUSDT)_2': '1',//item.dashboardData.percentageTimeInTrades = 0,//'0.295',
    };

    const [selectedTab, setSelectedTab] = useState(0); // Initially, the first tab is selected

    const navigateToRipple = (index: React.SetStateAction<number>) => {
        navigation.navigate('');
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
                    <Text style={styles.text}>Trade book</Text>
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
                        <Text style={styles.titleDocuments}>2025-01-12</Text>
                        <Text style={styles.titleDocuments}> to </Text>
                        <Text style={styles.titleDocuments}>2024-01-10</Text>
                        {/* <SvgUri  width="15" height="15" source={{ uri:'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg'}} /> */}
                    </View>
                </View>

                <View style={styles.buyBotContainer_11}>
                    {/* <SvgUri width="25" height="25" source={{ uri:'https://bot.y2tek.io/6e25eb3484b4cb507f7a.svg'}} /> */}
                    <Text style={styles.text_Theme}>All Trades</Text>
                </View>

                {Object.entries(details).map(([key, value], index) => (
                    <View style={styles.buyBotContainer} >
                        <View style={styles.subContainer}>
                            <Text style={styles.titleDocuments}>{key}</Text>
                            <Text style={{ color: 'white', fontSize: 10,backgroundColor:'#89BC42',borderRadius:5,height:20 ,lineHeight:20,width:40,textAlign:'center'}}>BUY</Text>
                        </View>
                        <View style={styles.priceViewContainer}>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>QTY</Text>
                                <Text style={styles.priceText_1}>29</Text>
                            </View>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>Price</Text>
                                <Text style={styles.priceText_1}>15.929701</Text>
                            </View>
                        </View>

                        <View style={styles.priceViewContainer}>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>Unit Price</Text>
                                <Text style={styles.priceText_1}>95.86</Text>
                            </View>
                            <View style={styles.priceView}>
                                <Text style={styles.titleText_1}>Trade ID</Text>
                                <Text style={styles.priceText_1}>442331149</Text>
                            </View>
                        </View>

                        <View style={styles.subContainer_111}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <SvgUri  width="15" height="15" source={{ uri:'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg'}} /> */}
                                <Text style={{ marginLeft: 5, fontSize: 13, }}>12-01-2024</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 100 }}>
                                <Text style={{ marginLeft: 5, fontSize: 11,color: 'gray' }}>Order ID</Text>
                                <Text style={{ marginLeft: 5, fontSize: 11, color: 'black' }}>4801899637</Text>
                            </View>
                        </View>
                    </View>
                    
                ))}
                {/* <View style={styles.priceViewContainer_111}>
                    <Text style={styles.text_4}>Basic Performance Matrics</Text>
                    {Object.entries(basicMatrics).map(([key, value], index) => (
                        <View key={index} style={styles.subViewWithBorder}>
                            <Text style={styles.text_3}>{key}</Text>
                            <Text style={styles.text_2}>{value}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.priceViewContainer_111}>
                <Text style={styles.text_4}>Advance Performance Matrics</Text>
                {Object.entries(advanceMatrics).map(([key, value], index) => (
                    <View key={index} style={styles.subViewWithBorder}>
                        <Text style={styles.text_3}>{key}</Text>
                        <Text style={styles.text_2}>{value}</Text>
                    </View>
                ))}
                </View>
                 */}
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
        height: 150,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
    },
    priceView: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:30,
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft: 5,
        borderRadius: 8,
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
        marginBottom:10,
        height: 30,
        backgroundColor : 'white',
        borderRadius: 8,
        alignItems : 'center',
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
        height: 110,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop:10,
        marginBottom:10,
        borderRadius: 8,
    },

    priceViewContainer_1: {
        width: '96%',
        flexDirection: 'row', // Aligns image and text horizontally
        marginLeft:5,
        marginRight:10,
        paddingTop:10,
        paddingBottom:10,
        // height: 60,
        backgroundColor : 'white',
        borderRadius: 8,
        alignItems : 'center',
    },

    priceView_11: {
        flex: 1,               // Equal width for each button
        backgroundColor: 'white',
        height:55,
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

    buyBotContainer_11: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems:'center',
    },

    text_Theme: {
        color: '#6A5ECC',
        fontSize: 15,
        marginLeft: 10,
        lineHeight: 40,
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
});

export default TradeBook;