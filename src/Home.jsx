import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image2.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <TouchableOpacity>
            <Icon name="menu" size={46} color="white" />
          </TouchableOpacity>
          <Image
            source={require('../assets/images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white'}}>Hello Aia</Text>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
            Search the city by the name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'white',
            }}>
            <TextInput
              placeholder="Search City"
              placeholderTextColor="white"
              style={{padding: 10, color: 'white', width: deviceWidth * 0.6}}
            />
            <Icon name="search" size={22} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
