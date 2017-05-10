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
  Modal
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

  render() {
    return (
      <View style={styles.container}>

          <Image style={styles.gear} source={require('./images/bad.png')} />
          <Text style={styles.appNameText}>BOOKBAD</Text>
          <Text style={styles.appDescriptionText}>Easy booking badminton and tennis courts</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonCreate} onPress={() => {this.props.navigator.push({index: 1})}}><Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>Badminton</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonCreate} onPress={() => {this.props.navigator.push({index: 1})}}><Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>Tennis</Text></TouchableOpacity>
          </View>

        {/* </Image> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: 'white'
  },
  gear: {
    width: 150,
    height: 150,
    marginTop: 80,
    marginBottom: 20
  },
  appNameText: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'black',
    alignSelf: 'center'
  },
  appDescriptionText: {
    fontSize: 15,
    textAlign:'center',
    backgroundColor: 'transparent',
    lineHeight: 25,
    color: 'black',
    marginTop: 10,
    marginBottom: 10
  },
  buttonContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,

    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'stretch',
    alignSelf: 'stretch',
  },
  buttonInfo: {
    marginTop: 10,
    backgroundColor: '#00e6e6',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10
  },
  buttonCreate: {
    backgroundColor: '#f4f5f9',
    justifyContent: 'center',
    flex: 2,
    marginTop: 10,
    paddingHorizontal: 10
  },
  logoSiit: {
    height: 30,
    width: 100,
    margin: 30
  },
  modal:{
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    margin: 20,
    backgroundColor:'white',
    opacity: 0.94
  },
  closeButtonContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginRight: 10
  },
  closeButton: {
    fontSize: 24,
    color: 'darkgrey',
  },
  modalText:{
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    lineHeight: 20,
  }
});
