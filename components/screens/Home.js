import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
  ImageStore,
} from "react-native";
import { Avatar, Button, ListItem } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-vector-icons/AntDesign";
import { array } from "yup/lib/locale";
import Pictures from "./array";
import firebase from "firebase";



const home = ({ navigation }) => {
  

  const [users, setUsers] = useState([]);

  const db = firebase.firestore();

  useEffect(() => {
    let userInfo = [];
    db.collection("createHotel")
      .get()
      .then((res) => {
        res.forEach((action) => {
          userInfo.push({ ...action.data(), id: action.id });
        });

        setUsers(userInfo);
        // console.log(id)
      });
  }, []);

  //

  const hotelAndAvailableRooms = (e) => {
    let uid = e.target.id;

    db.collection("createHotel")
      .doc(uid)
      .get({
        // Name: name,
        // Surname: surname,
        // Location: location,
        // Description: description,
        // Age: age
        Url,
      })
      .then(() => {
        console.log("got the url");
      })
      .catch((err) => {
        console.log(Url);
      });
  };

  // search 

  useEffect(() => {
    let search = [];
    db.collection("createHotel")
      .get()
      .then((res) => {
        res.forEach((action) => {
          userInfo.push({ ...action.data(), id: action.id });
        });

        setSearch(search);
        // console.log(id)
      });
  }, []);

  const searchHotel =()=>{
    db.collection('createHotel')
    .where('Location' , 'in' , ['po','PO'])
    .limit(5)
    .get()
    .then(querysnapshot=>{
      console.log(querysnapshot, " jndjmcc")
    })
  }

  const [search, setSearch] = useState([]);
  

  return (
    <>
      <SafeAreaView style={style.cover}>
        {/* <View style={style.backBox}> */}

        <View style={{ alignItems: "center", marginTop: 5 }}>
          <Text style={{ color: "#6666ff", fontWeight: "bold", fontSize: 20 }}>
            Welcome User
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: "#d4d3cf",
            // width: "95%",
            // height: "6%",
            padding: 5,
            margin: 10,
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: 40,
              borderRadius: 10,
              borderColor: "#6666ff",
              borderWidth: 3,
              paddingLeft: 10,
            }}
            // onChangeText={(text) => searchFilterFunction(text)}
             value={search}
            onChangeText={(text) => searchHotel(text)}
            //underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
        </View>
        

        <View>
          <Text style={{ fontSize: 20, margin: 10, color: "gray" }}>
            Popular hotels
          </Text>
        </View>
<View>
            {
              search.map(action=>(
                <Button  onPress={searchHotel}> search</Button>
              ))
            }
            </View>

        <ScrollView>
          {users.map((element) => (

           <> 
            <TouchableOpacity onPress={() => navigation.navigate("searchroom",   {ItemId:element.id , name:element.Location, hotel:element.HotelName, url: element.Url, roomPic: element.roomUrl, roomNum:element.RoomNumber , roomMoney: element.RoomPrice })}>

            

              <View
                style={{
                  margin: 10,
                  flexDirection: "row",
                  borderWidth: 1,
                  padding: 2,
                }}
              >
                <Avatar size={150} source={{ uri: element.Url }}></Avatar>
                <View style={style.price}>
                  <Text
                    style={{
                      marginBottom: 10,
                      fontSize: 12,
                    }}
                  ></Text>
                  <Text>Name: {element.HotelName}</Text>
                  <Text style={{ marginBottom: 20 }}>
                    Location: {element.Location}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            </>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  cover: {
    height: "100%",
    backgroundColor: "#fff",
  },

  details: {
    flexDirection: "row",
    marginTop: "1%",
    marginLeft: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#c2c2c2",
    padding: 10,
    borderStyle: "solid",
  },
  price: {
    marginLeft: 20,
    // marginTop:-20
  },
});
export default home;
