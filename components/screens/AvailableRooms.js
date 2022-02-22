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
const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};

const AvailableRooms = ({ navigation }) => {
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
                
                {room.map((element) => (
                 
                
                 <View style={style.details}>
                    <TouchableOpacity onPress={() => navigation.navigate("paymentScreen")}>

                 <Avatar size={150}  source={{ uri: element.Url }}></Avatar>
                 </TouchableOpacity>
                 <View style={style.price}>
                 <Text >Price : R {element.RoomPrice}</Text>
                 <Text >Room : {element.RoomNumber}</Text>
                 <Text>Choose room</Text>
                 </View>
                 
                 </View>
                ))}
                
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
    backgroundColor:"white"
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  details: {
    flexDirection:"row",
    marginTop: "10%",
    marginLeft: 10,
    width:"95%",
    borderWidth:1,
    padding:5,
    

  },
  price:{
    marginLeft: 20,

  },
  text: {
    fontWeight: "bold",
    color: "#6666ff",
    fontSize:18
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AvailableRooms;
