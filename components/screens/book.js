import React from "react";
import { SafeAreaView } from "react-native";

const book = () => {
    return (
        <>

            <SafeAreaView style={style.container}>

                <View style={style.crownContainer}>


                    <Icon name="crown" style={style.crown} size={80} color="#CA730D" />

                    <Text style={style.heading}>

                        History

                    </Text >
                    

                </View>
                <View style={style.backBox}>
                    <View style={style.HistoryBox}>
                        <Text>
                            hi am history
                        </Text>
                    </View>
                    <View style={style.HistoryBox}>
                        <Text>
                            hi am history
                        </Text>
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
    HistoryBox: {
        backgroundColor: "#ebeced",
        shadowColor: 100,
        borderRadius: 50,
        width: "90%",
        height: "40%",
        marginLeft: 15,
        marginTop: 10,

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

export default book