//import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';

//screens
import SplashScreen from './components/screens/SplashScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ForgetPassword from './components/screens/ForgetPassword';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import ForgetPasswordSuccessFul from './components/screens/ForgetPasswordSuccessFul';
import DashBoard from './components/screens/DashBoard';
import paymentSuccess from './components/screens/paymentSuccess'



// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import help from './components/screens/help';




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
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

