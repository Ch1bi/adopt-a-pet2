import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen'
import DetailScreen from '../screens/DetailScreen'


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Result: ResultScreen,
  Detail: DetailScreen
});


export default createBottomTabNavigator({
  HomeStack
});
