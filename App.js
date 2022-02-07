//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import queryString from "query-string";
import { loadStripe } from "@stripe/stripe-js";

//screens
import SplashScreen from './components/screens/SplashScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ForgetPassword from './components/screens/ForgetPassword';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import ForgetPasswordSuccessFul from './components/screens/ForgetPasswordSuccessFul';
import DashBoard from './components/screens/DashBoard';

import paymentSuccess from './components/screens/paymentSuccess';
import help from './components/screens/help';




// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { PaymentScreen } from './components/screens/paymentScreen';
import paymentScreen from './components/screens/paymentScreen';
import GetStarted from './components/screens/GetStarted';
import Login from './components/screens/Login';
import ProfileUpdated from './components/screens/ProfileUpdated';
import Registration from './components/screens/registration';



import { TouchableOpacity } from 'react-native-gesture-handler';

import Profile from './components/screens/Profile';
import home from './components/screens/Home';
import History from './components/screens/History';
import searchroom from './components/screens/searchroom';
import bookingDetails from './components/screens/BookingDetails';
import Map from './components/screens/Map';
import BookingDetails from './components/screens/BookingDetails';
import Book from './components/screens/book';
import { View ,StyleSheet} from 'react-native';
import Icons from "react-native-vector-icons/Entypo";
import AvailableRooms from './components/screens/AvailableRooms';
// import BookingSuccess from './components/screens/bookingSuccess';





export default function App() {


  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();


  function DrawerRoutes({navigation}) {
    return (
     
        <Drawer.Navigator DrawerContent={props => <drawerContent{...props} />}>
        
          <Drawer.Screen  name="Home" component={home} />
         
          
           <Drawer.Screen  name="Profile" component ={Profile}/>
           <Drawer.Screen name ="Bookings" component ={bookingDetails}/>

           <Drawer.Screen name = "History" component ={History}/>
           <Drawer.Screen name="help and support" component={help} />
          
          <Drawer.Screen name='logout' options={{headerShown:false}} component ={Login}/>
           
              
          
              
            
         {/*       NB         create all the thins u want in the drawer an put thm here */}




        </Drawer.Navigator>
    
    )
  }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Get Started" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordSuccessFul" component={ForgetPasswordSuccessFul} />
        <Stack.Screen name="Dashboard" component={DashBoard} />


        <Stack.Screen name="paymentSuccess" component={paymentSuccess} />
        <Stack.Screen name="help" component={help} />
        <Stack.Screen name="Get Started" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProfileUpdated" component={ProfileUpdated} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name='AvailableRooms' component={AvailableRooms}/>
       


        
        
        {/* <Stack.Screen name="Home" component ={Home}/> */}

         <Stack.Screen name ="home" component ={DrawerRoutes}/> 



        <Stack.Screen name="paymentScreen" component={paymentScreen} />
        <Stack.Screen name ="searchroom" component ={searchroom}/>
        <Stack.Screen name = "Map" component={Map}/>
        <Stack.Screen name ="BookingDetails" component={BookingDetails}/>
        <Stack.Screen name='Book' component={Book}/>
        



      </Stack.Navigator>
    </NavigationContainer>
  );
}


const style = StyleSheet.create({

  container: {
      
      height: "100%",
  },
  textColours:{
      color:"black",
  },
  image: {
      flex: 1,
      justifyContent: "center",
    },
  OK:{
      marginTop:25,
      backgroundColor:"#c2c4c3",
      borderRadius:40,
      height:"20%",
      width:"50%",
      paddingLeft:70,
      color:"white",
  
      paddingTop:8,
      marginBottom: 80,
      marginLeft: 85,
  },
  descripion:{
      marginLeft:"35%",
      paddingTop:30,
      paddingBottom:30


  },
  crownContainer: {
      flexDirection: "row"
  },
  done:{
      backgroundColor:"#c2c4c3",
      borderRadius: 100,
      padding:"20%",
     
      marginLeft:"20%",
      marginTop:80,
      width:201,
      height:200,
      marginBottom:20


  },

  crown: {
      width: 100,
      height: 100,
      backgroundColor: "white",

      borderRadius: 100,
      alignContent: "center",
      justifyContent: "center",
      marginLeft: 11,
      marginTop: 50,
      padding: 20

  },
  heading: {

      width: "40%",
      marginLeft: "25%",
      marginTop: 90,
      marginBottom: 25,
      //backgroundColor:"red",

     
      fontSize: 18,
      fontWeight: "bold",
      color: "white"

  },
  backBox: {
      height: "75%",
      width: "95%",
      marginLeft: 10,
      padding: 10,
      marginTop: 10,
      //backgroundColor:"red",

      borderRadius: 10,
      backgroundColor: "white"

  },
  bed1: {
      height: "70%",
      width: "90%",
      // backgroundColor:"white",
      borderRadius: 100,
      marginLeft: 18,


  },
  getStarted: {
      backgroundColor: "#CA730D",
      padding: 15,
      alignContent:"center",
      paddingLeft:"12%",
  
      marginTop: 35,
      marginLeft: "35%",
      borderRadius: 60,
      width: "30%"

  }

})