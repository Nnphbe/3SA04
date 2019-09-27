import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';

// import { StyleSheet, Text, View } from 'react-native';

const RootStack = createStackNavigator({
    Weather: WeatherScreen,
    ZipCode: ZipCodeScreen
},{
    initialRouteName: 'Weather',
})

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
       );
    }
}
   