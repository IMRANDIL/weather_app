import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Diamension';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';
const Details = props => {
  const {name} = props.route.params;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      });
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
          <Text style={{color: 'white', fontSize: 22}}>{title}</Text>
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
        {isLoading ? (
          <ActivityIndicator size={80} color="white" />
        ) : isError ? (
          <Text style={{color: 'red', fontSize: 40, textAlign: 'center'}}>
            Error retrieving data
          </Text>
        ) : (
          <View
            style={{
              justifyContent: 'space-evenly',
              flexDirection: 'column',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data && data['weather'] && data['weather'][0]['main']}
              </Text>
            </View>
            <Text style={{color: 'white', fontSize: 64}}>
              {(data && data['main'] && data['main']['temp'] - 273)?.toFixed(2)}
              &deg; C
            </Text>
            <Text style={{color: 'white', fontSize: 22}}>Weather Details</Text>
            {data['wind'] && dataComp('Wind', data['wind']['speed'])}
            {data['main'] && dataComp('Pressure', data['main']['pressure'])}
            {data['main'] &&
              dataComp('Humidity', `${data['main']['humidity']}%`)}
            {data['visibility'] && dataComp('Visibility', data['visibility'])}
          </View>
        )}
      </View>
    </View>
  );
};

export default Details;
