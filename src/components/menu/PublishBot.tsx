import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import DropdownComponent from '../../utils/DropdownComponent';


const PublishBot = () => {
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

    const handlePublish = () => {
        navigation.navigate('bot');
        console.log("Selected Index handleScheduleBot")
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
                    <Text style={styles.text}>Publish Bot</Text>
                </View>
            </View>

            <View style={styles.subContainer_selected}>
                <Text style={styles.title_selected}>Default_bot_Name_Buy_Solana</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container_1} >
                    <View style={styles.subContainer_11}>
                        <Text style={styles.title_1}>Charges & Taxes</Text>
                        <Text style={styles.titleDocuments}>1000</Text>
                    </View>


                    <View style={styles.subContainer_11}>
                        <Text style={styles.title_1}>Coin Pair</Text>
                        <Text style={styles.titleDocuments}>Bitcoin (BTCUSDT)</Text>
                    </View>

                    <View style={styles.container_11} >
                        <View style={styles.subContainer_11}>
                            <Text style={styles.title_1}>ML Bot</Text>
                            <Text style={styles.titleDocuments}>Buy</Text>
                        </View>

                        <View style={styles.subContainer_11}>
                            <Text style={styles.title_1}>Timeframe</Text>
                            <Text style={styles.titleDocuments}>5M</Text>
                        </View>
                    </View>

                    <View style={styles.container_11} >
                        <View style={styles.subContainer_11}>
                            <Text style={styles.title_1}>Target</Text>
                            <Text style={styles.titleDocuments}>5</Text>
                        </View>

                        <View style={styles.subContainer_11}>
                            <Text style={styles.title_1}>Traget Goal</Text>
                            <Text style={styles.titleDocuments}>5</Text>
                        </View>
                    </View>

                    <View style={styles.container_11} >
                        <View style={styles.subContainer_11}>
                            <Text style={styles.title_1}>Stoploss</Text>
                            <Text style={styles.titleDocuments}>5</Text>
                        </View>

                        <View style={styles.subContainer_11}>
                            <Text style={styles.title_1}>Stoploss Goal</Text>
                            <Text style={styles.titleDocuments}>5</Text>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 50 , marginBottom:10 }}>
                        <DropdownComponent data1={data} dropdowntype={'Receive email on the gain of'} />
                    </View>

                </View>

            </ScrollView>

            <View style={styles.container_down}>
                <View style={styles.container_down_2}>
                    <TouchableOpacity style={styles.next_Button} onPress={handlePublish}>
                        <Text style={styles.title_selected_1}>Publish</Text>
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
        fontSize: 15,
        alignItems: 'center',
        color: '#6A5ECC',
    },

    container_down: {
        width: '100%',
        flexDirection: 'row', // Aligns image and text horizontally
        // paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
    },

    container_down_2: {
        flex:1,
        // flexDirection: 'row', // Aligns image and text horizontally
        backgroundColor: '#89BC42',
        height: 45,
        //  width:'35%',
        // paddingTop:10,
        margin: 10,
        borderRadius: 10,
        borderColor: '#89BC42',
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
        justifyContent: 'space-between',
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

    title_1: {
        flex: 1, // Take up remaining space between the images
        fontSize: 14,
        alignItems: 'center',
        marginLeft: 5,
        color: 'gray',
    },

    titleDocuments: {
        flex: 1, // Take up remaining space between the images
        fontSize: 15,
        alignItems: 'center',
        marginLeft: 10,
    },

    container_11: {
        flexDirection: 'row', // Aligns image and text horizontally
        backgroundColor: 'white',
        // marginLeft: 15,
        // marginRight: 15,
        // marginTop: 10,
        // marginBottom: 10,
        borderRadius: 8,
    },
});

export default PublishBot;