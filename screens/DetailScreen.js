import React from 'react';
import axios from 'axios'
import { StyleSheet, View, Text, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right} from 'native-base';

export default class DetailScreen extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {

      data: []
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

    .then(res=>{

      const data = res.data.petfinder.pets.pet
      this.setState({data})

    })


    
  }


  render() {

    return (
     
      <Container>

      <Content>


        
        {this.state.data.map((item, index)=>(


            <Card key={index}>

            <CardItem>
              <Left>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={{uri: item.media.photos.photo[0].$t}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            </Card>

        ))} 
   
        
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
