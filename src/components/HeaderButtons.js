import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Menu from '../images/menu.png';
import Dots from '../images/dots.png';

const HeaderButtons = () => {
  const { containerStyle, buttonStyle, imageStyle, buttonStyle2 } = styles;
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={() => { NavigationActions.navigate('DrawerOpen'); }} style={buttonStyle}>
        <Image source={Menu} style={imageStyle} />
      </TouchableOpacity>

      <TouchableOpacity style={buttonStyle2}>
        <Image source={Dots} style={imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    alignSelf: 'flex-start',
    flexDirection: 'row',


  },
  buttonStyle: {
    height: 15,
    width: 15,
    marginLeft: 20

  },
  buttonStyle2: {
    height: 15,
    width: 15,
    marginLeft: 300
  },
   imageStyle: {
     height: 15,
     width: 23
   }
};

export { HeaderButtons };
