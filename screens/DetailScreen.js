import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Detail'
  };


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

  render() {
    let params = this.props.navigation.getParam('data');
    console.log(params)
    console.log(params.id.$t)


    return (
      <View>


          <FlatList
          // keyExtractor={this.keyExtractor}
          data={params}
          renderItem={this.renderList}
          />

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
