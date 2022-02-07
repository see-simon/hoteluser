 import React from "react";
 import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
 import { TouchableOpacity } from "react-native-gesture-handler";



 const bookingDetails =()=>{

    return (
        <SafeAreaView style={style.cover}>

                <View style={style.backBox}>

                
                </View>
                
            </SafeAreaView>
    )

 }
 const style = StyleSheet.create({
    cover: {
        backgroundColor: "#CA730D",
        height: "100%",

    },
    search: {
        backgroundColor: "#d4d3cf",
        marginLeft: 50,
        borderRadius:50,
        paddingLeft:50,
        marginTop:15,
        
        width:"70%",
        height:"5%",

    },
    picContainer: {
       
        //  backgroundColor:"red",
        
    },
    heading: {
        // color:"white",

        marginLeft: "30%",
        fontWeight: "bold"


    },
    picView: {

        //  backgroundColor:"red",
        height: "40%",
        paddingTop: 0,
        marginTop: 20,
        backgroundColor: "white"


    },

    HotelPic: {
        height: "90%",
        marginLeft: "8%",
       // backgroundColor: "blue",
        width: "85%",
        borderRadius: 30,


    },
    line: {
        marginBottom: 0,
        // backgroundColor:"red",
        marginLeft: "13%",
        marginBottom: 30,
        marginTop: 10,
        color:"#d1d0cd",

    },
    backBox: {
        paddingTop: 7,
        height: "95%",
        width: "95%",
        marginLeft: 10,

        marginTop: 10,
        //backgroundColor:"red",

        borderRadius: 10, 
        backgroundColor: "white"

    },
})

export default bookingDetails
