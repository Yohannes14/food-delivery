import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { categories } from '../constants';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle="px-4"
      >
        {categories.map((category) => {
          const isActive = category?.id === activeCategory;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

          return (
            <View key={category?.id} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category?.id)}
                className={`p-2 rounded-md shadow bg-gray-200 ${btnClass}`}
              >
                <Image source={category?.image} style={{ width: 45, height: 45 }} />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category?.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;