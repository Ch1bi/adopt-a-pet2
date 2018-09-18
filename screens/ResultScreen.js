import React from 'react';
import { StyleSheet, ScrollView,FlatList,Text, View, TouchableHighlight} from 'react-native';

export default class ResultScreen extends React.Component {
  constructor(props) {
    super(props);

  }


  goToDetail = (stuff) => {
    console.log(stuff)
    this.props.navigation.navigate('Detail', { data: stuff });
  };

  // keyExtractor = (item, index) => item.name.$t;

  renderList = ({item}) =>{

    return(

      <TouchableHighlight
        onPress={()=>this.goToDetail(item)}
      >
            
        <View style={{ backgroundColor: 'white', height:50, borderBottomColor:'lightgrey', borderBottomWidth:0.5}}>

          <Text style={{marginLeft:10, marginTop:5 }}>{item.name.$t}</Text>
          <Text style={{marginLeft:10, marginTop:5}}>{item.email.$t}</Text>


        </View>
            
      </TouchableHighlight>
    ) 
  }

  static navigationOptions = {
    title: 'Search'
  };

  render() {
    let params = this.props.navigation.getParam('data').shelter;
    console.log(params)
    return (

      <View>


           <FlatList
            // keyExtractor={this.keyExtractor}
            data={params}
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
