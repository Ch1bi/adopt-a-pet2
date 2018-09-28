import React from 'react';
import { AsyncStorage, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right} from 'native-base';


export default class FavScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      data: []
    }
  }

  getFavs = ()=>{

   
  }

  static navigationOptions = ({ navigation }) => {
    navigation.addListener('didFocus', () => {

      console.log('tab did focus');
       return AsyncStorage.getItem('animal')
      .then((res)=>{

        console.log(res)
      })
    });
  };
  

  
  render() {

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
                <Button transparent
                // onPress={()=>this.saveFavorite(item)}
                >
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});