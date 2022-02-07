import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,ImageBackground,
  ImagePickerIOS,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";


import React, { useState, useEffect } from "react";
import { Button, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";

import { Value } from "react-native-reanimated";
import Icons from "react-native-vector-icons/Entypo";
import Iconss from "react-native-vector-icons/FontAwesome";
import Home from "./Home";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";


const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};

const Profile = ({ navigation }) => {
  const [isPasswordShow, setPasswordShow] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const validate = yup.object({
    email: yup.string().required().min(8),
    password: yup.string().required().min(8),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // picture

  const [image, setImage] = useState("../images/bed.png");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
        <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
          <View style={style.crownContainer}>
            <Icon name="crown" style={style.crown} size={80} color="#c2c4c3" />

            <Text style={style.heading} >Profile</Text>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("Login", { name: "Login" })}
            >
              <View style={style.logout}>
               
                <Icons
                  name="log-out"
                  size={25}
                  style={{ marginLeft: 15, color: "#c2c4c3" }}
                />
              </View>
            </TouchableOpacity> */}
          </View>

          <View style={style.backBox}>
            {/* put form here NB */}

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 90,
              }}
            >
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    backgroundColor: "#c2c4c3",
                  }}
                />
              )}
              <Iconss
                name="camera"
                size={20}
                color={"#aeb0af"}
                onPress={pickImage}
              />
            </View>

            <ScrollView style={style.inputContainer}>
              <View>
                <View style={style.inputView}>
                  <Icons
                    style={style.icon}
                    name="user"
                    size={20}
                    color={"#aeb0af"}
                  />

                  <TextInput
                    style={style.TextInput}
                    placeholder="First name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstname) => setEmail(firstname)}
                  />
                </View>

                <View style={style.inputView}>
                  <Icons
                    style={style.icon}
                    name="user"
                    size={20}
                    color={"#aeb0af"}
                  />
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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProfileUpdated", {
                    name: "ProfileUpdated",
                  })
                }
              >
                <Text>Update Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    // backgroundColor: "#CA730D",
    height: "100%",
  },

  logout: {
    flexDirection: "column",
    marginLeft: 20,
    marginTop: 50,
  },
  inputContainer: {
    //  backgroundColor:"red",
    marginTop: 100,
    paddingTop: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  createAcc: {
    backgroundColor: "#c2c4c3",
    padding: 15,
    paddingLeft: 100,
    // marginTop: 25,
    marginLeft: 25,
    borderRadius: 90,
    width: "87%",
    marginBottom: 10,
  },

  crownContainer: {
    flexDirection: "row",
    padding: 20,
  },
  icon: {
    paddingLeft: 20,
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
    padding: 20,
  },
  heading: {
    width: "20%",
    marginLeft: "20%",
    marginTop: 50,
    marginBottom: 25,
    // backgroundColor:"red",

    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  },
  backBox: {
    height: "70%",
    width: "95%",
    marginLeft: 10,

    marginTop: 10,
    //backgroundColor:"red",

    borderRadius: 10,
    backgroundColor: "white",
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
    marginBottom: 50,
  },
  forgot: {
    padding: 1,

    marginTop: 10,
    paddingLeft: 60,
  },
});
export default Profile;
