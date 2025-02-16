/** @format */

import { Card, FeaturedCard } from '@/components/Cards';
import Search from '@/components/Search';
import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView className='h-full bg-white'>
      <View className='px-5'>
        <View className='flex flex-row items-center justify-between mt-5'>
          <View className='flex flex-row'>
            <Image source={images.avatar} className='rounded-full size-12' />

            <View className='flex flex-col items-start justify-center ml-2'>
              <Text className='text-xs font-rubik text-black-100'>
                Good Morning
              </Text>
              <Text className='text-base font-rubik-medium text-black-300'>
                Roman
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className='size-6' />
        </View>

        <Search />

        <View className='my-5'>
          <View className='flex flex-row items-center justify-between'></View>
          <Text className='text-xl font-rubik-bold text-black-300'>
            Featured
          </Text>
          <TouchableOpacity>
            <Text className='text-base font-rubik-bold text-primary-300'>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <FeaturedCard></FeaturedCard>
      </View>
      <Card></Card>
    </SafeAreaView>
  );
};

export default Index;
