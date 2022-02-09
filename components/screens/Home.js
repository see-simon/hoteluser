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


const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};

const home = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
  
    // let item = () => {
    //     return images.description.fetch(action => {
    //         return action.id == id
    //     })
    // }


  


    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = masterDataSource.filter(
            function (item) {
              const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
    
      const ItemView = ({item}) => {
        return (
          // Flat List Item
          <Text
            style={style.itemStyle}
            onPress={() => getItem(item)}>
            {item.id}
            {'.'}
            {item.title.toUpperCase()}
          </Text>
        );
      };
    
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };

      
      const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
      };

      const [users, setUsers] = useState([]);
      const db = firebase.firestore();

      useEffect(() => {
        let userInfo = [];
        db.collection('createHotel')
          .get()
          .then((res) => {
            res.forEach((action) => {
              userInfo.push({ ...action.data(), id: action.id });
            });
    
            setUsers(userInfo);
          });
      }, []);


return (
    <>
      <SafeAreaView style={style.cover}>
        <ImageBackground source={image} resizeMode="cover" style={style.image}>
          {/* <View style={style.backBox}> */}
          <Text style={style.heading}>Search hotel</Text>

          <View style={style.search}>
          <TextInput
          style={style.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
          </View>

         
            <View>
              <Text style={style.line}>
                _____________________________________
              </Text>
              <Text style={style.heading}>Popular hotels</Text>
            </View>

         
            
                <ScrollView>

                <View >
                  

{users.map((element)=>
  <View style={style.hotelPictures}>
  <Text style={style.hotelNameText}>{element.HotelName}</Text>
    <TouchableOpacity >
 <Avatar  size={100}  source={{uri: element.Url}}></Avatar>
</TouchableOpacity>
  </View>
    






//   <TouchableOpacity style={style.hotelPictures}>
// <Avatar  size={200}  source={{uri: element.Url}}></Avatar>
// </TouchableOpacity>
)}

</View>
                

                  {/* <View style={style.picContainer}>
         
                    {Pictures.images.map((action) => [
                      <ListItem style={style.container}>

                            <Text style={style.description}>{action.description}</Text>

                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("searchroom", {
                              name: "searchroom",
                            })
                          }
                        >
                          
                          <Image style={style.pic} source={action.src}></Image>
                        </TouchableOpacity>
                      </ListItem>
                    ])}
                  </View> */}
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
  hotelPictures:{
      marginLeft:0,
      marginTop:5,
      borderRadius:20,
      // backgroundColor:"red",
      paddingLeft:50,
      flexDirection:"row",

  },
  hotelNameText:{
      marginRight:20
  },
  description:{
      marginRight:20
  },
  pic:{
      marginLeft:10,
      borderRadius:15
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
  picContainer:{

  },
});
export default home;
