import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import Categories from '../components/Categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white mt-8">
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600"> Addis Ababa, ETH</Text>

                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
                    <Icon.Sliders width="20" height="20" stroke="white" strokeWidth={2.5} />

                </View>

            </View>
            {/* Main */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >
                {/* categories */}
                <Categories />
                {/* featured */}
                <View className="mt-5">
                    {
                        [featured, featured, featured].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;