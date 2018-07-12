import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import ProfileImg from '../images/profile.jpg';

const Thumbnail = ({ name, occupation }) => {
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
          {name}
        </Text>
        <Text style={subNameText}>
          {occupation}
        </Text>
      </View>

    </View>
  );
};

const styles = {
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { weight: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row'


  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  textContainer: {

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
    fontSize: 10,
    alignSelf: 'center'
  },
  thumbnailStyle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2


  }
};

export { Thumbnail };
