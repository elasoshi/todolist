import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Thumbnail, HeaderButtons } from './index';
import BackgroundImage from '../images/bg.jpg';


const Header = () => {
  return (
    <View>
    <ImageBackground source={BackgroundImage} style={styles.imageBg} />
    <View style={styles.headerStyle}>
      <HeaderButtons />
      <Thumbnail />
    </View>
  </View>
  );
};

const styles = {
  headerStyle: {
    position: 'absolute',
    flexDirection: 'column',
    paddingTop: 20,
    height: 230,
    elevation: 3,

  },
  imageBg: {
    height: 230,
    marginTop: 20,
    flexDirection: 'column',
    opacity: 0.8
  }
};

export { Header };
