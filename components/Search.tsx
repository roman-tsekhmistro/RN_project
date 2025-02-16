/** @format */

import icons from '@/constants/icons';
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className='flex flex-row items-center justify-between w-full px-4 py-2 mt-5 border rounded-lg bg-accent-100 border-primary-100'>
      <View className='z-50 flex flex-row items-center justify-center flex-1'>
        <Image source={icons.search} className='size-5' />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder='Search for anything'
          className='flex-1 ml-2 text-sm font-rubik text-black-300'
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className='size-5' />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
