import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { themeColors } from '../themes';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/restaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../redux/cartSlice';

const CartScreen = () => {
    // const restaurant = featured.restaurants[0];
    const navigation = useNavigation();

    const restaurant = useSelector(selectRestaurant)
    const cartItems = useSelector(state => state.cart?.items);
    const cartTotal = cartItems?.reduce((acc, item) => acc + item.price, 0);
    const deliveryFee = 3;
    const [groupedItems, setGroupedItems] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item.id]) {
                group[item.id].push(item);
            } else {
                group[item.id] = [item];
            }
            return group;
        }, {});
        setGroupedItems(items);
    }, [cartItems]);
    return (
        <View className="bg-white flex-1 mt-3">
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke="white" />

                </TouchableOpacity>
                <View className="">
                    <Text className="text-center font-bold text-lg">Your cart</Text>
                    <Text className="text-center text-gray-500">{restaurant.name}</Text>
                </View>

            </View>
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center">
                <Image source={require('../assets/images/bikeGuy.png')}
                    className="h-20 w-20 rounded-full"
                />
                <Text className="flex-1 pl-4"> Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{ color: themeColors.text }}>Change</Text>
                </TouchableOpacity>

            </View>
            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                className="bg-white pt-5"
            >
                {
                    Object.entries(groupedItems).map(([key, item]) => {
                        let dish = item[0];
                        return (
                            <View key={key} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mb-3 shadow-md">
                                <Text className="font-bold" style={{ color: themeColors.text }}>{item.length} x</Text>
                                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base"> {dish.price}</Text>
                                <TouchableOpacity onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                                    className="p-1 rounded-full"
                                    style={{ backgroundColor: themeColors.bgColor(1) }}
                                >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"} />

                                </TouchableOpacity>

                            </View>

                        )
                    })
                }

            </ScrollView>
            {/* totals */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="p-6 px-8 rounded-t-3xl  space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">${cartTotal}</Text>

                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">${deliveryFee}</Text>

                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-extrabold">Order Total</Text>
                    <Text className="text-gray-700 font-extrabold">${deliveryFee + cartTotal}</Text>

                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("OrderPrepairing")}
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        className="p-3 rounded-full"
                    >
                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}

export default CartScreen;