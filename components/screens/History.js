import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  
  TextInput,
} from "react-native";
import firebase  from "firebase";
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


  return (
    <SafeAreaView>
      <View style={style.container}>
        
        <TextInput
          style={style.textInputStyle}
          
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />


          
                {history.map((element)=>

                

                      <Text>{moment(element.date).format('YYYY-MM-DD')}</Text>
                )}

        

          
        
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
     backgroundColor:"white"
  },
 
  itemStyle: {
    padding: 10,
  },
  historyBox: {
    width: "90%",
    backgroundColor:"#6666ff",
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
