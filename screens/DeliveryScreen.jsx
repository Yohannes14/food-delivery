import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../themes';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/restaurantSlice';
import { emptyCart } from '../redux/cartSlice';


const DeliveryScreen = () => {
    const restaurant = useSelector(selectRestaurant);

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cancelOrder = () => {
        navigation.navigate("Home");
        dispatch(emptyCart());


    }
    return (
        <View className="flex-1">
            {/* map view */}
            <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.0421
                }}
                className="flex-1"
                mapType='standard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)}
                />


            </MapView>
            <View className="rounded-t-3xl -mt-12 bg-white relative">
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
                        <Text className="text-3xl font-extrabold text-gray-700"> 20-30 Minutes</Text>
                        <Text className="text-gray-700 font-semibold"> Your order is own its way!</Text>

                    </View>
                    <Image source={require('../assets/images/bikeGuy2.gif')}
                        className="w-24 h-24"
                    />

                </View>
                <View style={{ backgroundColor: themeColors.bgColor(0.8) }}
                    className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
                >
                    <View className="p-1 rounded-full"
                        style={{ backgroundColor: 'rgba(255,255,255,0.4' }}>
                        <Image className="h-16 w-16 rounded-full"
                            source={require('../assets/images/deliveryGuy.jpg')}
                        />

                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="text-lg font-bold text-white"> Jhon</Text>
                        <Text className="font-semibold text-white"> Your Rider</Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1}
                                stroke={themeColors.bgColor(1)} />

                        </TouchableOpacity>
                        <TouchableOpacity onPress={cancelOrder} className="bg-white p-2 rounded-full">
                            <Icon.X strokeWidth={4}
                                stroke={'red'} />

                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        </View>
    )
}

export default DeliveryScreen

const styles = StyleSheet.create({})