import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';

const Card = ({name, image}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}}>
      <ImageBackground
        source={image}
        imageStyle={{borderRadius: 10}}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
      />
      <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            width: '100%',
            height: '100%',
            color: 'black',
            textAlignVertical: 'center',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
