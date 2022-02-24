import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-elements";
import { Text } from "react-native";
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import firebase from "firebase";


const AvailableRooms = ({ navigation, route }) => {

  const { roomPictures } = route.params;

  console.log(" simon ", roomPictures)

  const [room, setUsers] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    let userInfo = [];
    db.collection("createRoom")
      .get()
      .then((res) => {
        res.forEach((action) => {
          userInfo.push({ ...action.data(), id: action.id });
        });

        setUsers(userInfo);
      });
  }, []);


  return (
    <>
      <SafeAreaView>
        <View style={style.cover}>

          <View style={style.header}>
            <Text style={style.text}>Available Rooms</Text>
          </View>
          <ScrollView>
            <View>

              {
                roomPictures.map((element) =>
                  <TouchableOpacity onPress={() => navigation.navigate("paymentScreen")}>
                    <View style={style.details}>

                      <Avatar size={150} source={{ uri: element }}></Avatar>

                      <View style={style.price}>
                        <Text >Price : R {element.RoomPrice}</Text>
                        <Text >Room : {element.RoomNumber}</Text>
                        <Text>Choose room</Text>
                      </View>


                    </View>
                  </TouchableOpacity>
                )
              }
            </View>
          </ScrollView>

        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  cover: {
    height: "100%",
    backgroundColor: "white"
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  details: {
    flexDirection: "row",
    marginTop: "10%",
    marginLeft: 10,
    width: "95%",
    borderWidth: 1,
    padding: 5,


  },
  price: {
    marginLeft: 20,

  },
  text: {
    fontWeight: "bold",
    color: "#6666ff",
    fontSize: 18
  },
  RoomDetails: {
    flexDirection: "row",
  },
  pic: {
    marginTop: "10%",
    width: 200,
    height: 110,
    borderRadius: 20,
  },
  header: {
    marginTop: "20%",
    marginLeft: "35%",
  },
  picContainer: {
    width: "10%",
    marginTop: "0%",
  },
  container: {
    flexDirection: "column",
  },

});

export default AvailableRooms;
