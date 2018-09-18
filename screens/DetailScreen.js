import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Detail'
  };

  render() {
    let params = this.props.navigation.getParam('data');
    console.log(params)
    console.log(params.id.$t)


    return (
      <View style={styles.container}>
        {/* <Text>{`${params.description.$t} 

            Contact Info: ${params.contact.email.$t}`}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});
