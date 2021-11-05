import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'


const help = ({ navigation }) => {
    return (
        <>
            <SafeAreaView>
                <View style={style.container}>
                    <TouchableOpacity style={style.arrow}>
                        <Icon name="arrow-back" onPress={() => navigation.navigate('paymentSuccess', { name: 'paymentSuccess' })} size={20}></Icon>
                    </TouchableOpacity>


                    <Text style={style.heading}>
                        help and support

                    </Text>
                </View>
                <View style={style.description}>
                    <Text style={style.spacebetween} >


                        hi am helpgvhvh jnkj jbgvgvgc gytccgh
                        gvhkmkm
                        hjbjknkkl

                        bjhbkjbnlk
                        junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy

                        nmbjn  jnjinik ihhuhun  ububuhyft

                        jnjjjhvfyguin uigvi iuyhbuy uyyuilj uyguuy
                    </Text>
                    <Text style={style.spacebetween} >
                        hi am helpgvhvh jnkj jbgvgvgc gytccgh
                        gvhkmkm
                        hjbjknkkl

                        bjhbkjbnlk
                        junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy

                        nmbjn  jnjinik ihhuhun  ububuhyft

                        jnjjjhvfyguin uigvi iuyhbuy uyyuilj uyguuy
                    </Text>
                    <Text style={style.spacebetween} >


                        hi am helpgvhvh jnkj jbgvgvgc gytccgh
                        gvhkmkm
                        hjbjknkkl

                        bjhbkjbnlk
                        junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy

                        nmbjn  jnjinik ihhuhun  ububuhyft

                        jnjjjhvfyguin uigvi iuyhbuy uyyuilj uyguuy
                    </Text>
                    <Text style={style.spacebetween} >


                        hi am helpgvhvh jnkj jbgvgvgc gytccgh
                        gvhkmkm
                        hjbjknkkl

                        bjhbkjbnlk
                        junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy

                        nmbjn  jnjinik ihhuhun  ububuhyft

                        jnjjjhvfyguin uigvi iuyhbuy uyyuilj uyguuy
                    </Text>
                    <Text style={style.spacebetween} >


                        hi am helpgvhvh jnkj jbgvgvgc gytccgh
                        gvhkmkm
                        hjbjknkkl

                        bjhbkjbnlk
                        junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy

                        nmbjn  jnjinik ihhuhun  ububuhyft

                        jnjjjhvfyguin uigvi iuyhbuy uyyuilj uyguuy
                    </Text>
                </View>


            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    container: {

        paddingLeft: 20,
        paddingLeft: 20,
        paddingTop: 20,
        flexDirection: "row",
        marginBottom: 50

    },
    spacebetween: {
        paddingBottom: 10,
    },
    heading: {
        paddingLeft: 20,
        textTransform: "capitalize",
        fontWeight: 'bold',
        fontSize: 16
    },
    description: {
        paddingLeft: 15,
        paddingBottom: 10

    },
    arrow: {
        paddingRight: 50

    },

})
export default help
