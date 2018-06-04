import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { DrawerNavigator } from 'react-navigation';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="SignUp" component={SignUp} />
      </Scene>

      <Scene key="main">
        <Scene key="Home" component={MyApp} hideNavBar />
      </Scene>

    </Router>
    );
  };

  const MyApp = DrawerNavigator({
    Home: {
      screen: Home
    }
  });

export default RouterComponent;
