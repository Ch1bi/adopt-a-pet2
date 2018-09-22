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

    {console.log(this.state.data)}
    return (
     
      <Container>

      <Content>


        
        {this.state.data.map((item, index)=>(


            <Card key={index}>

            <CardItem>
              <Left>
                <Body>
                  <Text>{item.name.$t}</Text>
                  <Text note>{item.breeds.breed.$t}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={{uri: item.media.photos.photo[3].$t}} style={{width: 10, height: 300, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="star" />
                  <Text>Favorite</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  
                  <Text>Description</Text>
                </Button>
              </Body>

              <Right>
              <Button transparent>
                  <Icon active name="call" />
                  <Text>Call</Text>
                </Button>
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
