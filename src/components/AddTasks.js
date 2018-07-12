import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { PopupContent } from './index';
import PlusBtn from '../images/plus.png';

class AddTasks extends Component {
  
  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: 'bottom',
    });
    const { buttonStyle, imageBtn } = styles;
    return (
      <View style={{ position: 'absolute', height: 0 }}>


        <View style={{ alignSelf: 'center', marginTop: 205, marginLeft: 290, height: 50 }}>
          <TouchableOpacity
            onPress={() => {
              this.popupDialog.show();
        }}>
        <View style={buttonStyle}>
          <Image style={imageBtn} source={PlusBtn} />
          </View>
          </TouchableOpacity>
        </View>

        <View style={{ position: 'absolute' }}>
          <PopupDialog
            ref={(popupDialog) => {
              this.popupDialog = popupDialog;
            }}
            dialogAnimation={slideAnimation}
          >

              <PopupContent />

          </PopupDialog>
        </View>

      </View>

    );
  }
}

const styles = {

  buttonStyle: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    shadowColor: '#000',
    shadowOffset: { weight: 0, height: 2 },
    shadowOpacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBtn: {
    height: 60,
    width: 60,


  },

};
export { AddTasks };
