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
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // app level state
  state = { loggedIn: null };

  // life cycle methods are methods that are automatically envoked inside our component
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAO4oW046ymy3EzOSqTWg3BltJ77aNeFIE',
      authDomain: 'reactnativeauth-6c91a.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-6c91a.firebaseio.com',
      projectId: 'reactnativeauth-6c91a',
      storageBucket: 'reactnativeauth-6c91a.appspot.com',
      messagingSenderId: '781139483620'
    });

    // whether or not the user is signed in using the user argument
    firebase.auth().onAuthStateChanged((user) => {
      // user will be defined if signed up if not undefined
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  // whether or not to show login form or logout
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
          </CardSection>
          );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
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