import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'



const paymentSuccess = () => {
    return (

        <>

            <SafeAreaView>
                <TouchableOpacity>
                    <Icon style={style.arrow} name="arrow-back" size={20}></Icon>
                </TouchableOpacity>



                <View >

                    <View style={style.roundButton1}>
                        <Icon name="done" size={30} color="blue">  </Icon>
                    </View>

                    <Text style={style.description}>  Successfully paid 350 for wedding
                        check your email for confirmation
                    </Text>

                </View>
              

                <View >

                    <TouchableOpacity style={style.ok} >
                    <Text >
                        OK
                    </Text> 
                    </TouchableOpacity>

                </View>



            </SafeAreaView>
        </>

    )

}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

    },
    description: {
        padding: 50,
    },
    arrow: {

        padding: 20,

    },

    ok: {
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginLeft: 130,
        marginRight:130,
        marginTop:20,
        padding:20,
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
        marginLeft: 145
    },
})

export default paymentSuccess