import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import ProfileImg from '../images/profile.jpg';

const Thumbnail = () => {
  const {
     imageContainer,
      mainContainer,
      textContainer,
      nameText,
      subNameText,
      thumbnailStyle
      } = styles;

  return (
    <View style={mainContainer}>
      <TouchableOpacity style={imageContainer}>
        <Image style={thumbnailStyle} source={ProfileImg} />
    </TouchableOpacity>

      <View style={textContainer}>
        <Text style={nameText}>
          Yusuf Shamsudeen
        </Text>
        <Text style={subNameText}>
          Developer/Mobile Developer
        </Text>
      </View>

    </View>
  );
};

const styles = {
  imageContainer: {
    height: 58,
    width: 58,
    borderRadius: 58 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { weight: 0, height: 2 },
    shadowOpacity: 0.2,

  },
  mainContainer: {
    marginLeft: 15,
    marginTop: 50,
    height: 58,
    width: 221,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    paddingLeft: 10
  },
  nameText: {
    color: '#FFF',
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { weight: 0, height: 2 },
    shadowOpacity: 0.2,
    fontSize: 20
  },
  subNameText: {
    color: '#FFF',
    shadowColor: '#000',
    shadowOffset: { weight: 0, height: 2 },
    shadowOpacity: 0.2,
    fontSize: 10
  },
  thumbnailStyle: {
    width: 58,
    height: 58,
    justifyContent: 'center',
    borderRadius: 58 / 2


  }
};

export { Thumbnail };
