import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './components/common/index';
import BackgroundImage from './images/bg.jpg';


class Login extends Component {
  state = { email: '', password: '', error: '', loading: false };
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onSucess.bind(this))
      .catch(this.onFail.bind(this));
  }

  onSucess() {
    this.setState({
      error: '',
      password: '',
      email: '',
      loading: false
    });
    Actions.main({ type: 'reset' });
  }

  onFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign In
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
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
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
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Forgot password?</Text>
            </TouchableOpacity>
          </CardSection>
          <CardSection>
            {this.renderButton()}
          </CardSection>
          <CardSection>
            <TouchableOpacity onPress={Actions.SignUp}>
              <Text style={styles.textStyle2}>SIGN UP</Text>
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
    width: '100%',
    height: '100%'
  },
  textStyle: {
    color: '#fff',
    paddingTop: 5,
    paddingBottom: 20,
    fontSize: 10,
    textAlign: 'center', // <-- the magic
    marginTop: 0,
    width: 300,

  },
  textStyle2: {
    color: '#F8566F',
    paddingTop: 5,
    paddingBottom: 20,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center', // <-- the magic
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
  },
  errorTextStyle: {
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 320,
    color: 'red',
    fontWeight: 'bold'
  }
};

export default Login;
