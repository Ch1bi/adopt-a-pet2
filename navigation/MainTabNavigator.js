import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen'
import DetailScreen from '../screens/DetailScreen'

import FavScreen from '../screens/FavScreen'


const HomeStack = createStackNavigator({
  Home: {
    
    screen:HomeScreen,
    navigationOptions:{

      header:null
    }

  },

  Result: ResultScreen,
  Detail: DetailScreen
});

const FavStack = createStackNavigator({

  Favs:{
    screen:FavScreen,
    navigationOptions:{

      header:null
    }
  }
})


export default createMaterialTopTabNavigator({
  Search: HomeStack,
  Favorites: FavStack
});
