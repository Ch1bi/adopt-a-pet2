import React from 'react';
import { StyleSheet, ScrollView,FlatList,Text, View, TouchableHighlight} from 'react-native';

export default class ResultScreen extends React.Component {
  constructor(props) {
    super(props);

  }


  goToDetail = petInfo => {
    this.props.navigation.navigate('Detail', { data: petInfo });
  };

  keyExtractor = (item, index) => item.id;

  renderList = ({item}) =>{

    return(

      <TouchableHighlight
        onPress={()=>this.goToDetail}
      >
            
        <View style={{backgroundColor: 'white'}}>

          <Text>{item.city.$t}</Text>

        </View>
            
      </TouchableHighlight>
    ) 
  }

  static navigationOptions = {
    title: 'Search'
  };

  render() {
    let params = this.props.navigation.getParam('data');
    console.log(params)
    return (

      <View>


           <FlatList
            keyExtractor={this.keyExtractor}
            data={params.shelter}
            renderItem={this.renderList}
      />
  
      </View>

     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
