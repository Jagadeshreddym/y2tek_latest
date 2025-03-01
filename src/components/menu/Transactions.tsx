import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {  View, StyleSheet, Text, Image, ScrollView,TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const Transactions = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        console.log("Selected Index navigate back")
        navigation.goBack();  // This goes back to the previous screen in the stack
    };
    const plans = ['1','2','3','4','5'];
    const [selectedTab, setSelectedTab] = useState(0);

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
                    <Text style={styles.text}>Transactions</Text>
                </View>

                <Image
                    source={require("../../assets/images/bell_.png")}
                    style={{ marginEnd: 10, justifyContent: "flex-end" }}
                />
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.tapContainer}>
                    <View style={styles.shadowBox} >
                        <LinearGradient
                            colors={['#5474EA', '#5474EA']}
                            style={styles.linearGradient}
                        >
                            <View style={{flex: 1,padding:10}}>
                             <Text style={styles.titleText_1}>CURRENT BALANCE</Text>
                             <Text style={styles.priceText_1}>$100.00</Text>
                             </View>
                            <View style={styles.viewContainer}>
                                <View style={styles.view}>
                                    <Text style={styles.titleText}>SPOT BALANCE</Text>
                                    <Text style={styles.priceText}>$234.09</Text>
                                </View>
                                <View style={styles.view}>
                                    <Text style={styles.titleText}>MARGIN BALANCE</Text>
                                    <Text style={styles.priceText}>$234.09</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={styles.buyBotContainer_1}>

                        {/* <SvgUri  width="25" height="25" source={{ uri:'https://bot.y2tek.io/6e25eb3484b4cb507f7a.svg' }}/> */}

                        <Text style={styles.text_Theme}>Statement</Text>
                        {/* {data.userBotListResponse.length} */}
                        {/* <Text style={styles.text_Bot}>10 Bots</Text> */}
                    </View>

                    {plans.map((tab, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.tab,
                                selectedTab === index && styles.tab, // Highlight selected tab
                            ]} // Change selected tab
                        >
                            <View style={styles.subView_1}>
                                <View style={styles.priceView_1}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                        {/* <SvgUri width="15" height="15" source={{ uri:'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg'}} /> */}
                                        <Text style={{ color: '#C13441', fontSize: 15, marginLeft: 10 }}>USDT</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                        {/* <SvgUri width="15" height="15" source={{ uri:'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg' }}/> */}
                                        <Text style={{ color: 'black', fontSize: 15,padding:10 }}>Bitcoin</Text>
                                        <Text style={{ color: 'white', fontSize: 10,backgroundColor:'#C13441',borderRadius:5,height:20 ,lineHeight:20,width:40,textAlign:'center'}}>SELL</Text>
                                     </View>
                                </View>
                                <View style={styles.priceView}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                        {/* <SvgUri width="15" height="15" source={{ uri:'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg' }}/> */}
                                        <Text style={{ color: '#C13441', fontSize: 15, marginLeft: 10 }}>Credit</Text>
                                    </View>
                                    <Text style={styles.titleText_11}>14.312658</Text>
                                </View>
                                <View style={styles.subContainer_1}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5, fontSize: 12, color: 'gray' }}>Net</Text>
                                        <Text style={{ marginLeft: 5, fontSize: 15, }}>15.929701</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 100 }}>
                                        {/* <SvgUri width="15" height="15" source={{ uri:'https://bot.y2tek.io/4eaa85c23ff8d9b9debe.svg' }}/> */}
                                        <Text style={{ marginLeft: 5, fontSize: 15 }}>12-01-2024</Text>
                                        <Text style={{ marginLeft: 5, fontSize: 12, color: 'gray' }}>08:47PM</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
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

    text: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
    },

    text_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        alignItems: 'center', // Center aligns both image and text vertically
        backgroundColor: 'white', // Button background color
        marginLeft: 8,
        fontSize: 8,
        color: 'gray',
    },

    scrollContainer: {
        flex: 1,
        width: '100%',
    },

    text_Theme: {
        color: '#6A5ECC',
        fontSize: 15,
        marginLeft: 10,
        lineHeight: 40,
    },

    buyBotContainer_1: {
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

    tapContainer: {
        flex: 1,
        flexDirection: 'column',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
    },

    shadowBox: {
        width: '100%',
        height: 153,
        backgroundColor: '#b5cbf6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,  // Rounded corners
        // iOS Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Horizontal & vertical offset
        shadowOpacity: 0.8,   // Shadow opacity (0 to 1)
        shadowRadius: 6,      // How much to blur the shadow
        // Android Shadow (Elevation)
        elevation: 8,  // Increase to make the shadow more prominent
    },

    linearGradient: {
        height: 150,
        width: '100%',
        marginTop: -10,
        borderRadius: 10,  // Rounded corners
    },

    viewContainer: {
        flex: 1,
        flexDirection: 'row',  // Arrange buttons horizontally
        width: '100%',         // Ensure the container takes full width
        marginTop: -40,
    },

    view: {
        flex: 1,               // Equal width for each button
        backgroundColor: 'white',
        padding: 10,
        margin: 12,
        height: 55,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Horizontal & vertical offset
        shadowOpacity: 0.5,   // Shadow opacity (0 to 1)
        shadowRadius: 6,      // How much to blur the shadow
        // Android Shadow (Elevation)
        elevation: 8,  // Increase to make the shadow more prominent
    },

    titleText: {
        color: 'black',
        fontSize: 11,
    },

    priceText: {
        color: 'black',
        fontSize: 16,
        marginTop: 5,
    },

    titleText_1: {
        color: 'white',
        fontSize: 11,
        marginTop: 10,
    },

    priceText_1: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    subView_1: {
        // flexDirection: 'row', // Aligns image and text horizontally
        height: 120,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderRadius: 8,
    },

    titleDocuments: {
        flex: 1, // Take up remaining space between the images
        fontSize: 15,
        alignItems: 'center',
        marginLeft: 5,
    },

    subContainer_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        width: '100%',
        height: 30,
    },

    subContainer: {
        flexDirection: 'row', // Aligns image and text horizontally
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 5,
        marginRight: 5,
        width: '100%',
        height: 30,
        justifyContent: 'space-between',
    },

    priceView: {
        flexDirection: 'row', // Aligns image and text horizontally
        flex: 1,               // Equal width for each button
        backgroundColor: '#E7C6CB',
        // height:35,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        height: 50,  // Fixed height for priceView
    padding: 10,  // Optional: padding if needed
    },

    priceView_1: {
        flexDirection: 'row', // Aligns image and text horizontally
        flex: 1,               // Equal width for each button
        // height:35,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    titleText_11: {
        color: '#C13441',
        fontSize: 15,
        // padding:10,
        flexDirection: 'row',
        textAlign:'center',
    },

});


export default Transactions;