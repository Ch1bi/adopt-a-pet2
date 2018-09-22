import React from 'react';
import { StyleSheet, ScrollView,FlatList,Text, View, TouchableHighlight} from 'react-native';
import {Container, List, ListItem, Content} from 'native-base'

export default class ResultScreen extends React.Component {
  constructor(props) {
    super(props);

  }


  goToDetail = (stuff) => {
    console.log(stuff)
    this.props.navigation.navigate('Detail', { data: stuff });
  };


  static navigationOptions = {
    title: 'Search'
  };

  render() {
    let params = this.props.navigation.getParam('data').shelter;
    console.log(params)
    return (

      <Container>

        <Content>

          <List>

            {params.map((item, index)=>(

              <ListItem
              onPress={()=>this.goToDetail(item)}>
              
              <View>
              <Text>{item.name.$t}</Text>
               <Text>{item.email.$t}</Text>
              </View>
              


              </ListItem>
            ))}

          </List>

        </Content>
      </Container>

     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
