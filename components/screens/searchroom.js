import React from "react";
import { View, Text, StyleSheet, TextInputComponent, TextInput } from "react-native";
import { State, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Foundation'
import DatePicker from 'react-native-neat-date-picker'


// State = {
//     count: 0
// }

const searchroom = ({ navigation }) => {


   
    updateValue = (val) => {
        this.setState(prevState => ({ count: prevState.count + val }));
    }

    const [showDatePicker, setShowDatePicker] = useState(false)

    const openDatePicker = () => {
      setShowDatePicker(true)
    }
  
    const onCancel = () => {
      // You should close the modal in here
      setShowDatePicker(false)
    }
  
    const onConfirm = ( date ) => {
      // You should close the modal in here
      setShowDatePicker(false)
      
      // The parameter 'date' is a Date object so that you can use any Date prototype method.
      console.log(date.getDate())

    }
    return (
        <>
            <SafeAreaView style={style.container}>

                <View style={style.crownContainer}>


                    <Icon name="crown" style={style.crown} size={80} color="#CA730D" />

                    <Text style={style.heading}>

                        Search Room

                    </Text >

                </View>
                <View style={style.backBox}>
                    <View style={style.search}>
                        <Text style={{ fontWeight: "bold" }}>
                            search room
                        </Text>
                    </View>
                    <View style={style.checkin}>
                        <Text>
                            CheckIn
                        </Text>
                        

                        


                    </View>
                    <View style={style.checkOut}>
                        <Text>
                            CheckOut
                        </Text>
                    </View>
                    <View style={style.content}>
                        <View style={style.rooms}>
                            <Text>
                                Rooms
                            </Text>
                            <TouchableOpacity style={{ marginLeft: "60%", backgroundColor: "red", width: "5%", size: 6, }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", width: "100%" }}>
                                    -
                                </Text>
                                {/* <TextInput type="number" value={this.state.count} />
                                <TextInput type="button" onClick={this.updateValue.bind(this, -1)} value="Decrement" />
                                <TextInput type="button" onClick={this.updateValue.bind(this, 1)} value="Increment" /> */}

                            </TouchableOpacity>
                            <TextInput style={{ backgroundColor: "blue", }}>


                            </TextInput>

                            <TouchableOpacity style={{ backgroundColor: "red", width: "100%", }}>

                                <Text>
                                    +
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={style.rooms}>
                            <Text>
                                Adult
                                
                            </Text>
                        </View>
                        <View style={style.rooms}>
                            <Text>
                                Children
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>


        </>
    )
}
const style = StyleSheet.create({
    backBox: {
        height: "78%",
        width: "95%",
        marginLeft: 10,
        //backgroundColor:"red",
        borderRadius: 10,
        backgroundColor: "white"

    },
    checkOut: {
        marginLeft: 30,
        flexDirection: "row",


    },
    content: {
        //backgroundColor:"blue",
        marginTop: "40%",
    },
    checkin: {
        marginLeft: 30,
        flexDirection: "row",


    },
    rooms: {
        marginLeft: 30,
        marginTop: 30,
        flexDirection: "row",
        paddingLeft: 20,

    },
    search: {

        // backgroundColor: "red",
        alignContent: "center",
        marginLeft: "35%",
        padding: 10,


    },
    crown: {
        width: 100,
        height: 100,
        backgroundColor: "white",

        borderRadius: 100,
        alignContent: "center",
        justifyContent: "center",
        marginLeft: 11,

        paddingLeft: 20

    },
    crownContainer: {
        flexDirection: "row",
        padding: 10,
    },
    heading: {

        width: "40%",
        marginLeft: "25%",
        marginTop: 40,
        marginBottom: 25,
        //backgroundColor:"red",
        fontSize: 18,
        fontWeight: "bold",
        color: "white"

    },
    container: {
        backgroundColor: "#CA730D",
        height: "100%",
    },
})
export default searchroom

