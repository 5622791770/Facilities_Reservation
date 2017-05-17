/**
 * @flow
 */

import React, { Component } from 'react';

import {
  DatePickerIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';

import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCN33smlpUPj68rdpKmJIVc5-y2SnQz4Pw",
    authDomain: "bookbad-3a642.firebaseapp.com",
    databaseURL: "https://bookbad-3a642.firebaseio.com",
    projectId: "bookbad-3a642",
    storageBucket: "bookbad-3a642.appspot.com",
    messagingSenderId: "606920833110"
  };
  firebase.initializeApp(config);

const options = [
  "T1",
  "T2",
  "T3",
  "T4",
  "T5",
  "T6"
];
const options2 = [
  "C1",
  "C2",
  "C3",
  "C4"
];

export default class FirstScreen extends Component {
	constructor(props) {
	super(props);
	this.database = firebase.database();
	}
	
	  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  };
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
          <Text style={styles.title}>Telephone number: </Text>
          <TextInput style={styles.input}
          autoCorrect={false}
          maxLength={20}
          placeholder="Please insert your phone number"
            keyboardType='numeric'
          />
        </View>

        <View style={styles.group}>
          <Text style={{fontSize:18}}>Today is: <Text style={{color:'#e95947'}}>{this.state.date.toLocaleDateString()}</Text></Text> 
        </View>
                <View style={styles.group}>
          <Text style={styles.title}>Select Court: </Text>
          </View>
        
                <View style={styles.segmentControlContainer}>
          <SegmentedControls options={ options2 } style={styles.segmentControl} tint= {'#e95947'} selectedTint={'white'}/>
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>Select Time: </Text>
          </View>
        <View style={styles.segmentControlContainer}>
          <SegmentedControls options={ options } style={styles.segmentControl} tint= {'#e95947'} selectedTint={'white'}/>
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
  title1:{
   fontSize:18,
   color:'#e95947'
 },
 group:{
   marginTop:20
 },
 segmentControlContainer: {
 paddingHorizontal: 5,
 marginTop: 10
  }, 
   segmentControl: {

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
