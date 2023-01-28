import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';

const Home = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image2.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
      />
    </View>
  );
};

export default Home;
