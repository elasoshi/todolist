import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, AlertIOS } from 'react-native';
import firebase from 'firebase';
import { CardSection, Input } from './common/index';
import Plus from '../images/plus.png';

class PopupContent extends Component {
  state = { categories: '', description: '', empty: true };


  onButtonPress() {
    const { currentUser } = firebase.auth();
    const { categories, description } = this.state;
    firebase.database().ref(`/users/${currentUser.uid}/Tasks/${categories}`)
    .push({ description })
    .then(this.onSucess);
  }

  onSucess() {
    AlertIOS.alert('sucesss');
  }

  render() {
    const { taskCointainer, headerTextStyle, imageStyle } = styles;
    return (
      <View>
        <Text style={headerTextStyle}>Add Task</Text>
        <View style={taskCointainer}>
          <Input
            placeholder="eg. Meeting"
            value={this.state.categories}
            onChangeText={categories => this.setState({ categories })}
          />
      </View>
        <View style={styles.taskCointainer}>
        <Input
          placeholder="Description"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
      </View>
      <TouchableOpacity style={imageStyle} onPress={this.onButtonPress.bind(this)}>
        <Image style={imageStyle} source={Plus} />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  taskCointainer: {
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#F8566F'

  },
  headerTextStyle: {
    fontSize: 24,
    color: '#4A4A4A',
    alignSelf: 'center',
    paddingTop: 10
  },
  imageStyle: {
    alignSelf: 'center',
    height: 70,
    width: 70,
    marginTop: 10
  }
};

export { PopupContent };
