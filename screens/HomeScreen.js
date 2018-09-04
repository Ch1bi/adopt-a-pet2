import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import styled from 'styled-components';

const AppWrapper = styled.div`

    flex: 1,
    flex-direction: column,
    justify-content: center,
    align-items: center,
    background-color: #fff
`

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
      <AppWrapper>
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
      </AppWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },

  titleText: {
    fontSize: 20
  }
});
