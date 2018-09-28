import React from 'react';
import { AsyncStorage, StyleSheet, View, Text, TextInput, Button } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right} from 'native-base';


import axios from 'axios';



export default class FavScreen extends React.Component {
  constructor(props) {
    super(props);

    
  }

  static navigationOptions = ({ navigation }) => {
    navigation.addListener('didFocus', () => {
      console.log('tab did focus');
    });
  };
  
  

  
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