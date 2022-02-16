import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  useColorScheme,
  ImageStore,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-vector-icons/AntDesign";
import { array } from "yup/lib/locale";
import Pictures from "./array";
import firebase from "firebase";
// import { Avatar } from 'react-native-paper';
// import {auth} from "./firebase"

// const image = {
//   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
// };

const home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);



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
    let uid = e.target.id

    db.collection('createHotel').doc(uid).get({
      // Name: name,
      // Surname: surname,
      // Location: location,
      // Description: description,
      // Age: age
      Url
    })
      .then(() => { console.log('got the url') })
      .catch((err) => { console.log(Url) })


  }



  return (
    <>
      <SafeAreaView style={style.cover}>
        <ImageBackground >
          {/* <View style={style.backBox}> */}

          <View style={{ alignItems: "center", marginTop: 5 }}>
            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
              Search hotel
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
              style={{ width: "100%", height:40, borderRadius:10, borderColor:'#6666ff', borderWidth:3 }}
              // onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="Search Her leahe"
            />
          </View>

          <View>
            <Text style={{ fontSize: 20, margin: 10 }}>Popular hotels</Text>
          </View>

          <ScrollView>
            <View>
              {users.map((element) => (
                <TouchableOpacity
                  style={{ margin: 10, flexDirection: "row" }}
                  onPress={() =>
                    navigation.navigate("AvailableRooms", {
                      name: "AvailableRooms",
                    })
                  }
                >

                  <View style={style.details}>

                    {/* <Text>{element.id}</Text> graps the id from database */}


                    <Avatar size={150} source={{ uri: element.Url }}></Avatar>

                    <View style={style.price}>
                      <Text style={{marginBottom:20, fontWeight:400, fontSize:18}}>{element.HotelName}</Text>
                      <Text style={{marginBottom:20}}> {element.Location}</Text>
                      {/* <Icon name="eye"></Icon> */}
                      <Text  style={{textAlign:'center', justifyContent:"center", backgroundColor:"#6666ff", width:"80%", height:"20%",
                      padingLeft:"15%", color:'#fff', borderRadius:5, padding:"5%"}}>View</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  cover: {
    height: "100%",
  },
  view: {
    width: "30%",
    
    backgroundColor:"#fff",
    // alignItems:'center',
    // justifyContent:'center'
  paddingLeft:5,
    justifyContent: "center",
    alignContent: "center",

  },
  details: {
    flexDirection: "row",
    marginTop: "10%",
    marginLeft: 20,
    borderWidth:1,
    borderColor:"#c2c2c2",
    padding:10,
    borderStyle:"solid"

  },
  price: {
    marginLeft: 20,

  },
  hotelPictures: {
    marginLeft: 0,
    marginTop: 5,
    borderRadius: 20,
    // backgroundColor:"red",
    paddingLeft: 50,
    flexDirection: "row",
  },
  hotelNameText: {
    marginRight: 20,
  },
  description: {
    marginRight: 20,
  },
  pic: {
    marginLeft: 10,
    borderRadius: 15,
  },
  container: {
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  search: {
    backgroundColor: "#d4d3cf",
    marginLeft: 50,
    borderRadius: 50,
    paddingLeft: 50,
    marginTop: 15,

    width: "70%",
    height: "5%",
  },

  heading: {
    // color:"white",

    marginLeft: "30%",
    fontWeight: "bold",
  },

  line: {
    marginBottom: 0,
    // backgroundColor:"red",
    marginLeft: "13%",
    marginBottom: 30,
    marginTop: 10,
    color: "#d1d0cd",
  },
  picContainer: {},
});
export default home;
