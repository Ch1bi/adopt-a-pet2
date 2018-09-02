import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import axios from 'axios';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  getShelters = () => {
    axios
      .get(
        `http://api.petfinder.com/pet.find?format=json&key=6a73b4c9e3c1fe19a365de064e4063ea&location=${
          this.state.input
        }`
      )

      .then(res =>
        this.props.navigation.navigate('Result', {
          data: res.data.petfinder.pets
        })
      );
  };

  static navigationOptions = {
    title: 'Search'
  };

  render() {
    //key for api
    let key = '6a73b4c9e3c1fe19a365de064e4063ea';

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Find a companion</Text>

        <TextInput
          placeholder="Enter zipcode"
          onChangeText={text => this.setState({ input: text })}
        />

        <Button
          title="Submit"
          color="purple"
          onPress={() => this.getShelters()}
        />
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
  },

  titleText: {
    fontSize: 20
  }
});
