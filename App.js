//import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';



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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PaymentScreen } from './components/screens/paymentScreen';
import paymentScreen from './components/screens/paymentScreen';





export default function App() {

  
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="paymentSuccess" screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="ForgetScreen" component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordSuccessFul" component={ForgetPasswordSuccessFul} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        
        <Stack.Screen name="paymentSuccess" component={paymentSuccess}/>
        <Stack.Screen name = "help" component = {help}/>
     
        
     
        <Stack.Screen name="paymentScreen" component ={paymentScreen}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

