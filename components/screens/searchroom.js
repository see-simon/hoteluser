import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInputComponent,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { State, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";

import DatePicker from "react-native-datepicker";

import { Button, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
// import moment from 'moment';

const searchroom = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [audultPlus, setAudultPlus] = useState(1);
  const [childPlus, setChildPlus] = useState(1);
  const [roomPlus, setRoomPlus] = useState(1);
  //

  const { ItemId, name, hotel, url, roomNum, roomPic, roomMoney } =
    route.params;

  const id = ItemId;
  const n = name;
  const h = hotel;
  const u = url;
  const roomPictures = roomPic;
  const roomPrice = roomMoney;

  const rn = roomNum;

  console.log(h);
  console.log(id);
  console.log(n);
  console.log(u);

  console.log(roomPrice);

  console.log(roomPictures);

  console.log(rn);

  // this should be multiplied with room price from the database

  var totalPrice = 0;

  if (audultPlus > 0) {
    totalPrice = roomPrice * audultPlus;
    console.log(totalPrice);
    // return totalPrice;
  }

  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <View style={style.pic}>
            <Avatar size={200} source={{ uri: u }}></Avatar>
            <Text>Welcom to {h} </Text>
          </View>

          <View style={style.backBox}>
            {/* <View style={style.search}>
              <Text style={{ fo
                ntWeight: "bold" }}>search room</Text>
            </View> */}

            <View style={style.checkin}>
              <Text style={style.checkInText}>CheckIn</Text>

              <View>
                <DatePicker
                  style={{ width: 165 }}
                  date={date}
                  mode="date"
                  // placeholder="check in"
                  // format="YYYY-MM-DD"
                  // minDate="0"
                  // maxDate="0"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: "absolute",
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    setDate(date);
                  }}
                />
              </View>
            </View>
            <View style={style.checkOut}>
              <Text style={style.checkOutText}>CheckOut</Text>
              <DatePicker
                style={style.datePicker}
                // style={{ width: 165 }}
                date={date}
                mode="date"
                // placeholder="select date"
                format="YYYY-MM-DD"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                width: "90%",
                backgroundColor: "#6666ff",
                borderRadius: 50,
                marginLeft: 16,
                padding: 20,
              }}
            >
              <View style={style.room}>
                <Text style={style.roomText}>Rooms</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 10,
                    padding: 10,
                    width: 90,
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <Pressable
                    style={[
                      style.btnadd,
                      { backgroundColor: "white", flexDirection: "row" },
                    ]}
                    onPress={() => setAudultPlus(Math.max(1, audultPlus + 1))}
                  >
                    <Feather name="plus" size={22} color="black" />
                  </Pressable>
                  <Text style={{ fontsize: 21 }}> {audultPlus}</Text>

                  <Pressable
                    style={[
                      style.btnadd,
                      { backgroundColor: "white", flexDirection: "row" },
                    ]}
                    onPress={() => setAudultPlus(Math.max(1, audultPlus - 1))}
                  >
                    <Feather name="minus" size={22} color="black" />
                  </Pressable>
                </View>
              </View>

              <View style={style.room}>
                <Text style={style.roomText}>Adult</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 10,
                    padding: 10,
                    width: 90,
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <Pressable
                    style={[
                      style.btnadd,
                      { backgroundColor: "white", flexDirection: "row" },
                    ]}
                    onPress={() => setChildPlus(Math.max(1, audultPlus + 1))}
                  >
                    <Feather name="plus" size={22} color="black" />
                  </Pressable>
                  <Text style={{ fontsize: 21 }}> {childPlus}</Text>

                  <Pressable
                    style={[
                      style.btnadd,
                      { backgroundColor: "white", flexDirection: "row" },
                    ]}
                    onPress={() => setChildPlus(Math.max(1, childPlus - 1))}
                  >
                    <Feather name="minus" size={22} color="black" />
                  </Pressable>
                </View>
              </View>

              {/* <View style={style.room}>
              <Text style={style.roomText}>Children</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderRadius: 10,
                  padding: 10,
                  width: 90,
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <Pressable
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setRoomPlus(Math.max(1, roomPlus + 1))}
                >
                  <Feather name="plus" size={22} color="black" />
                </Pressable>
                <Text style={{ fontsize: 21 }}> {audultPlus}</Text>

                <Pressable
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setRoomPlus(Math.max(1, roomPlus - 1))}
                >
                  <Feather name="minus" size={22} color="black" />
                </Pressable>
              </View>
            </View> */}
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#6666ff",

                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                marginLeft: "35%",
                marginTop: "50%",
                borderRadius: 10,
                padding: 10,
                width: "30%",
                height: "30%",
                marginTop: 20,
              }}
              onPress={() =>
                navigation.navigate("AvailableRooms", {
                  roomPictures,
                  roomNum,
                  totalPrice,
                  n,
                  h,
                  rn,
                  date,
                  u
                })
              }
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Search Room
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const style = StyleSheet.create({
  backBox: {
    height: "60%",
    width: "95%",
    marginLeft: 10,
    paddingTop: 50,
    marginTop: 50,
    //backgroundColor:"red",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
  },

  pic: {
    // backgroundColor:"red",

    alignItems: "center",
    marginTop: 20,
    borderRadius: 100,
  },
  bookNow: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#c2c4c3",
    marginTop: 50,
    // marginLeft:52,
    width: "40%",
    height: "20%",
    borderRadius: 50,
    marginLeft: "30%",
  },
  bookText: {
    fontWeight: "normal",
    marginLeft: "25%",
  },
  datePicker: {
    marginLeft: 20,
   // backgroundColor: "red",
  },
  checkOut: {
    marginLeft: 30,
    flexDirection: "row",
    paddingTop: 10,
  },
  checkOutText: {
    // backgroundColor:"red",
    paddingRight: 20,
    marginTop: 10,
  },
  checkInText: {
    // backgroundColor:"red",
    paddingRight: 30,
    marginTop: 10,
  },
  room: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    // width:"80%",
  },
  roomText: {
    marginTop: 8,
    paddingLeft: 20,
    paddingRight: 80,
    // backgroundColor: "red",
    color: "white",
  },
  content: {
    //backgroundColor:"blue",
    marginTop: "40%",
  },
  checkin: {
    marginLeft: 30,
    flexDirection: "row",
  },
  rooms: {
    marginLeft: 30,
    marginTop: 30,
    flexDirection: "row",
    paddingLeft: 20,
  },
  search: {
    // backgroundColor: "red",
    alignContent: "center",
    marginLeft: "35%",
    padding: 10,
  },
  crown: {
    width: 100,
    height: 100,
    backgroundColor: "white",

    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 11,

    paddingLeft: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  crownContainer: {
    flexDirection: "row",
    padding: 10,
  },
  heading: {
    width: "40%",
    marginLeft: "25%",
    marginTop: 40,
    marginBottom: 25,
    //backgroundColor:"red",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    backgroundColor: "white",
    height: "100%",
  },
});
export default searchroom;
