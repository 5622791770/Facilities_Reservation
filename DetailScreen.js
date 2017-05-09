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
      <View>
      <View style={styles.container}>

  <TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 2})}}>
      <View style={{flex:5}}>
        <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>

      <View style={{flex:7, padding: 7}}>
      <Text>@ GYM1</Text>
      </View>
    
      </TouchableOpacity>


      {this.saperator()}

<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 1})}}>


      <View style={{flex:5}}>
        <Image
            style={styles.image}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>

      <View style={{flex:7, padding: 7}}>
      <Text>@ GYM2</Text>
      </View>

      </TouchableOpacity>



      </View>
</View>


    );
 }
}
const styles = StyleSheet.create({
 container:{
  padding: 10,
  paddingTop:70,
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
   fontSize:20,
   flexWrap: 'wrap',
   color: 'black'
 }
});
