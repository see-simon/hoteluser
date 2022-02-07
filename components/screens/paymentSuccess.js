
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import help from './help'

import { Image } from 'react-native'

import PaymentScreen from './paymentScreen'



const paymentSuccess = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={style.container}>
                


                <View >

                    <View style={style.roundButton1}>
                        <Icon name="done" size={30} color="blue">  </Icon>
                    </View>
                    <Text style={style.description}>  Successfully paid 3500 for wedding
                        check your email for confirmation
                    </Text>

                </View>
                <View >

                    <TouchableOpacity style={style.ok} onPress={() => navigation.navigate('home', { name: 'home' })}>
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
        backgroundColor:"red"

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
        marginRight: 130,
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
        marginLeft: 145
    },

})

export default paymentSuccess