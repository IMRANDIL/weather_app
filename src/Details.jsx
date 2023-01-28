import React from 'react';
import {Text} from 'react-native';

const Details = props => {
  const {name} = props.route.params;
  console.log('name', name);
  return <Text>Details</Text>;
};

export default Details;
