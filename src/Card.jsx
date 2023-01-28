import React from 'react';
import {Text, View} from 'react-native';

const Card = ({name, image}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Card;
