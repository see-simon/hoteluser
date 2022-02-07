import React from "react";
import { Button } from "react-native";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,ImageBackground,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};
import Pictures from "./array";

const BookingDetails = ({ navigation }) => {

  

  const createTwoButtonAlert = () =>
  Alert.alert(
    "cancel booking",
    " are you sure you want to Cancel?",
    
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  return (
    <SafeAreaView style={style.cover}>
      <View style={style.container}>
      <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
        {/* <View style={style.crownContainer}>
          <Icon name="crown" style={style.crown} size={80} color="#CA730D" />
          <Text style={style.heading}>Hotel name</Text>
        </View> */}

        <View style={style.backBox}>
          <View style={style.backBox}>
            {/* <View style={style.BookingDetailsText}>
              <Text>Booking Details</Text>
            </View> */}

            <Image
            style={style.HotelPic}
            source={require("../images/house2.png")}
          />
     

            <View style={style.direction}>
              <View style={style.imageContainer}></View>
              <Text style={style.directionText}>Directions</Text>
              <TouchableOpacity style={style.arrow}
                onPress={() => navigation.navigate("Map", { name: "Map" })}
              >
                <Icon
                  name="directions"
                  style={style.directionIcon}
                  color={"#c2c4c3"}
                  size={30}
                 
              
                ></Icon>
              </TouchableOpacity>

             
              
            </View>
          </View>

          <View style={style.HistoryBox}>
                <Text>Price for 1 Night, 2 Adult</Text>
                <Text>Double Room</Text>
                
                  <Text>1 Bed </Text>
                  <View style={style.room}>
                  <Text> Room 2 </Text>
                  <Text> R500 </Text>
                </View>
              </View>

              <View style={style.cancelbookAndBack}>
                <Text onPress={createTwoButtonAlert} style={style.cancel}>Cancel Booking</Text>
                
              </View>
        </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  cover: {
    
    height: "100%",
  },
  
  BookingDetailsText: {
    marginLeft: "30%",
    
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  arrow:{
    paddingTop: 15,
  },
  HistoryBox: {
    backgroundColor: "#ebeced",
    shadowColor: 100,
    borderRadius: 50,
    width: "90%",
    height: "40%",
    marginLeft: 15,
    marginTop: -135,
    paddingLeft: 60,
    paddingTop: 60,
  },
  cancel: {
    backgroundColor: "#c2c4c3",
    marginLeft: 14,
    borderRadius: 90,
    padding: 10,
    paddingLeft: 30,
    width: "40%",
    height: "100%",
  },
  room:{
    flexDirection:"row"
  },
  back: {
    backgroundColor: "#c2c4c3",
    marginLeft: 45,
    borderRadius: 90,
    padding: 10,
    paddingLeft: 39,
    width: "40%",
    height: "100%",
  },
  cancelbookAndBack: {
    flexDirection: "row",
    marginTop: "14%",
  },
  direction: {
    flexDirection: "row",
    margin:5,
    marginTop:-5
  },
  directionText: {
    marginLeft: 25,
    paddingTop: 20,
  },
  directionIcon: {
    //   backgroundColor: "red"
    marginLeft: 70,
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
  picContainer: {
    //  backgroundColor:"red",
  },
  heading: {
    // color:"white",

    marginLeft: "30%",
    fontWeight: "bold",
  },
  picView: {
    //  backgroundColor:"red",
    height: "40%",
    paddingTop: 0,
    marginTop: 20,
    backgroundColor: "white",
  },

  HotelPic: {
    height: "30%",
    marginLeft: "8%",
    // backgroundColor: "blue",
    width: "85%",
    borderRadius: 30,
  },
  line: {
    marginBottom: 0,
    // backgroundColor:"red",
    marginLeft: "13%",
    marginBottom: 30,
    marginTop: 10,
    color: "#d1d0cd",
  },
  backBox: {
    paddingTop: 7,
    height: "92%",
    width: "95%",
    marginLeft: 10,

    marginTop: 35,
    //backgroundColor:"red",

    borderRadius: 10,
    backgroundColor: "white",
  },

  container: {
    backgroundColor: "#CA730D",
    height: "100%",
  },
  crownContainer: {
    flexDirection: "row",
  },

  crown: {
    width: "25%",
    height: "70%",
    backgroundColor: "white",

    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 11,
    marginTop: 20,
    padding: 5,
  },
  heading: {
    width: "40%",
    marginLeft: "25%",
    marginTop: 90,
    marginBottom: 25,
    //backgroundColor:"red",

    fontWeight: "bold",
    color: "white",
  },
  textColours: {
    color: "white",
  },
  backBox: {
    height: "70%",
    width: "95%",
    marginLeft: 10,
    padding: 10,
    marginTop: 10,
    //backgroundColor:"red",

    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default BookingDetails;
