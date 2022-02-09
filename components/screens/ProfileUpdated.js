import React from 'react'
import { View, Text, SafeAreaView, StyleSheet,ImageBackground } from 'react-native'



import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Foundation'
import  Icons from 'react-native-vector-icons/MaterialIcons'

const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
  };

const ProfileUpdated = ({ navigation }) => {

    return (
        <>
            <SafeAreaView >

                <View style={style.container}>
                <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
                    <View style={style.crownContainer}>
                        <Icon name="crown" style={style.crown} size={80} color="#c2c4c3"/>
                    </View>


                    <View style={style.backBox}>
                        
                       <Icons style={style.done} name ="done" size={80} color="#f7faf8"/>
                       <Text style={style.descripion}>
                          Profile updated
                            </Text>

                        <TouchableOpacity style={style.OK}  onPress={() => navigation.navigate('home', { name: 'home' })} >
                            <Text style={style.textColours}>
                           OK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    </ImageBackground>

                </View>
            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({

    container: {
        
        height: "100%",
    },
    textColours:{
        color:"black",
    },
    image: {
        flex: 1,
        justifyContent: "center",
      },
    OK:{
        marginTop:25,
        backgroundColor:"#c2c4c3",
        borderRadius:40,
        height:"20%",
        width:"50%",
        paddingLeft:70,
        color:"white",
    
        paddingTop:8,
        marginBottom: 80,
        marginLeft: 85,
    },
    descripion:{
        marginLeft:"35%",
        paddingTop:30,
        paddingBottom:30


    },
    crownContainer: {
        flexDirection: "row"
    },
    done:{
        backgroundColor:"#c2c4c3",
        borderRadius: 100,
        padding:"20%",
       
        marginLeft:"20%",
        marginTop:80,
        width:201,
        height:200,
        marginBottom:20


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
        padding: 20

    },
    heading: {

        width: "40%",
        marginLeft: "25%",
        marginTop: 90,
        marginBottom: 25,
        //backgroundColor:"red",

       
        fontSize: 18,
        fontWeight: "bold",
        color: "white"

    },
    backBox: {
        height: "75%",
        width: "95%",
        marginLeft: 10,
        padding: 10,
        marginTop: 10,
        //backgroundColor:"red",

        borderRadius: 10,
        backgroundColor: "white"

    },
    bed1: {
        height: "70%",
        width: "90%",
        // backgroundColor:"white",
        borderRadius: 100,
        marginLeft: 18,


    },
    getStarted: {
        backgroundColor: "#CA730D",
        padding: 15,
        alignContent:"center",
        paddingLeft:"12%",
    
        marginTop: 35,
        marginLeft: "35%",
        borderRadius: 60,
        width: "30%"

    }

})
export default ProfileUpdated
