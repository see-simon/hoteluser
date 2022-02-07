import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
  TextInput,
} from "react-native";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};

const History = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <ImageBackground source={image} resizeMode="cover" style={style.image}>
        <TextInput
          style={style.textInputStyle}
          
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />

          <View style={style.back}>
            <View style={style.historyBox}>
              <Text>Price for 1 Night, 2 Adult</Text>
              <Text>Double Room</Text>
              <View style={style.room}>
                <Text>1 Bed </Text>
                <Text> Room 2 </Text>
                <Text> R500 </Text>
              </View>
            </View>
            <View style={style.historyBox}>
              <Text>Price for 1 Night, 2 Adult</Text>
              <Text>Double Room</Text>
              <View style={style.room}>
                <Text>1 Bed </Text>
                <Text> Room 2 </Text>
                <Text> R500 </Text>
              </View>
            </View>
            <View style={style.historyBox}>
              <Text>Price for 1 Night, 2 Adult</Text>
              <Text>Double Room</Text>
              <View style={style.room}>
                <Text>1 Bed </Text>
                <Text> Room 2 </Text>
                <Text> R500 </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  itemStyle: {
    padding: 10,
  },
  back: {},
  historyBox: {
    width: "90%",
    height: "25%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
    marginLeft: 18,
    paddingLeft: "20%",
    margin:10
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 30,
    margin: 10,
    borderColor: "#0000",
    backgroundColor: "#FFFFFF",
  },
});

export default History;
