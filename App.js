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




export default function App() {


  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();


  function DrawerRoutes() {
    return (
     
        <Drawer.Navigator DrawerContent={props => <drawerContent{...props} />}>
        
          <Drawer.Screen name="hotel name" component={home} />
          <Drawer.Screen name="paymentScreen" component={paymentScreen} />
           <Drawer.Screen name="help and support" component={help} />
           <Drawer.Screen name="Profile" component ={Profile}/>
           <Drawer.Screen name ="Booking details" component ={bookingDetails}/>
           <Drawer.Screen name = "History" component ={History}/>
        
          
          

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
        {/* <Stack.Screen name="Home" component ={Home}/> */}

         <Stack.Screen name ="home" component ={DrawerRoutes}/> 



        <Stack.Screen name="paymentScreen" component={paymentScreen} />
        <Stack.Screen name ="searchroom" component ={searchroom}/>
        



      </Stack.Navigator>
    </NavigationContainer>
  );
}

