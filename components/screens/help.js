import React from 'react'
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'


const help = ({ navigation }) => {
    return (
        <>
            <SafeAreaView>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => navigation.navigate('paymentSuccess', { name: 'paymentSuccess' })} size={20}></Icon>
                </TouchableOpacity>
                <View>

                    <Text>
                        help and support

                    </Text>
                    <Text>

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
export default help
