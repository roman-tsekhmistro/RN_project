/** @format */

import { categories } from '@/constants/data';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || 'All'
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('All');
      router.setParams({ filter: 'All' });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className='mt-3 mb-2'
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(category.category)}
          className={`flex flex-col items-start px-4 py-2 mr-4 rounded-full ${
            selectedCategory === category.category
              ? 'bg-primary-300'
              : 'bg-primary-100 border border-primary-200'
          } border border-primary-100`}
        >
          <Text
            className={`text-sm ${
              selectedCategory === category.category
                ? 'text-white font-rubik-bold mt-0.5'
                : 'text-black-300 font-rubik'
            }`}
          >
            {category.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
