import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'


import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Foundation'


const GetStarted = ({ navigation }) => {

    return (
        <>
            <SafeAreaView >

            {/* <StatusBar backgroundColor ={"blue"}>
            </StatusBar> */}
                <View style={style.container}>
                    <View style={style.crownContainer}>



                        <Icon name="crown" style={style.crown} size={80} color="#CA730D" />
                        <Text style={style.heading}>

                           Hotel name

                        </Text >


                    </View>

                  
                    <View style={style.backBox}>

                        <Image style={style.bed1} source={require("../images/bed.png")} />

                        <TouchableOpacity style={style.getStarted} onPress={()=> navigation.navigate('Login' , {name : 'Login'})}>
                            <Text style={style.textColours}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({

    container: {
        backgroundColor: "#CA730D",
        height: "100%",
    },
    crownContainer:{
        flexDirection:"row"
    },

    crown: {
        width: 100,
        height: 100,
        backgroundColor: "white",

        borderRadius: 100,
        alignContent: "center",
        justifyContent: "center",
        marginLeft: 11,
        marginTop: 50,
        padding: 20

    },
    heading: {

        width: "40%",
        marginLeft: "25%",
        marginTop: 90,
        marginBottom:25,
        //backgroundColor:"red",
        

        fontSize: 18,
        fontWeight: "bold",
        color: "white"

    },
    textColours:{
        color:"white",
    },
    backBox: {
        height: "75%",
        width: "95%",
        marginLeft: 10,
        padding: 10,
        marginTop: 10,
        //backgroundColor:"red",

        borderRadius: 10,
        backgroundColor: "white"

    },
    bed1: {
        height: "70%",
        width: "90%",
        // backgroundColor:"white",
        borderRadius: 100,
        marginLeft: 18,


    },
    getStarted: {
        backgroundColor: "#CA730D",
        padding: 15,
        paddingLeft: 105,
        marginTop: 35,
        marginLeft:25,
        borderRadius: 90,
        width:"87%"

    }

})
export default GetStarted
