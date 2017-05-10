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
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';

export default class FirstScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.title}>Name: </Text>
          <TextInput style={styles.input}
          autoCorrect={false}
          maxLength={20}
          placeholder="Please insert your name"
            keyboardType='numeric'
          />
        </View>

        <View style={styles.group}>
          <Text style={styles.title}>Mobile Telephone: </Text>
          <TextInput style={styles.input}
          autoCorrect={false}
          maxLength={20}
          placeholder="Please insert your phone number"
            keyboardType='numeric'
          />
        </View>

        <View style={styles.group}>
          <Text style={styles.title}>Date: </Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
          />

        </View>
        <View style={styles.group}>
          <Text style={styles.title}>Time: </Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
          />

        </View>


        <View style={styles.center}>
          <View style={styles.group}>
            <TouchableOpacity style={styles.button}
              onPress={this.compute}>
              <Text style={styles.buttonText}> Book </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
  padding: 20,
  paddingTop:100,
  justifyContent:'center',
  flexDirection:'column'
 },
 button:{
   marginTop: 40,
   backgroundColor: '#bc1210',
   width: 170,
   height: 50,
   alignItems: 'center',
   justifyContent: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: 'white'
   },
 row:{
   flexDirection: 'row',
   backgroundColor: '#E6E6FA',
   height: 100
 },
 title:{
   fontSize:18,
 },
 group:{
   marginTop:20
 },
 input:{
   padding: 10,
   flex:1,
   height: 40,
   borderWidth: 1
 },
 center:{
   alignItems: 'center'
 }

});
