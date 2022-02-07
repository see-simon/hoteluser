import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};

const help = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <View style={style.bigBox}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
            <View style={style.description}>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({

  bigBox: {
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
 
  spacebetween: {
    paddingBottom: 10,
  },
  heading: {
    paddingLeft: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    paddingLeft: 15,
    // paddingBottom: 10,
  },
 
});
export default help;
