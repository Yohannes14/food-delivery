import { ScrollView,Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, restaurants }) => {
    return (
        <View>
            {/* <View className="flex-row justify-center items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>

                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-semibold">See All</Text>
                </TouchableOpacity>
            </View> */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5"
            >
                {
                    restaurants.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.id}
                                item={restaurant}
                            />
                        )
                    })
                }

            </ScrollView>

        </View>
    )
}

export default FeaturedRow;