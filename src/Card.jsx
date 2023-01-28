import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';

const Card = ({name, image}) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
      />
    </TouchableOpacity>
  );
};

export default Card;
