import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from './Card';

const Home = () => {
  const [city, setCity] = useState();

  const cities = [
    {
      name: 'Araria',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'Purnia',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'Katihar',
      image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'Saharsa',
      image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'Patna',
      image: require('../assets/images/image7.jpg'),
    },
  ];

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
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 17,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{padding: 10, color: 'white', fontSize: 20}}
            />
            <TouchableOpacity onPress={() => {}}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              paddingHorizontal: 10,
              marginBottom: 20,
              marginTop: deviceHeight / 5,
            }}>
            My Location
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={item => {
              return <Card name={item.item.name} image={item.item.image} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
