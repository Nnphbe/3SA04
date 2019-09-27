import React from 'react';
import Weather from './Weather'
import { Text } from 'react-native';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Weather</Text>),
        }
    }
 render() {
    return (
        <Weather zipCode="90110"/>
        );
    }
 }
