import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';

const Card = ({name, image}) => {
  console.log('image', image);
  return (
    <View>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
      />
    </View>
  );
};

export default Card;
