import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './components/common/index';
import BackgroundImage from './images/bg.jpg';

class SignUp extends Component {
  state = { name: '', occupation: '', email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(this.onSucess.bind(this))
      .catch(this.onFail.bind(this));
  }

onSucess() {
  const { name, occupation } = this.state;
  const { currentUser } = firebase.auth();
  this.setState({
    error: '',
    password: '',
    email: '',
    name: '',
    occupation: '',
    loading: false
  });
  firebase.database().ref(`/users/${currentUser.uid}`)
    .push({ name, occupation })
    .then(() => Actions.main({ type: 'reset' }));
}

onFail() {
  this.setState({ error: 'Failed', loading: false });
}

renderButton() {
  if (this.state.loading) {
    return <Spinner size='small' />;
  }

  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Sign Up
    </Button>
  );
}

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={BackgroundImage} style={styles.imageBg} />

      <View style={styles.headerStyle}>

        <Card>
          <CardSection>
            <Text style={styles.appIconStyle}>Tasks</Text>
          </CardSection>
          <CardSection>
            <Input
              placeholder="Name"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Occupation"
              value={this.state.occupation}
              onChangeText={occupation => this.setState({ occupation })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>
          <CardSection>
            {this.renderButton()}
          </CardSection>

          <CardSection>
            <TouchableOpacity onPress={Actions.login}>
              <Text style={styles.textStyle}>Already have account? Sign In</Text>
            </TouchableOpacity>
          </CardSection>


        </Card>

      </View>
    </View>
    );
  }
}

const styles = {
  headerStyle: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBg: {
    width: 375,
    height: 667
  },
  textStyle: {
    color: '#fff',
    paddingTop: 5,
    paddingBottom: 20,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 0,
    width: 320,

  },
  appIconStyle: {
    color: '#fff',
    paddingTop: 5,
    paddingBottom: 100,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center', // <-- the magic
    marginTop: 0,
    width: 320,
    fontFamily: 'FreckleFace-Regular'
  }
};

export default SignUp;
