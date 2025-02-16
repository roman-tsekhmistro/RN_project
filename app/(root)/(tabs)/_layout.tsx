/** @format */

import icons from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  return (
    <View className='flex flex-col items-center flex-1 mt-3'>
      <Image
        source={icon}
        tintColor={focused ? '#0061FF' : '#666876'}
        resizeMode='contain'
        className='size-6'
      />
      <Text
        className={`${
          focused
            ? 'text-primary-300 font-rubik-medium'
            : 'text-black-200 font-rubik'
        } text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopColor: '#0061ffAA',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} title='Home' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} title='Explore' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} title='Profile' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='sign-in'
        options={{
          title: 'Sign In',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.info} title='Sign In' focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
