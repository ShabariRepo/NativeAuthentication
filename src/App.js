/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  // life cycle methods are methods that are automatically envoked inside our component
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAO4oW046ymy3EzOSqTWg3BltJ77aNeFIE',
      authDomain: 'reactnativeauth-6c91a.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-6c91a.firebaseio.com',
      projectId: 'reactnativeauth-6c91a',
      storageBucket: 'reactnativeauth-6c91a.appspot.com',
      messagingSenderId: '781139483620'
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
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