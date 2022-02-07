import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, ImagePickerIOS } from 'react-native'
import * as yup from 'yup'
import { Formik } from 'formik'

import { Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Foundation'
import { Value } from 'react-native-reanimated'
import Icons from 'react-native-vector-icons/Entypo'
import Home from './Home'

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const Profile = ({ navigation }) => {

    const [isPasswordShow, setPasswordShow] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const validate = yup.object({
        email: yup.string().required().min(8),
        password: yup.string().required().min(8),
    })


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    return (
        <>
            <SafeAreaView >


                <View style={style.container}>
                    <View style={style.crownContainer}>


                        <Icon name="crown" style={style.crown} size={80} color="#CA730D" />

                        <Text style={style.heading}>

                            Profile

                        </Text >
                        <TouchableOpacity onPress={() => navigation.navigate('Login', { name: 'Login' })}>
                            <View style={style.logout}>
                                <Text style={{ color: "white" }} >
                                    logOut
                                </Text>
                                <Icons name="log-out" size={25} style={{ marginLeft: 15, color: "white" }} />

                            </View>

                        </TouchableOpacity>
                    </View>







                    <View style={style.backBox}>

                        {/* put form here NB */}
                      


                        <ScrollView style={style.inputContainer}>
                            <View>
                                <View style={style.inputView}>
                                    <Icons style={style.icon} name="user" size={20} color={"#aeb0af"} />




                                    <TextInput

                                        style={style.TextInput}

                                        placeholder="First name."
                                        placeholderTextColor="#003f5c"
                                        onChangeText={(firstname) => setEmail(firstname)}
                                    />
                                </View>

                                <View style={style.inputView}>
                                    <Icons style={style.icon} name="user" size={20} color={"#aeb0af"} />
                                    <TextInput
                                        style={style.TextInput}
                                        placeholder="Surname."
                                        placeholderTextColor="#003f5c"
                                        secureTextEntry={true}
                                        onChangeText={(Surname) => setPassword(Surname)}
                                    />
                                </View>



                            </View>
                        </ScrollView>



                        <View style={style.createAcc}>
                            <TouchableOpacity onPress={() => navigation.navigate('ProfileUpdated', { name: 'ProfileUpdated' })}>
                                <Text>
                                    Update Profile
                                </Text>
                            </TouchableOpacity>

                        </View>
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
 
    logout: {
        flexDirection: "column",
        marginLeft: 20,
        marginTop: 50,

    },
    inputContainer: {
        // backgroundColor:"red",
        marginTop: 200,
        paddingTop: 20
    },

    createAcc: {
        backgroundColor: "#CA730D",
        padding: 15,
        paddingLeft: 100,
        // marginTop: 25,
        marginLeft: 25,
        borderRadius: 90,
        width: "87%",
        marginBottom: 10
    },

    crownContainer: {
        flexDirection: "row",
        padding: 20,
    },
    icon: {
        paddingLeft: 20
    },
    inputView: {
        backgroundColor: "#EFEFEF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        paddingTop: 7,
        marginLeft: 50,
        flexDirection: "row",


        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },


    crown: {
        width: 100,
        height: 100,
        backgroundColor: "white",

        borderRadius: 100,
        alignContent: "center",
        justifyContent: "center",
        marginLeft: 11,
        marginTop: 10,
        padding: 20

    },
    heading: {

        width: "20%",
        marginLeft: "25%",
        marginTop: 50,
        marginBottom: 25,
        // backgroundColor:"red",


        fontSize: 18,
        fontWeight: "bold",
        color: "white"

    },
    backBox: {
        height: "70%",
        width: "95%",
        marginLeft: 10,

        marginTop: 10,
        //backgroundColor:"red",

        borderRadius: 10,
        backgroundColor: "white"

    },

    login: {
        backgroundColor: "#CA730D",



        marginLeft: 25,
        borderRadius: 90,
        padding: 10,
        paddingLeft: 30,
        width: "100%",
        height: "100%",
    },
    logAndFogot: {
        flexDirection: "row",
        // backgroundColor:"blue",
        height: "10%",


    },
    line: {
        marginBottom: 0,
        // backgroundColor:"red",
        marginLeft: 50,
        marginBottom: 50


    },
    forgot: {

        padding: 1,

        marginTop: 10,
        paddingLeft: 60

    },

})
export default Profile
