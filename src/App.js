import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import Router from './Router';


class App extends Component {
  state = { LoggedIn: null };

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDn9y9wbCg7XHoxhGcQMD8AMLco8Jf3l50',
    authDomain: 'todolist-4af17.firebaseapp.com',
    databaseURL: 'https://todolist-4af17.firebaseio.com',
    projectId: 'todolist-4af17',
    storageBucket: 'todolist-4af17.appspot.com',
    messagingSenderId: '1083177452337'
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ LoggedIn: true });
    } else {
      this.setState({ LoggedIn: false });
    }
  });
}

renderContent() {
  Actions.main();
}

  render() {
    return (
      <Router />
    );
  }
}

export default App;
