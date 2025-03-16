import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import DropdownComponent from '../../utils/DropdownComponent';
import { LineChart, CandlestickChart } from 'react-native-chart-kit';


const ScheduleBot = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const data = [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'In Active', value: 'inactive' },
    ];

    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };

    const handleOnTapDate = () => {
        console.log("Selected Index handleOnTapDate")
    };

    const handleOnTapFlatPrice = () => {
        console.log("Selected Index handleOnTapFlatPrice")
    };

    const handleNextPage = () => {
        navigation.navigate('createBot_Page2');
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
                    <TouchableOpacity style={styles.button_title} onPress={handleGoBack}>
                        <Image source={require('../../assets/images/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Schedule Bot</Text>
                </View>
                <TouchableOpacity style={styles.schedule_Button} onPress={handleOnTapDate}>
                    <Text style={styles.schedule_ButtonText}>Date</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.schedule_Button} onPress={handleOnTapFlatPrice}>
                    <Text style={styles.schedule_ButtonText}>Flat Price</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subContainer_selected}>
                <Image
                    source={require("../../assets/images/total_trade.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
                <Text style={styles.title_selected}>Mandatory Parameters</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container_1} >
                    <View style={{ width: '100%', height: 60 }}>
                        <DropdownComponent data1={data} dropdowntype={'Bot Name'} />
                    </View>

                    <View style={styles.priceViewContainer_1}>
                        <View style={styles.priceView_11}>
                            <DropdownComponent data1={data} dropdowntype={'Start Date'} />
                        </View>
                        <View style={styles.priceView_11}>
                            <DropdownComponent data1={data} dropdowntype={'End Date'} />
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 60 }}>
                        <DropdownComponent data1={data} dropdowntype={'Symbols'} />
                    </View>

                    <View style={styles.priceViewContainer_1}>
                        <View style={styles.priceView_11}>
                            <DropdownComponent data1={data} dropdowntype={'ML Bot'} />
                        </View>
                        <View style={styles.priceView_11}>
                            <DropdownComponent data1={data} dropdowntype={'Timeframe'} />
                        </View>
                    </View>


                    <View style={{ width: '100%', height: 50 }}>
                        <DropdownComponent data1={data} dropdowntype={'Initial Capital USD'} />
                    </View>

                    <View style={styles.buyBotContainer_1}>

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

                        <View style={styles.subContainer}>
                            <Text style={styles.titleDocuments_1}>Live Price Chart with Buy and Sell History</Text>
                            <SvgUri width="15" height="15" source={{ uri: 'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg' }} />
                        </View>
                    </View>

                </View>

            </ScrollView>

            <View style={styles.container_down}>
                <View style={styles.container_down_1}>
                    <Image
                        source={require("../../assets/images/bell.png")}
                    />
                    <Text style={styles.title_selected}>Import</Text>
                    {/* <DropdownComponent data1={data} dropdowntype={'ML Bot'} /> */}
                </View>
                <View style={styles.container_down_2}>
                <TouchableOpacity style={styles.next_Button} onPress={handleNextPage}>
                    <Text style={styles.title_selected_1}>Next</Text>
                    <Image
                        source={require("../../assets/images/total_trade.png")}
                    />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    button_title: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 5,
    },

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    scrollContainer: {
        flex: 1,
        width: '100%',
    },

    schedule_Button: {
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: '#FAE9D1', // Button background color
        borderColor : '#ECA44C',
        borderWidth: 1,
        borderRadius: 5,
        width: 90,
        height:30,
        lineHeight:30,
    },

    schedule_ButtonText: {
        backgroundColor: '#FAE9D1', // Button background color
        fontSize: 15,
        margin:5,
        color: '#ECA44C',
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

    subContainer_selected: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height:40,
        lineHeight:40,
        paddingLeft:10,
    },

    title_selected: {
        flex: 1, // Take up remaining space between the images
        fontSize: 13,
        alignItems: 'center',
        color: '#6A5ECC',
    },

    priceViewContainer_1: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
    },

    priceView_11: {
        // flex: 1,               // Equal width for each button
        backgroundColor: 'white',
        height: 55,
        width:'50%',
    },

    titleText_11: {
        color: 'gray',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },

    priceText_1: {
        color: 'black',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 10,
    },

    priceView_1: {
        backgroundColor: '#F2F2F7',
        height:170,
        margin:5,
        borderRadius: 10,
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

    priceViewContainer_111: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        height: 40,
        marginLeft:5,
        marginRight:10,
        backgroundColor : 'white',
        borderRadius: 8,
    },

    priceView_111: {
        flex: 1,               // Equal width for each button
        backgroundColor: '#F2F2F7',
        height:25,
        flexDirection: 'row', // Aligns image and text horizontally
        margin: 5,
        borderRadius: 3,
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

    titleDocuments_1: {
        flex: 1, // Take up remaining space between the images
        fontSize: 14,
        alignItems: 'center',
        marginLeft: 5,
        color: '#6A5ECC',
    },

    container_down: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
    },

    container_down_1: {  
        flex: 1,
        flexDirection: 'row', // Aligns image and text horizontally
        backgroundColor: 'white',
        height: 45,
         width:'45%',
        margin: 10,
        borderRadius: 10,
        borderColor: '#6A5ECC',
        borderWidth: 0.8,
        alignItems: 'center',
    },
    container_down_2: {
        flexDirection: 'row', // Aligns image and text horizontally
        backgroundColor: '#6A5ECC',
        height: 45,
         width:'45%',
        margin: 10,
        borderRadius: 10,
        borderColor: '#6A5ECC',
        borderWidth: 0.8,
        alignItems: 'center',
    },

    title_selected_1: {
        flex: 1, // Take up remaining space between the images
        fontSize: 13,
        alignItems: 'center',
        color: 'white',

    },

    next_Button: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        width: 90,
        height:30,
        lineHeight:30,
    },
});

export default ScheduleBot;