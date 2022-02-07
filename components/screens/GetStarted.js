import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};

const GetStarted = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
            <Image style={style.bed1} source={require("../images/bed.png")} />

            <TouchableOpacity
              onPress={() => navigation.navigate("Login", { name: "Login" })}
            >
              <View style={style.GetStartedText}>
                <Text>Get Started</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
  },

  GetStartedText: {
    backgroundColor: "#c2c4c3",
    width: "30%",
    height: "30%",
    borderRadius: 10,
    paddingLeft: 17,
    //   paddingTop:5,
    flex: -2,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: "35%",
    marginTop: "10%",
  },
  bed1: {
    marginTop: "40%",
    marginLeft: "7%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
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
