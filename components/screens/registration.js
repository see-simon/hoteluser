
import { View, Text, StyleSheet, Button } from "react-native";
import { State, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Foundation'
import Icons from 'react-native-vector-icons/Entypo'
import React, { useState } from 'react';

const Registration = ({ nevigation }) => {

    // State = { username: '', password: '', email: '', phone_number: '' }
    // onChangeText = (key, val) => {
    //     this.setState({ [key]: val })
    // }


    // signUp = async () => {
    //     const { username, password, email, phone_number } = this.state
    //     try {
    //       // here place your signup logic
    //       console.log('user successfully signed up!: ', success)
    //     } catch (err) {
    //       console.log('error signing up: ', err)
    //     }
    //   }

    const [isPasswordShow, setPasswordShow] = useState(false)


    return (

        <SafeAreaView >
            <View style={style.wrap}>
                <View style={style.crownContainer}>


                    <Icon name="crown" style={style.crown} size={80} color="#CA730D"   />

                    <Text style={style.heading}>

                     Registration

                    </Text >

                </View>

                <View style={style.backBox}>
                    <View style={style.textWrap}>

                        <View style={style.TextInput}>
                            <Icons style={style.icon} name="user" size={20} color={"#aeb0af"} />
                            <TextInput
                                style={style.input}
                                placeholder='First name'
                                autoCapitalize="none"
                                placeholderTextColor="#003f5c"
                                onChangeText={val => this.onChangeText('First name', val)}
                            />
                        </View>
                        <View style={style.TextInput}>
                            <Icons style={style.icon} name="user" size={20} color={"#aeb0af"} />
                            <TextInput

                                style={style.input}
                                placeholder='Surname'
                                autoCapitalize="none"
                                placeholderTextColor="#003f5c"
                                onChangeText={val => this.onChangeText('Surname', val)}
                            />
                        </View>

                        <View style={style.TextInput}>
                            <Icon style={style.icon} name="mail" color="#aeb0af" size={20} marginLeft={20} />
                            <TextInput

                                style={style.input}
                                placeholder='Email'
                                autoCapitalize="none"
                                placeholderTextColor="#003f5c"
                                onChangeText={val => this.onChangeText('email', val)}
                            />
                        </View>
                        <View style={style.TextInput}>
                            <Icons style={style.icon} name="lock" size={20} color={"#aeb0af"} />
                            <TextInput
                                style={style.input}
                                placeholder='Password'
                                secureTextEntry={true}
                                autoCapitalize="none"
                                placeholderTextColor="#003f5c"
                                onChangeText={val => this.onChangeText('password', val)}
                            />
                            <Icons style={style.icon} name="lock" size={20} color={"#aeb0af"} />
                        </View>
                        <View style={style.TextInput}>
                            <Icons style={style.icon} name="lock" size={20} color={"#aeb0af"} />
                            <TextInput style={{paddingLeft:0}}
                                style={style.input}
                                secureTextEntry={isPasswordShow ? false : true}
                                placeholder='Confirm password'
                                autoCapitalize="none"
                                placeholderTextColor="#003f5c"
                                onChangeText={val => onChangeText('phone_number', val)}
                                name={isPasswordShow ? "eye-off" : "eye"} size={22}
                                onPress={() => setPasswordShow(!isPasswordShow)}
                                style={style.icon} name="lock" size={20} color={"#aeb0af"}
 
                            />
                            <Icon name={isPasswordShow ? "eye-off" : "eye"} size={22}/>
                        </View>
                        
                        <View style={style.createAcc}>
                            <TouchableOpacity>
                                <Text>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    wrap: {
        backgroundColor: "#CA730D",

        height: "100%",
    },
    crown:{
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
    createAcc: {
        marginTop:25,
        backgroundColor:"#CA730D",
        borderRadius:40,
        height:"15%",
        width:"50%",
        paddingLeft:55,
        paddingTop:7,
        marginBottom: 80,
        marginLeft: 85,
    },

    textWrap: {
        height: "55%"
    },
    icon: {
        paddingLeft: 20
    },
    input: {
        paddingLeft: 20,


    },
    TextInput: {
        backgroundColor: "#EFEFEF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        // marginBottom: 20,
        paddingTop: 7,
        marginStart: 50,
        marginLeft: 50,
        marginTop: 20,


        flexDirection: "row",

        alignItems: "center",
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
    crownContainer: {
        flexDirection: "row",
        padding: 20,
    },
    backBox: {
        height: "65%",
        width: "95%",
        marginLeft: 10,


        //backgroundColor:"red",

        borderRadius: 10,
        backgroundColor: "white"

    },

})
export default Registration

