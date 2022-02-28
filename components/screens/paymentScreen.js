
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Button,
    Text,
    View
} from 'react-native';
 import stripe from "tipsi-stripe"


const paymentScreen = ({ navigation }) => {

  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState(null)

//  
stripe.setOptions({
  publishableKey: '<pk_test_51KX8PlFCgzobWk2QMKzkudYNtmdjFf5IpdEup5Rnrk2eoCMsXblcMXot3gvBcqkdo94UHFUE4EQ0l8RmlKZbesT900gUyPvyi6>',
})

const handleCardPayPress = async () => {
  // const options = {}
  try {
      setLoading(true)
      const token = await stripe.paymentRequestWithCardForm()
      console.log('Token from Card ', token)
      setToken(token)
      setLoading(false)
  } catch (error) {
      console.log('handleCardPayPress Error ', error)
      setLoading(false)
  }
}

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>
            Card Form Example
        </Text>
        <Text style={styles.instruction}>
            Click button to show Card Form dialog.
        </Text>
        <Button
            title="Enter you card and pay"
            onPress={handleCardPayPress}
         />
        <View style={styles.token}>
            {token &&
            <Text style={styles.instruction}>
                Token: {token.id}
            </Text>
            }
        </View>
    </SafeAreaView>
</>
  );
};

export default paymentScreen;
