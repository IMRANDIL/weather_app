import React from 'react';
import {Text} from 'react-native';

const Details = props => {
  const {name} = props.route.params;
  console.log('name', name);
  return <Text style={{fontSize: 22}}>{name}</Text>;
};

export default Details;
