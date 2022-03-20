import React, { useState } from "react";
import { Text, View, StyleSheet, Button ,Dimensions} from "react-native";
import { OpenMapDirections } from 'react-native-navigation-directions';
import Icon from "react-native-vector-icons/FontAwesome5"
import MapView, { Polyline } from 'react-native-maps';
import { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const Map = ({ navigation }) => {

    

  // const limpopo = {
  //   latitude: -23.90449,
  //   longitude: 29.46885,
  //   latitudeDelta: 0.01,
  //   longitudeDelta: 0.01,
  // };

  const origin = {latitude: -23.90449, longitude: 29.46885};
const destination = {latitude: -24.19436, longitude: 29.00974};
const GOOGLE_MAPS_APIKEY = 'AIzaSyB11iADvmoo1pE3OpueVd3DIfy2LXP4e7A';

const [coordinates] = useState([
  {
    latitude: 48.8587741,
    longitude: 2.2069771,
  },
  {
    latitude: 48.8323785,
    longitude: 2.3361663,
  },
]);
     

  return (
    <>

   

<View style={style.container}>
      <MapView
        style={style.maps}
        initialRegion={{
          latitude: coordinates[0].latitude, 
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
      </MapView>
    </View>
    
    

    </>
  );
};
const style = StyleSheet.create({
//previous style
    // container: {
        
      
    //     height: "10%",
    //     width:"80%",
    // },
    // map: {
    //   width: Dimensions.get('window').width,
    //   height: Dimensions.get('window').height,
    // },
    //until here


    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});
export default Map;
