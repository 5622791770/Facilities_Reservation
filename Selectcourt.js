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
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigator.push({index: 2})}}>
  <Text>Court1</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigator.push({index: 2})}}>
  <Text>Court2</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigator.push({index: 2})}}>
  <Text>Court3</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigator.push({index: 2})}}>
  <Text>Court4</Text>
  </TouchableOpacity>



      </View>


    );
 }
}
const styles = StyleSheet.create({
 container:{
  paddingTop:70,
  flexDirection:'row',
  flexWrap: 'wrap',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
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
 },
button:{
  margin: 10,
  borderWidth: 1,
  width: 150,
  height: 250,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightgray'
  }
});
