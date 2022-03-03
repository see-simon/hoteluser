import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-elements";
import { FlatList, Text } from "react-native";
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

  const { roomPictures, totalPrice, roomNum } = route.params;

  console.log(" simon ", roomPictures)
  console.log("total price : ", totalPrice)
  console.log(roomNum)

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


        <View style={{marginTop:15, marginTop: "10%",
          marginLeft: 10,
          width: "95%",
          borderWidth: 1,
          padding: 5}}>
          <ScrollView horizontal={true}

          >
            {
              roomPictures.map((element) =>


                
                  <View>

                  <Avatar  size={150} source={{ uri: element }} ></Avatar>
                    

                  </View>
                
              )
            }

          </ScrollView>
        </View>

          <View style={style.price}>
            <Text >Price : R {totalPrice}</Text>

            <Text>Choose room {roomNum}</Text>
          </View>

          <View  style={{backgroundColor: "#6666ff", 
    
            alignItems:"center",
            justifyContent:"center",
            marginLeft: "45%",
            marginTop:"50%",
            borderRadius: 10,
            padding: 10,
            width: "20%",
            height: "5%",  marginTop:20,}}>
        
          <TouchableOpacity onPress={() => navigation.navigate("Payment")}>

              <Text style={{ alignSelf:"center", color: "#fff",textAlign:'center', fontWeight: "bold" }}>Continue</Text>
              </TouchableOpacity>
          </View>

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
    // flexDirection:"row",
    marginTop: "10%",
    marginLeft: 10,
    width: "95%",
    borderWidth: 1,
    padding: 5,
  },
  price: {
    marginLeft: 20,
    marginTop:20,

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
