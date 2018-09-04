import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

// import { List, ListItem } from 'react-native-elements';

export default class ResultScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shelters: null
    };
  }

  goToDetail = petInfo => {
    this.props.navigation.navigate('Detail', { data: petInfo });
  };

  static navigationOptions = {
    title: 'Search'
  };

  render() {
    let params = this.props.navigation.getParam('data');
    console.log(params);

    return (
      <ScrollView>
        {/* <List>
          {params.pet.map((val, idx) => (
            <ListItem
              roundAvatar
              avatar={{ uri: val.media.photos.photo[0].$t }}
              title={val.name.$t}
              subtitle={val.breeds.breed.$t}
              key={idx}
              onPress={() => this.goToDetail(val)}
            />
          ))}
        </List> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
});
