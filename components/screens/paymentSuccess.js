
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, StyleSheet, Text, TouchableOpacity, View ,ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'





const paymentSuccess = ({ navigation }) => {
    return (
        <>
            <SafeAreaView >
                <View style={style.container}>

               
                
<View style={style.backBox}>



               

                   <View style={{ alignItems:"center", borderRadius:100 , backgroundColor:"" } }>
                        <Icon name="done" size={80} color="blue">  </Icon>
                        </View>
                    <Text style={style.description}>  Successfully paid 500 for booking
                        check your email for confirmation
                    </Text>

               
                

                    <TouchableOpacity onPress={() => navigation.navigate('Home', { name: 'Home' })}>
                        <Text  style={{color:"white", width:"50%" }}>
                            OK
                        </Text>
                    </TouchableOpacity>
               

                </View>
              


                </View>
            </SafeAreaView>
        </>

    )

}

const style = StyleSheet.create({
    container: {
        // justifyContent: "center",
        // alignItems: "center",
        // flex: 1,
        // backgroundColor:"#CA730D",
        height:"100%"

    },
    
    description: {
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    
    backBox:{

        height: "80%",
    width: "95%",
    marginLeft: 10,

    marginTop: 10,
    //backgroundColor:"red",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems:"center"
      },

    ok: {
        backgroundColor:"#6666ff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
       
       
        
       
        marginTop: 20,
        padding: 20,
    },
    roundButton1: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'lightgreen',
        marginLeft: 120,
        marginTop:20,
    },

})

export default paymentSuccess