import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import axios from 'axios';

export default class FavScreen extends React.Component {
  constructor(props) {
    super(props);

    
  }

  render() {


    return (
      <View >
       
       <Text>Fav Screen!</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});