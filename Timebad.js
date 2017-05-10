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


      <View style={styles.viewview2}>
      <Text style={styles.font}>T1</Text>
      </View>
      <View style={styles.viewview}>
      <Text> 08.00 AM - 10.00 AM </Text>
      <Text> Reserved by </Text>
      </View>

      </TouchableOpacity>

      {this.saperator()}

<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 2})}}>

      <View style={styles.viewview2}>
      <Text style={styles.font}>T2</Text>
      </View>
      <View style={styles.viewview}>
      <Text> 10.00 AM - 12.00 PM </Text>
      <Text> Reserved by </Text>
      </View>

      </TouchableOpacity>

      {this.saperator()}


<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 2})}}>

      <View style={styles.viewview2}>
      <Text style={styles.font}>T3</Text>
      </View>
      <View style={styles.viewview}>
      <Text> 12.00 PM - 02.00 PM </Text>
      <Text> Reserved by </Text>
      </View>

      </TouchableOpacity>

      {this.saperator()}


<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 2})}}>
      <View style={styles.viewview2}>
      <Text style={styles.font}>T4</Text>
      </View>
      <View style={styles.viewview}>
      <Text> 02.00 PM - 04.00 PM </Text>
      <Text> Reserved by </Text>
      </View>

      </TouchableOpacity>

      {this.saperator()}


<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 2})}}>
      <View style={styles.viewview2}>
      <Text style={styles.font}>T5</Text>
      </View>
      <View style={styles.viewview}>
      <Text> 04.00 PM - 06.00 PM </Text>
      <Text> Reserved by </Text>
      </View>

      </TouchableOpacity>

      {this.saperator()}

<TouchableOpacity style={styles.row} onPress={() => {this.props.navigator.push({index: 2})}}>
      <View style={styles.viewview2}>
      <Text style={styles.font}>T6</Text>
      </View>
      <View style={styles.viewview}>
      <Text> 06.00 PM - 08.00 PM </Text>
      <Text> Reserved by </Text>
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

 },
 viewview:{
    flex:7,
    padding: 7,
    flex: 4,
    backgroundColor: '#ffebcc',
  },
  viewview2:{
    flex:7,
    padding: 7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
   },
 row:{
   justifyContent: 'center',
   height: 70,
   flexDirection: 'row',
 },
 font:{
   fontSize:20,
   color: 'white'
 }
});
