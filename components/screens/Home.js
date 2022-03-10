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
  ImageStore, ScrollView, TouchableOpacity
} from "react-native";
import { Avatar, Button, ListItem } from "react-native-elements";

import { Icon } from "react-native-vector-icons/AntDesign";
import { array } from "yup/lib/locale";
import Pictures from "./array";
import firebase from "firebase";



const Home = ({ navigation }) => {
  

  const [hotels, setHotels] = useState([]);

  const db = firebase.firestore();

  useEffect(() => {
    let userInfo = [];
    db.collection("createHotel")
    
      .get()
      
      .then((res) => {
        res.forEach((action) => {
          userInfo.push({ ...action.data(), id: action.id });
        });

        setHotels(userInfo);
        // console.log(id)
      });
  }, []);

  // search 

  const [queries, setQuery]= useState([])
  
  const loc = db.collection("createHotel")

  console.log(queries," hjdsjndsjndsjnksxdknjsdjkn")


  const Search = () => {
    // const q = query(loc, where("location", "==", queries));
    // console.log(q);
    console.log('RUUNING',queries)
    if(queries){

      loc.where("location", "==", queries).get()
        .then(async(querySnapshot) => {
          let results=[];
  
         await querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "============= => ", doc.data());
            results.push(doc.data())
          });

          setHotels(results)
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }else{
      loc.where("location", "==", 'limpopo').get()
        .then(async(querySnapshot) => {
  
         await querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data.id, "============= => ", doc.data);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }

  };

  return (
    <>
      <SafeAreaView style={style.cover}>
        {/* <View style={style.backBox}> */}

        <View style={{ alignItems: "center", marginTop: 5 }}>
          <Text style={{ color: "#6666ff", fontWeight: "bold", fontSize: 20 }}>
            Welcome User
          </Text>
        </View>
        <View>
          <TextInput placeholder="Search"
          onBlur={()=>Search()}
          onChangeText={(text)=>setQuery(text)}
          value={queries}>

          </TextInput>

       
         
        </View>

        
        

        <View>
          <Text style={{ fontSize: 20, margin: 10, color: "gray" }}>
            Popular hotels
          </Text>
        </View>

        {/* <View>

          {queries.map((element)=>
          <Text>{element.Location}</Text>
          
          )}
        </View> */}


        <ScrollView>
          {hotels.map((element) => (

           <> 
            <TouchableOpacity onPress={() => navigation.navigate("Searchroom",   {ItemId:element.id , name:element.Location, hotel:element.HotelName,
               url: element.Url, roomPic: element.roomUrl, roomNum:element.RoomNumber , 
               roomMoney: element.RoomPrice })}>
                 
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
export default Home;
