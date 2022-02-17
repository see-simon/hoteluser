import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";



const GetStarted = ({ navigation }) => {
  return (
    <>
      <View>
       
         <ImageBackground source={require("../images/back.jpg")} style={{height:'90%'}}>
            {/* //<Image style={style.bed1} source={require("../images/bed.png")} /> */}

            <TouchableOpacity
              onPress={() => navigation.navigate("Login", { name: "Login" })}
            >
              <View style={style.GetStartedText}>
                <Text style={{color:'#fff'}}>Get Started</Text>
              </View>
            </TouchableOpacity>
            </ImageBackground>
      
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:'white',
  },

  GetStartedText: {
    backgroundColor: "#6666ff",
    width: "30%",
    height: "50%",
    color:'white',
    borderRadius: 10,
    paddingLeft: 17,
    //   paddingTop:5,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: "35%",
    marginTop: "10%",
    color:'#fff'
  },
  
  
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
export default GetStarted;
