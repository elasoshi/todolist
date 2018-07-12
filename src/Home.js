import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import firebase from 'firebase';
import { Header, Tasks, AddTasks } from './components/index';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Home extends Component {
  state = { name: '', occupation: '' }
  componentWillMount() {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}`)
      .once('value').then(snapshot => {
        const users = [];
        snapshot.forEach((child) => {
          users.push({
            name: child.val().name,
            occupation: child.val().occupation
          });
          //console.log(users[0].name);
        });
        this.setState({ name: users[0].name, occupation: users[0].occupation });
        console.log(this.state.name);
        console.log(this.state.occupation);
      });
    }

  render() {
    return (

      <View style={{ width: '100%', height: '100%' }}>
          <Header name={this.state.name} occupation={this.state.occupation} />
          <Tasks />
          <AddTasks />


      </View>


    );
  }
}

export default Home;
