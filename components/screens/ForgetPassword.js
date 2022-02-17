import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import * as yup from 'yup'


import { Image ,ImageBackground} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Foundation'
import { Value } from 'react-native-reanimated'
import Home from './Home'
import { auth } from './firebase'


const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
  };

const ForgetPassword = ({ navigation }) => {

    const [isPasswordShow, setPasswordShow] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const validate = yup.object({
        email: yup.string().required().min(8),
        password: yup.string().required().min(8),
    })


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const sendPasswordReset = async (email) => {
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Password reset link sent!");
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

    //  auth.confirmPasswordReset(code , password)

    return (
        <>
            <SafeAreaView >


                <View style={style.container}>

                <ImageBackground 
                 source={image}
                 resizeMode="cover"
                 style={style.image}
                 
                 >
                    
                    <View style={style.crownContainer}>


                        <Icon name="crown" style={style.crown} size={80} color="#c2c4c3" />

                        

                    </View>







                    <View style={style.backBox}>

                        {/* put form here NB */}
                        <View style={style.description}>
                            <Text>
                                Enter your email for password recorvery
                            </Text>
                        </View>


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



                            </View>
                        </ScrollView>

                        


                            <TouchableOpacity onPress={sendPasswordReset}>  
                                <Text style={style.verify}>
                                    Varify
                                </Text>
                            </TouchableOpacity>


                        


                    </View>
                    </ImageBackground>


                    </View>
               
            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({

    container: {
        // backgroundColor: "#CA730D",
        height: "100%",
    },
    description:{

        //backgroundColor:"red",
        padding:"12%",
        marginTop:25

    },

    image: {
        flex: 1,
        justifyContent: "center",
      },


    crownContainer: {
        
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
        // marginBottom: 10,
        // paddingTop: 7,
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
        marginTop: 50,
        padding: 20

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

   
    verify: {
        
        backgroundColor:"#c2c4c3",
        height: "20%",
        marginBottom:"40%",
        borderRadius:50,
        width:"40%",
       flex:0,
        justifyContent:'center',
        alignItems:"center",
        paddingTop:10,
        paddingLeft:55,

        marginLeft:"30%",
       
    },
  
  

})
export default ForgetPassword
