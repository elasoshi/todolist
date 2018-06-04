import React, { Component } from 'react';
import firebase from 'firebase';
import { Header } from './components/index';


class Home extends Component {
  componentWillMount() {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}`)
      .on('value', snapshot => {
        this.setState({ users: snapshot.val() });
        console.log(this.state.users.);
      });
  }


  render() {
    return (

      <Header />

    );
  }
}

export default Home;
