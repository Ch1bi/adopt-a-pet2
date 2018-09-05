import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker } from 'react-native';

import axios from 'axios';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ' ',
      pickerChoice: null
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


  render() {
   

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Find a companion by </Text>



        <Picker

          selectedValue={this.state.pickerChoice}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({pickerChoice: itemValue})}>
          <Picker.Item label=" " />
          <Picker.Item label="zipcode" value="zipcode" />
          <Picker.Item label="type" value="type" />
          
        </Picker>

        {
          this.state.pickerChoice !== null ?
        <TextInput
          onChangeText={text => this.setState({ input: text })}
          placeholder='Enter info'
        /> : null
      }

      <Text>{this.state.pickerChoice}</Text>

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