import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import {
  FlatList,
  State,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Foundation";
import Icons from "react-native-vector-icons/Entypo";
import React, { useEffect, useState } from "react";
import firebase, { usersRef } from "./firebase";
import { ListItem } from "react-native-elements";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};

const Registration = ({ navigation }) => {
  //getting from firebase starts here
  // State ={
  //   Users : [],
  // }

  const [users, setUsers] = useState([]);

  //  State ={
  //     Users : []
  // }

  const componentDidMount = () => {
    let users = [];
    usersRef.where("damage", ">", 100).onSnapshot((querySanpShort) => {
      querySanpShort.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers({ Users: users });
    });
  };

  return (
    <SafeAreaView>
      <View style={style.wrap}>
        <ImageBackground source={image} resizeMode="cover" style={style.image}>
          <View>
            <FlatList data={users}></FlatList>{" "}
          </View>
          <View style={style.crownContainer}>
            <Icon name="crown" style={style.crown} size={80} color="#c2c4c3" />
            <Text style={style.heading}> Registration </Text>{" "}
          </View>{" "}
          <View style={style.backBox}>
            <View style={style.textWrap}>
              {" "}
              {/* <Form onPress={CreateUser}> */}{" "}
              <View style={style.TextInput}>
                <Icons
                  style={style.icon}
                  name="user"
                  size={20}
                  color={"#aeb0af"}
                />{" "}
                <TextInput
                  style={style.input}
                  placeholder="First name"
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  // onChangeText={(val) => this.onChangeText("First name", val)}
                />
              </View>{" "}
              <View style={style.TextInput}>
                <Icons
                  style={style.icon}
                  name="user"
                  size={20}
                  color={"#aeb0af"}
                />{" "}
                <TextInput
                  style={style.input}
                  placeholder="Surname"
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  // onChangeText={(val) => this.onChangeText("Surname", val)}
                />
              </View>
              <View style={style.TextInput}>
                <Icon
                  style={style.icon}
                  name="mail"
                  color="#aeb0af"
                  size={20}
                  marginLeft={20}
                />{" "}
                <TextInput
                  style={style.input}
                  placeholder="Email"
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  // onChangeText={(val) => this.onChangeText("email", val)}
                />
              </View>{" "}
              <View style={style.TextInput}>
                <Icons
                  style={style.icon}
                  name="lock"
                  size={20}
                  color={"#aeb0af"}
                />{" "}
                <TextInput
                  style={style.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  // onChangeText={(val) => this.onChangeText("password", val)}
                />
                <Icons
                  style={style.icon}
                  name="lock"
                  size={20}
                  color={"#aeb0af"}
                />{" "}
              </View>{" "}
              <View style={style.TextInput}>
                <Icons
                  style={style.icon}
                  name="lock"
                  size={20}
                  color={"#aeb0af"}
                />{" "}
                <TextInput
                  style={style.input}
                  // secureTextEntry={isPasswordShow ? false : true}
                  placeholder="Confirm password"
                  autoCapitalize="none"
                  placeholderTextColor="black"
                  // onChangeText={(val) => onChangeText("phone_number", val)}
                  // name={isPasswordShow ? "eye-off" : "eye"}
                  size={22}
                  // onPress={() => setPasswordShow(!isPasswordShow)}
                  style={style.icon}
                  name="lock"
                  size={20}
                  color={"#aeb0af"}
                />{" "}
                {/* <Icon name={isPasswordShow ? "eye-off" : "eye"} size={22} /> */}{" "}
              </View>
              <View style={style.createAcc}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Login", { name: "Login" })
                  }
                >
                  <Text> Register </Text>{" "}
                </TouchableOpacity>{" "}
              </View>{" "}
              {/* </Form> */}{" "}
            </View>{" "}
          </View>
          {/* <View>
                                                                                          {<Text>name : </Text>}
                                                                                          {users.map((action)=>[
                                                                                              <View className="simon" key={action.id}>
                                                                                                   {action.name}
                                                                    
                                                                                              </View>
                                                                                          ])}
                                                                                          </View> */}{" "}
        </ImageBackground>{" "}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  wrap: {
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  crown: {
    width: 100,
    height: 100,
    backgroundColor: "white",

    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 11,
    marginTop: 50,
    padding: 20,
  },
  createAcc: {
    marginTop: 25,
    backgroundColor: "#c2c4c3",
    borderRadius: 40,
    height: "15%",
    width: "50%",
    paddingLeft: 55,
    paddingTop: 7,
    marginBottom: 80,
    marginLeft: 85,
  },

  textWrap: {
    height: "55%",
  },
  icon: {
    paddingLeft: 20,
  },
  input: {
    paddingLeft: 20,
  },
  TextInput: {
    backgroundColor: "#EFEFEF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    // marginBottom: 20,
    paddingTop: 7,
    marginStart: 50,
    marginLeft: 50,
    marginTop: 20,

    flexDirection: "row",

    alignItems: "center",
  },
  heading: {
    width: "40%",
    marginLeft: "20%",
    marginTop: 80,
    marginBottom: 25,
    //backgroundColor:"red",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  crownContainer: {
    flexDirection: "row",
    padding: 20,
  },
  backBox: {
    height: "65%",
    width: "95%",
    marginLeft: 10,

    //backgroundColor:"red",

    borderRadius: 10,
    backgroundColor: "white",
  },
});
export default Registration;
