import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';

const Card = ({name, image, navigation}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 10}}
      onPress={() =>
        navigation.navigate('Details', {
          name,
        })
      }>
      <ImageBackground
        source={image}
        imageStyle={{borderRadius: 10}}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
      />
      <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            color: 'white',
            textAlignVertical: 'center',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
