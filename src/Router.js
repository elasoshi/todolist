import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Blank from './Blank';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key='blank' component={Blank} hideNavBar duration={0} />
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="SignUp" component={SignUp} />
      </Scene>

      <Scene key="main">
        <Scene key="Home" component={Home} hideNavBar />
      </Scene>

    </Router>
    );
  };


export default RouterComponent;
