import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Menu from '../images/menu.png';
import Dots from '../images/dots.png';

const HeaderButtons = () => {
  const { containerStyle, buttonStyle, imageStyle, buttonStyle2 } = styles;
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={buttonStyle}>
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
    flexDirection: 'row',
    paddingTop: 20,
    height: 60


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
