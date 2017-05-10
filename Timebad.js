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
      
      
<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 1})}}>



      <View style={{flex:7, padding: 7}}>
      <Text> 08.00 AM - 10.00 AM </Text>
      </View>

      </TouchableOpacity>
      
      {this.saperator()}
      
<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 1})}}>



      <View style={{flex:7, padding: 7}}>
      <Text> 10.00 AM - 12.00 PM </Text>
      <Text> Reserved by </Text>
      </View>

      </TouchableOpacity>
      
      {this.saperator()}
      
      
<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 1})}}>



      <View style={{flex:7, padding: 7}}>
      <Text> 12.00 PM - 02.00 PM </Text>
      </View>

      </TouchableOpacity>
      
      {this.saperator()}
      
      
<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 1})}}>

      <View style={{flex:7, padding: 7}}>
      <Text> 02.00 PM - 04.00 PM </Text>
      </View>

      </TouchableOpacity>
      
      {this.saperator()}
      
      
<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 1})}}>
      <View style={{flex:7, padding: 7}}>
      <Text> 04.00 PM - 06.00 PM </Text>
      </View>

      </TouchableOpacity>
      
      {this.saperator()}
      
<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 1})}}>
      <View style={{flex:7, padding: 7}}>
      <Text> 06.00 PM - 08.00 PM </Text>
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
   height: 60
 },
 header:{
   fontSize:20,
   flexWrap: 'wrap',
   color: 'black'
 }
});
