import { View, Text, StyleSheet, Button, ImageBackground, Image } from "react-native";
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
import firebase, { usersRef } from "./firebase";
import { ListItem } from "react-native-elements";
// import users from './classes'
import { auth } from "./firebase";



const Registration = ({ navigation }) => {
 
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [firstName, setFirstName] = useState();
  // const [surname, setSurname] = useState();


  const  handleSinUp =()=>{
    auth.createUserWithEmailAndPassword(email,password)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email)
      console.log(user.password)
      ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
    })
    .catch(error=>alert(error.message))
    
 }

 
 

 

  return (
    <SafeAreaView>
      <View style={style.wrap}>
        
      <Image   style={{alignSelf:"center", width:"120%", height:"40%", borderBottomRightRadius:300, marginBottom:0  }} source={require("../images/w.jpg")} />

          <View style={style.crownContainer}>
            
            <Text style={style.heading}> Registration </Text>
          </View>
          <View style={style.backBox}>
            
              {/* <Form onPress={CreateUser}> */}
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
                 onChangeText={(text) => setFirstName(text)}
                />
              </View>
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
                  onChangeText={(text) => setSurname(text)}
                />
              </View>
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
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
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
                  onChangeText={(text) => setPassword(text)}
                />
                {/* <Icons
                  style={style.icon}
                  name="lock"
                  size={20}
                  color={"#aeb0af"}
                /> */}
              </View>
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
                  // onPress={() =>
                  //   navigation.navigate("Login", { name: "Login" })
                  // }
                
                onPress={handleSinUp}>
                  
                  <Text style={{color:'white'}}> Register </Text>
                </TouchableOpacity>
              </View>
              {/* </Form> */}
           
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
