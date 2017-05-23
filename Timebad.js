/**
 * @flow
 */

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native'
import firebase from 'firebase'

export default class FirstScreen extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      modalVisible: false,
      dataSource: ds.cloneWithRows({})
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  componentWillMount () {
    firebase.database().ref('Badbooking').orderByChild('timeslot').on('value', (snapshot) => {
      snapshot.val()
      ? this.setState({dataSource: this.state.dataSource.cloneWithRows(snapshot.val()) || {}})
      : console.log('firebase is empty')
    })
  }

  toggleModal (response) {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  saperator () {
    return (
      <View style={{height: 2, backgroundColor: 'lightgray', margin: 5}} />
    )
  }

  renderRow (rowData) {
    let time
    switch (parseInt(rowData.timeslot)) {
      case 1:
        time = '8:00 - 10:00'
        break
      case 2:
        time = '10:00 - 12:00'
        break
      case 3:
        time = '12:00 - 14:00'
        break
      case 4:
        time = '14:00 - 16:00'
        break
      case 5:
        time = '16:00 - 18:00'
        break
      case 6:
        time = '18:00 - 20:00'
        break

      default:
        break
    }

    return (
      <View>
        <View style={styles.row}>
          <View style={styles.viewview2}>
            <Text style={styles.font}>{rowData.court}.{rowData.timeslot}</Text>
          </View>
          <View style={styles.viewview}>
            <Text> {time} </Text>
            <Text> Reserved by {rowData.name} </Text>
          </View>
        </View>
        {this.saperator()}
      </View>
    )
  }

  render () {
    return (
      <View>
        <View style={styles.container}>
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={rowData => this.renderRow(rowData)}
          />
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 90

  },
  viewview: {
    flex: 7,
    padding: 7,
    backgroundColor: '#f2f2f2'
  },
  bon: {
    marginTop: 20
  },
  viewview2: {
    padding: 7,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e95947'
  },
  row: {
    justifyContent: 'center',
    height: 70,
    flexDirection: 'row'
  },
  font: {
    fontSize: 20,
    color: 'white'
  },
  button: {
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: '#bc1210',
    width: 355,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  }
})
