import React, { Component } from 'react';
import { View, Text } from 'react-native';


class Tasks extends Component {


  render() {
    const date = new Date();
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const fulldate = `${day[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;

    console.log(fulldate);
    const { textContainer, headerTextStyle, dateTextStyle } = styles;
    return (
      <View style={textContainer}>
        <Text style={headerTextStyle}>My Tasks</Text>
      <Text style={dateTextStyle}>{fulldate}</Text>
      </View>
    );
  }
}

const styles = {
  textContainer: {
    alignSelf: 'center',
    top: 240,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  headerTextStyle: {
    fontSize: 35,
    color: '#4A4A4A',
  },
  dateTextStyle: {
    top: 5,
    fontSize: 12,
    color: '#6C757B',
  },
};

export { Tasks };
