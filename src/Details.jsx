import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';
const Details = props => {
  const {name} = props.route.params;
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, [name]);

  const dataComp = (title, value) => {
    return (
      <View style={{width: deviceWidth - 60}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
          <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image1.jpg')}
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
        {data ? (
          <>
            <View
              style={{
                justifyContent: 'space-evenly',
                flexDirection: 'column',
                alignItems: 'center',
                height: deviceHeight - 100,
              }}>
              <View>
                <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
                <Text
                  style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                  {data['weather'][0]['main']}
                </Text>
              </View>
              <Text style={{color: 'white', fontSize: 64}}>
                {(data['main']['temp'] - 273).toFixed(2)}&deg; C
              </Text>
              <Text style={{color: 'white', fontSize: 22}}>
                Weather Details
              </Text>
              {dataComp('Wind', data['wind']['speed'])}
              {dataComp('Pressure', data['main']['pressure'])}
              {dataComp('Humidity', `${data['main']['humidity']}%`)}
              {dataComp('Visibility', data['visibility'])}
            </View>
          </>
        ) : (
          <ActivityIndicator size={80} color="white" />
        )}
      </View>
    </View>
  );
};

export default Details;
