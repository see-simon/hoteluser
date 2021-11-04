import React from "react";
import { TextInput, Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import '../images/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons'


const paymentScreen = ({ navigation }) => {
    return (
        <>

            <SafeAreaView>

                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() =>
                        navigation.navigate('paymentScreen', { name: 'paymentScreen' })} size={20}></Icon>
                </TouchableOpacity>

                <Text style={style.addCard}>
                    Add card
                </Text>

                <View >
                    <Image style={style.bank} source={require('../images/bankcard.png')} />
                </View>

                <View>
                    <View >
                        <Text>card Number</Text>

                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Enter card number"
                            placeholderTextColor="#9a73ef"
                            autoCapitalize="none"
                        />

                    </View>

                    <View >
                        <Text>card holder name</Text>

                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Enter card number"
                            placeholderTextColor="#9a73ef"
                            autoCapitalize="none"
                        />

                    </View>
                    <View>
                        <View>
                            <Text>Date</Text>

                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Enter card number"
                                placeholderTextColor="#9a73ef"
                                autoCapitalize="none"
                            />
                        </View>
                        <View>
                            <Text>CVV</Text>

                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Enter card number"
                                placeholderTextColor="#9a73ef"
                                autoCapitalize="none"
                            />

                        </View>

                    </View>
                </View>

            </SafeAreaView>

        </>
    )

}

const style = StyleSheet.create({
    bank: {
        width: 150,
        height: 100,
        alignItems: "center",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderRadius: 15,

        marginLeft: 100,
        marginTop: 1
    },
    addCard: {
        width: 150,
        alignItems: "center",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: 120,
        marginTop: 10
    },
    dateContainer: {
        alignItems: "center",
        alignContent: "flex-end",
        padding: 5,

    }
})
export default paymentScreen
