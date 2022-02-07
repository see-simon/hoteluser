import React from "react";
import { TextInput, Text, View, Image, StyleSheet ,ImageBackground} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import "../images/logo.png";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/Foundation";
const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};


const paymentScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView >
        <View style={style.container}>

        <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
        
        <View style={style.headercontainer}>
          <View>
            <Icons name="crown" style={style.crown} size={80} color="#c2c4c3" />
          </View>
          <Text style={style.addCard}>Add card</Text>
        </View>

        <View style={style.backBox}>
          <ScrollView>
            <View>
              <Image
                style={style.bank}
                source={require("../images/bankcard.png")}
              />
            </View>

            <View style={style.details}>
              <View style={style.spaceBetweenInput}>
                <Text>card Number</Text>

                <View
                  style={style.inputBox}
                  class="input-group mb-3 input-group-sm"
                >
                  <Icon
                    name="credit-card"
                    size={25}
                    style={{ paddingLeft: 2, paddingRight: 15 }}
                  ></Icon>
                  <TextInput
                    style={style.input}
                    type="text"
                    class="form-control"
                    placeholder="Enter card number"
                  />
                </View>
              </View>

              <View style={style.spaceBetweenInput}>
                <Text>card holder name</Text>

                <View
                  style={style.inputBox}
                  class="input-group mb-3 input-group-sm"
                >
                  <Icon
                    name="people"
                    size={25}
                    style={{ paddingLeft: 2, paddingRight: 15 }}
                  ></Icon>
                  <TextInput
                    style={style.input}
                    type="text"
                    class="form-control"
                    placeholder="Enter card holder"
                  />
                </View>
              </View>

              <View style={style.dataContainer}>
                <View>
                  <Text>Date</Text>

                  <View
                    style={style.inputBox}
                    class="input-group mb-3 input-group-sm"
                  >
                    <Icon name="calendar-today" size={25}></Icon>
                    <TextInput
                      style={style.input}
                      type="text"
                      class="form-control"
                      placeholder="Enter card date"
                    />
                  </View>
                </View>
                <View style={style.cvv}>
                  <Text>CVV</Text>

                  <View
                    style={style.inputBox}
                    class="input-group mb-3 input-group-sm"
                  >
                    <TextInput
                      style={style.input}
                      type="text"
                      class="form-control"
                      placeholder="Enter card CVV"
                    />
                  </View>
                </View>
              </View>

              <View style={style.addButton}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("paymentSuccess", {
                    name: "paymentSuccess",
                  })
                }
              >
                <Text style={style.addCardText}>
                  Pay now
                </Text>
              </TouchableOpacity>
            </View>
            </View>
            
          </ScrollView>
        </View>
        </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  bank: {
    position: "absolute",
    width: "95%",
    
    width:"80%",
    height:"76%",
    height: 130,
    marginLeft: 40,
    borderRadius: 5,
    marginTop: 20,
    paddingBottom: 15,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  addCardText:{
    width:100,
    height:40,
    backgroundColor:"#c2c4c3",
marginLeft:"30%",
    paddingTop:10,
    paddingLeft:20,
    borderRadius:50,
    marginTop:20,
    
  },
  backBox:{

    width:"90%",
    height:"76%",
    backgroundColor:"white",
borderRadius:50,
    marginLeft:20,
    marginTop:20
  },
  crownContainer: {
    flexDirection: "row",
    padding: 20,
    marginTop:50
  },

  crown: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 11,
    padding: 20,
  },
  container: {
    backgroundColor: "#CA730D",
    height: "100%",
    
  },
  headercontainer: {
    flexDirection: "row",
    marginTop:-5,
  },
  arrow: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    paddingRight: 15,
  },
  spaceBetweenInput: {
    paddingBottom: 10,
  },
  input: {
    borderColor: "black",
    borderStyle: "solid",
  },
  addButton: {
    // marginLeft: 70,
    // marginTop: 40,
  },
  addCard: {
    width: 150,

    color: "white",

    marginLeft: 110,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 20,
  },
  details: {
    marginLeft: 40,
    marginTop: 178,
    marginRight: 30,
    paddingTop:-40,
    paddingBottom:10

  },
  //

  longInput: {
    position: "absolute",
    width: 20,
    height: 20,
    marginLeft: 18,
    marginTop: 314,
    borderRadius: 2,
    borderColor: "blue",

    backgroundColor: "#F8F6F6",

    borderRadius: 10,
  },

  cvv: {
    paddingLeft: 12,
  },
  dataContainer: {
    flexDirection: "row",

    paddingBottom: 5,
  },

  dateContainer: {
    alignItems: "center",
    alignContent: "flex-end",
    padding: 5,
  },
});
export default paymentScreen;
