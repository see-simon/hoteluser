import React from "react";
import { Text } from "react-native";
import { SafeAreaView, View,ImageBackground, Image, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};


const AvailableRooms = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
      <View style={style.cover}>
      <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
        <View style={style.header}>
          <Text style={style.text}>Available Rooms</Text>
        </View>
        <ScrollView>
          <View style={style.RoomAndDetails}>
            <View style={style.picContainer}>
              {Pictures.availableRooms.map((action) => [
                <ListItem>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("paymentScreen", {
                        name: "paymentScreen",
                      })
                    }
                  >
                    <Image style={style.pic} source={action.room}></Image>
                    <View style={style.RoomDetails}>
                <Text>Room {action.id} Price:  {action.price} </Text>

            </View>
                  </TouchableOpacity>
                </ListItem>,
              ])}
            </View>
           
          </View>
        </ScrollView>
        </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  cover: {
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  RoomAndDetails:{
   

  },
  text: {
    fontWeight: "bold",
    color: "black",
  },
  RoomDetails: {
    flexDirection:"row"
  },
  pic: {
    marginTop: "10%",
    width: 200,
    height: 110,
    borderRadius:20
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
