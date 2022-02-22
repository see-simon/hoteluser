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
import { Button, Image, Platform, ToastAndroid } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";

import { Value } from "react-native-reanimated";
import Icons from "react-native-vector-icons/Entypo";
import Iconss from "react-native-vector-icons/FontAwesome";
import firebase from "firebase";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";




const Profile = ({ navigation }) => {
  const [isPasswordShow, setPasswordShow] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const validate = yup.object({
    email: yup.string().required().min(8),
    password: yup.string().required().min(8),
  });

  

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

  //

  const [name , setName]= useState();
  const [surname, setSurname] = useState();

  const getName = (e) => {
    setName(e.target.value);
  };

  const getSurname = (e) => {
    setSurname(e.target.value);
  };

  //create profile

  const db = firebase.firestore()

  const createProfile = (e) => {
    // e.preventDefault();
    // let uid = e.target.id
    db.collection("/createProfile/")
      .add({
        // Url: url,
        // HotelName: hotelName,
        // Location: location,

        Name : name,
        Surname : surname,          
      })
      .then((res) => {
        console.log("prfile created");
      })
      .catch((err) => {
        console.log(err);
      });
      ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT)
  };



  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <View style={style.backBox}>
            

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
                    // backgroundColor: "#6666ff",
                    borderWidth:1,

                  }}
                />
              )}
              <Iconss
                name="camera"
                size={20}
                color={"#6666ff"}
                onPress={pickImage}
                marginTop={5}
              />
            </View>

            <ScrollView style={style.inputContainer}>
            
                <View style={style.inputView}>
                  <Icons
                    style={style.icon}
                    name="user"
                    size={20}
                    color={"#6666ff"}
                  />

                  <TextInput
                    style={style.TextInput}
                    placeholder="First name"
                    placeholderTextColor="black"
                    onChangeText={(name) => getName(name)}
                  />
                </View>

                <View style={style.inputView}>
                  <Icons
                    style={style.icon}
                    name="user"
                    size={20}
                    color={"#6666ff"}
                  />
                  <TextInput
                    style={style.TextInput}
                    placeholder="Surname"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(surname) => getSurname(surname)}
                  />
                </View>
              
            </ScrollView>

            <View style={style.createAcc}>
              <TouchableOpacity
                // onPress={() =>
                //   navigation.navigate("ProfileUpdated", {
                //     name: "ProfileUpdated",
                //   })
                  
                // }
                onPress={createProfile}
              >
                <Text>Update Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
 
  createAcc: {
    backgroundColor: "#6666ff",
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
    // marginLeft: 50,
    flexDirection: "row",

    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  
  
  backBox: {
    height: "80%",
    width: "95%",
    marginLeft: 10,

    marginTop: 10,
    //backgroundColor:"red",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
  },

 
 
   

});
export default Profile;
