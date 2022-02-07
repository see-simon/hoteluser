import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import * as yup from 'yup'
import { Formik } from 'formik'

import { Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Foundation'
import { Value } from 'react-native-reanimated'
import Home from './Home'


const Login = ({ navigation }) => {

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

                            login

                        </Text >

                    </View>







                    <View style={style.backBox}>

                        {/* put form here NB */}


                        <ScrollView style={style.inputContainer}>
                            <View>
                                <View style={style.inputView}>
                                    <Icon style={style.icon} name="mail" color="#aeb0af" size={20} />

                                    <TextInput
                                    
                                        style={style.TextInput}

                                        placeholder="Email."
                                        placeholderTextColor="#003f5c"
                                        onChangeText={(email) => setEmail(email)}
                                    />
                                </View>

                                <View style={style.inputView}>
                                    <Icon style={style.icon} name="lock" color="#aeb0af" size={20} />
                                    <TextInput
                                        style={style.TextInput}
                                        placeholder="Password."
                                        placeholderTextColor="#003f5c"
                                        secureTextEntry={true}
                                        onChangeText={(password) => setPassword(password)}
                                    />
                                </View>



                            </View>
                        </ScrollView>

                        <View style={style.logAndFogot}>

                            <TouchableOpacity style={style.forgot} onPress={() => navigation.navigate('ForgetPassword', { name: 'ForgetPassword' })}>
                                <Text style={style.forgot_button}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('home', { name: 'home' })} style={style.login}>
                                <Text>
                                    Login
                                </Text>
                            </TouchableOpacity>
                           

                        </View>
                        <Text style={style.line} >
                            _____________________________________
                        </Text>
                        <View style={style.createAcc}>
                            <TouchableOpacity onPress={() => navigation.navigate('Registration', { name: 'Registration' })}>
                                <Text>
                                    Creact account
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
    inputContainer: {
        // backgroundColor:"red"
    },

    createAcc: {

        marginBottom: 80,
        marginLeft: 120,
    },

    crownContainer: {
        flexDirection: "row",
        padding:20,
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
        margin: 50,
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
        marginTop: 50,
        padding: 20

    },
    heading: {

        width: "40%",
        marginLeft: "25%",
        marginTop: 80,
        marginBottom: 25,
        //backgroundColor:"red",
        fontSize: 18,
        fontWeight: "bold",
        color: "white"

    },
    backBox: {
        height: "65%",
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
export default Login
