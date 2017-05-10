/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Switch,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(response){
      this.setState({modalVisible: !this.state.modalVisible});
  }

  saperator(){
    return (
      <View style={{height:2, backgroundColor:'#4a464a', margin:5}}/>
    );
  }

  render() {
    return (

      <View style={styles.container}>

  <TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 3})}}>
      <View style={{flex:5}}>
        <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>

      <View style={{flex:7, padding: 7}}>
      <Text style={styles.header}>Rangsit Court</Text>
      <Text style={styles.header}>92/330 </Text>
      </View>

      </TouchableOpacity>


      {this.saperator()}

<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 3})}}>


      <View style={{flex:5}}>
        <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>

      <View style={{flex:7, padding: 7}}>
      <Text style={styles.header}>Bangkadi Court</Text>
      <Text style={styles.header}>21/224</Text>
      </View>

      </TouchableOpacity>



      </View>



    );
 }
}
const styles = StyleSheet.create({
 container:{
  padding: 10,
  paddingTop:70,
  backgroundColor: '#f1f6fc',
  flex:1
 },
 image:{
    height: 100
  },
 row:{
   flexDirection: 'row',
   backgroundColor: '#E6E6FA',
   height: 100
 },
 header:{
   fontSize:18,
   flexWrap: 'wrap',
   paddingBottom: 10,
   color: 'black'
 }
});
