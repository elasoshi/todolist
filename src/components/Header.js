import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Thumbnail, HeaderButtons } from './index';
import BackgroundImage from '../images/bg.jpg';


const Header = ({ name, occupation }) => {
  return (
    <View style={{ height: 230, flex: 1 }}>
    <ImageBackground source={BackgroundImage} style={styles.imageBg} >
    <View style={styles.headerStyle}>
      <HeaderButtons />
      <Thumbnail name={name} occupation={occupation} />
    </View>
    </ImageBackground>
  </View>
  );
};

const styles = {
  headerStyle: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginTop: 40

  },
  imageBg: {
    height: 230,
    opacity: 0.8,
  }
};

export { Header };
