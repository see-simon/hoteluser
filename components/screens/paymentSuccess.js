
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, StyleSheet, Text, TouchableOpacity, View ,ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
  };



const paymentSuccess = ({ navigation }) => {
    return (
        <>
            <SafeAreaView >
                <View style={style.container}>

                <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
                
<View style={style.backBox}>



                <View >

                    <View style={style.roundButton1}>
                        <Icon name="done" size={80} color="blue">  </Icon>
                    </View>
                    <Text style={style.description}>  Successfully paid 500 for booking
                        check your email for confirmation
                    </Text>

                </View>
                <View >

                    <TouchableOpacity style={style.ok} onPress={() => navigation.navigate('Home', { name: 'Home' })}>
                        <Text >
                            OK
                        </Text>
                    </TouchableOpacity>
                </View>

                </View>
                </ImageBackground>


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
    image: {
        flex: 1,
        justifyContent: "center",
      },
    description: {
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    
    backBox:{

        width:"90%",
        height:"86%",
        backgroundColor:"white",
    borderRadius:50,
        marginLeft:19,
        paddingTop: 70,
        marginTop:-20
      },

    ok: {
        backgroundColor:"#c2c4c3",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginLeft: 120,
        width:"30%",
        height:"20%",
       
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
        marginLeft: 120
    },

})

export default paymentSuccess