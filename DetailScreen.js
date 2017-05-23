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
      <View style={{height:2, backgroundColor:'lightgray', margin:5}}/>
    );
  }

  render() {
    return (

      <View style={styles.container}>

  <TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 4})}}>
      <View style={{flex:5}}>
        <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>

      <View style={{flex:7, padding: 7}}>
      <Text style={styles.header}>Rangsit Court</Text>
      <Text style={styles.header2}>99 Moo 18, Phahon Yothin Rd., Khlong Nueng, Khlong Luang, Pathum Thani 12120 Thailand </Text>
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
      <Text style={styles.header2}>131 Moo 5, Tiwanont Road, Bangkadi Muang
Pathum Thani 12000, Thailand</Text>
      </View>

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
  padding: 10,
  paddingTop:70,
  backgroundColor: 'white',
  flex:1
 },
 image:{
    height: 100
  },
 row:{
   flexDirection: 'row',
   backgroundColor: '#f4f5f9',
   height: 100
 },
 header:{
   fontSize:18,
   flexWrap: 'wrap',
   paddingBottom: 10,
   color: 'black'
 },
 header2:{
   fontSize:12,
   flexWrap: 'wrap',
   paddingBottom: 10,
   color: 'gray'
 },
 button1:{
   backgroundColor: '#bc1210',
   
   width: 355,
   height: 55,
   alignItems: 'center',
   justifyContent: 'center'
  },
    buttonText:{
    fontSize: 20,
    color: 'white'
   }
});
