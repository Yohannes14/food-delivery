import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPrepairingScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            /// Move to delivery screeen
            navigation.navigate("Delivery");

        }, 3000)

    }, [])
    return (
        <View className="flex-1 bg-white justify-center items-center">

            <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
        </View>
    )
}

export default OrderPrepairingScreen
