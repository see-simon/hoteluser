import { View, Text, StyleSheet, Button, ImageBackground, Image,Alert } from "react-native";
import {
  FlatList,
  State,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Foundation";
import Icons from "react-native-vector-icons/Entypo";
import React, { useEffect, useState } from "react";
// import firebase, { db, usersRef } from "./firebase";
import { ListItem } from "react-native-elements";
// import users from './classes'
import { auth ,db} from "./firebase";


import { Formik } from 'formik';
import * as yup from 'yup';
const Registration = ({ navigation }) => {
 
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [visiable, setvisiable] = useState(true);
  const [show, setShow] = useState(false);

  const [isPasswordShow,setPasswordShow]=useState(false);
  const [isSelected,setSelection]=useState(false);
  const ReviewSchem =yup.object({
    email:yup.string().required().min(6),
    firstName: yup.string().required().max(15).min(3),
    surname: yup.string().required().max(15).min(3),
    password: yup.string().required().min(6).max(12),
    // passwordConfirm: yup.string().required().min(6).max(12).oneOf([yup.ref('password'), null], 'password doess not math'),
 
})
  const  handleSinUp =(data)=>{
    const { uid, email, password, firstName,surname } = data
    auth.createUserWithEmailAndPassword(email.trim().toLowerCase(),password)
    // .then(userCredentials =>{
    //   const user = userCredentials.user;
    //   console.log(user.email)
    //   console.log(user.password)
    //   ToastAndroid.show('successfully registered!', ToastAndroid.SHORT);
    .then((res) => {
      db.ref('/user').push({
        email:email.trim().toLowerCase(),
        firstName:firstName.trim().toLowerCase(),
        surname,
      })
      
    })
    .catch(error=>alert(error.message))
    
 }

 const createUser  = async (data) => {
  try {
      const { uid, email, password, firstName,surname } = data

      const user = await auth.createUserWithEmailAndPassword(
          email.trim().toLowerCase(), password).then(res => {
          db.ref(`/user`).child(res.user.uid).set({
              firstName: firstName,
              surname: surname,
              email: email.trim().toLowerCase(),
              uid: res.user.uid
          })
      })
      // .then(then(res =>{
      //     res.user.sendEmailVerifcation()
      // }))
  }
  catch (error) {
      if (error.code == 'auth/email-already-in-use') {
          Alert.alert(
              "This email already exist"
          )
      }
      if (
          error.code == 'auth/invalid-email') {
          Alert.alert(
              "This email already exist"
          )
      }
      else {
          Alert.alert(error.code)
      }

  }

}

  return (
    <SafeAreaView>
      <View style={style.wrap}>
        
      <Image   style={{alignSelf:"center", width:"120%", height:"40%", borderBottomRightRadius:300, marginBottom:0  }} source={require("../images/w.jpg")} />

          <View style={style.crownContainer}>
            
            <Text style={style.heading}> Registration </Text>
          </View>
          <View style={style.backBox}>
            
          <Formik
                    initialValues={{ email: '', password: '',firstName:'', surname:''}}
                    validationSchema={ReviewSchem}
                    onSubmit={(values, action) => {
                        action.resetForm()
                        handleSinUp(values)
                    }}
                >
                    {(props) =>(
                      <>
              <View style={style.TextInput}>
                <Icons
                  style={style.icon}
                  name="user"
                  size={20}
                  color={"#6666ff"}
                />
                <TextInput
                  style={style.input}
                  placeholder="First name"
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  onChangeText={props.handleChange('firstName')}
                  value={props.values.firstName}
                  onBlur={props.handleBlur('firstName')}
                />
              </View>
              {props.errors.firstName? <Text style={{color:"red"}}>{props.errors.firstName}</Text>:null}
              <View style={style.TextInput}>
                <Icons
                  style={style.icon}
                  name="user"
                  size={20}
                  color={"#6666ff"}
                />
                <TextInput
                  style={style.input}
                  placeholder="Surname"
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  onChangeText={props.handleChange('surname')}
                  value={props.values.surname}
                  onBlur={props.handleBlur('surname')}
                />
              </View>
              {props.errors.surname? <Text style={{color:"red"}}>{props.errors.surname}</Text>:null}
              <View style={style.TextInput}>
                <Icon
                  style={style.icon}
                  name="mail"
                  color="#6666ff"
                  size={20}
                  marginLeft={20}
                />
                <TextInput
                  style={style.input}
                  placeholder="Email"
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur('email')}
                />
              </View>
              {props.errors.email? <Text style={{color:"red"}}>{props.errors.email}</Text>:null}
              <View style={style.TextInput}>
                <Icons
                  style={style.icon}
                  name="lock"
                  size={20}
                  color={"#6666ff"}
                />
                <TextInput
                  style={style.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            onBlur={props.handleBlur('password')}
                />
                
               
              
              </View>
              {props.errors.password? <Text style={{color:"red"}}>{props.errors.password}</Text>:null}
              {/* <View style={style.TextInput}>
                <Icons
                  style={style.icon}
                  name="lock"
                  size={20}
                  color={"#aeb0af"}
                />
                <TextInput
                  style={style.input}
                  
                  placeholder="Confirm password"
                  autoCapitalize="none"
                  placeholderTextColor="black"                 
                  size={22}
                  style={style.icon}
                  name="lock"
                  size={20}
                  color={"#aeb0af"}
                  onChangeText={(text) => setPassword(text)}
                />
                
              </View> */}
              <View style={style.createAcc}>
                <TouchableOpacity
  
                onPress={props.handleSubmit}>
                  
                  <Text style={{color:'white'}}> Register </Text>
                </TouchableOpacity>
              </View>
              {/* </Form> */}
             </>
              )}
                </Formik>
          </View>
        
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  wrap: {
    height: "100%",
    backgroundColor:'white'
  },
 
  
  createAcc: {
    marginTop: 25,
    backgroundColor: "#6666ff",
    borderRadius: 40,
    height: "10%",
    width: "40%",
    
    alignItems:'center',
    alignContent:"center",
    justifyContent:"center",
    
    marginBottom: 80,
    // marginLeft: 85,
  },

  textWrap: {
    // height: "55%",
    // marginTop:50,
    // marginLeft: 27,
  },
  icon: {
    paddingLeft: 20,
  },
  input: {
    paddingLeft: 20,
  },
  TextInput: {
    backgroundColor: "#EFEFEF",
    borderRadius: 30,
    width: "90%",
    height: 45,
    
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    // width: "40%",
    // marginLeft: "20%",
    textAlign:"center",
    marginTop: 10,
    // marginBottom: 25,
    //backgroundColor:"red",
    fontSize: 18,
    fontWeight: "bold",
    color: "#6666ff",
  },
  crownContainer: {
    // flexDirection: "row",
    padding: 20,
  },
  backBox: {
    height: "46%",
    width: "95%",
    marginLeft: 10,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    //backgroundColor:"red",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
export default Registration;
