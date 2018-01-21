/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import AlarmApp from './alarmApp';

import * as actions from '../actions/alarmActions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    return (
      <AlarmApp/>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Add a new alarm!
      //   </Text>
      //   <DatePicker
      //     style={{width:200}}
      //     placeholder="select date"
      //     mode="time"
      //     format="HH:mm"
      //     confirmBtnText="Confirm"
      //     cancelBtnText="Cancel"
      //     customStyles={
      //       {
      //         dateIcon: {
      //           width: 0,
      //           display: 'none'
      //         },
      //         dateInput: {
      //           marginLeft: 36
      //         }
      //       }
      //     }
      //   />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;