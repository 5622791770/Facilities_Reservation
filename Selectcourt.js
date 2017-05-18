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
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigator.push({index: 4})}}>
  <Image style={styles.image} source={require('./images/bad.png')} />
  <Text style={styles.text}>COURT 1</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigator.push({index: 4})}}>
  <Image style={styles.image} source={require('./images/bad.png')} />
  <Text style={styles.text}>COURT 2</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigator.push({index: 4})}}>
  <Image style={styles.image} source={require('./images/bad.png')} />
  <Text style={styles.text}>COURT 3</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigator.push({index: 4})}}>
  <Image style={styles.image} source={require('./images/bad.png')} />
  <Text style={styles.text}>COURT 4</Text>
  </TouchableOpacity>

<TouchableOpacity style={styles.button1} onPress={() => {this.props.navigator.push({index: 2})}}>
        <Text style={styles.buttonText}> Book </Text>
      </TouchableOpacity>

      </View>


    );
 }
}
const styles = StyleSheet.create({
 container:{
  paddingTop:65,
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
 text:{
   fontSize:20,
   flexWrap: 'wrap',
   paddingBottom: 10,
   color: 'black'
 },
button:{
  margin: 12,
  width: 150,
  height: 250,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f4f5f9'
},
button1:{
   backgroundColor: '#bc1210',
   width: 400,
   height: 55,
   alignItems: 'center',
   justifyContent: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: 'white'
   },
image: {
  width: 50,
  height:50,
  marginTop: 20,
  marginBottom: 20
}
});
