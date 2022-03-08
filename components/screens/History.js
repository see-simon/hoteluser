import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,

  TextInput,
} from "react-native";
import firebase from "firebase";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";

//moment(date).format('YYYY-MM-DD')



const History = () => {

  const db = firebase.firestore();

  const [history, setHistory] = useState([])


  useEffect(() => {
    let historyInfo = [];
    db.collection("booking")
      .get()
      .then((res) => {
        res.forEach((action) => {
          historyInfo.push({ ...action.data(), id: action.id });
        });

        setHistory(historyInfo);
        // console.log(id)
      });
  }, []);


  const Delete = () => {

    
        db.collection('booking').doc().delete()
            .then(() => { console.log('booking deleted') })
            .catch((err) => { console.log(err) })
            

  }

  return (
    <SafeAreaView>
      <View style={style.container}>

        <TextInput
          style={style.textInputStyle}

          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />


        <ScrollView>
          {history.map((element) =>
            // <Text>{moment(element.date).format('YYYY-MM-DD')}</Text>



            <View style={{
                flexDirection:"row", 
                backgroundColor:"#6666ff", 
                marginHorizontal: 20, 
                marginVertical: 5, 
                elevation: 2,
                borderRadius: 5,
                padding: 8,
                justifyContent: 'space-between'
              }}>

              <View>
                <Text style={{color: '#fff'}}>Location:  {element.location}</Text>
                <Text style={{color: '#fff'}}>Hotel Name: {element.hotelname}</Text>


                <Text style={{color: '#fff'}}>Check in date: {moment(element.chechin).format('DD MMM YYYY')} </Text>
                <Text style={{color: '#fff'}}>Check out date: {moment(element.chechout).format('DD MMM YYYY')} </Text>
                
                <Text style={{color: '#fff'}}>Room: {element.roomNum} </Text>
                <Text style={{color: '#fff'}}>Total Price: R{element.totalPrice} </Text>
              </View>
              <View style={{}}>
                <TouchableOpacity 
                  onPress={()=>Delete()} 
                  style={{backgroundColor: 'red', padding: 5, borderRadius: 5}}>
                  <Text style={{color: '#fff'}}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>





      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white"
  },

  itemStyle: {
    padding: 10,
  },
  historyBox: {
    width: "90%",
    backgroundColor: "#6666ff",
    height: "25%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,

    paddingLeft: "10%",
    margin: 10
  },
  back: {
    flexDirection: "row"
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
