import React from 'react';
import axios from 'axios'
import { StyleSheet, View, Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Image} from 'native-base';

export default class DetailScreen extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {

      data: null
    }
  };

  static navigationOptions = {
    title: 'Detail'
  };

  componentDidMount(){

    //extract id from bundle
    let id = this.props.navigation.getParam('data').id.$t
    
    //using the id, do another request to get pics from shelter
    axios.get(`http://api.petfinder.com/shelter.getPets?format=json&key=6a73b4c9e3c1fe19a365de064e4063ea&id=${id}&status=A`)

    .then(res=>this.setState({data:res.data.petfinder.pets}))
    
  }


  render() {
  
    return (
     
      <Container>

      <Content>
        
      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </Card>
        
        </Content>        
        
      </Container>
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
