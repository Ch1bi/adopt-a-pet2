import React from 'react';
import { StyleSheet, ScrollView,FlatList,Text, View, TouchableHighlight} from 'react-native';
import {Container, List, ListItem, Content, Right, Left, Icon} from 'native-base'

export default class ResultScreen extends React.Component {
  constructor(props) {
    super(props);

  }


  goToDetail = (stuff) => {
    // console.log(stuff)
    this.props.navigation.navigate('Detail', { data: stuff });
  };


  static navigationOptions = {
    title: 'Search'
  };

  render() {
    let params = this.props.navigation.getParam('data').shelter;
    // console.log(params)
    return (

      <Container>

     

          <List>

            {params.map((item, index)=>(

              <ListItem
              key={index}
              onPress={()=>this.goToDetail(item)}>

              
              <Left><Text>{item.name.$t}</Text></Left>
               {/* <Text>{item.email.$t}</Text> */}
               <Right>
                <Icon name="arrow-forward" />
              </Right>

            
              


              </ListItem>
            ))}

          </List>

      
      </Container>

     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
