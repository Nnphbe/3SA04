import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
        main: '-', description: '-', temp: 0
        }
    }
}
fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
            this.setState(
             {
                forecast: {
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp
            }
        });
    })
    .catch((error) => {
        console.warn(error);
    });
}
   
    componentDidMount = () => this.fetchData()
    render() {
        return ( 
            <View style={styles.container}>
                <ImageBackground source={require('./blue.jpg')} style={styles.backdrop}> 
                    <Text style={styles.textmain}>zip code is {this.props.zipCode}</Text>
                    <Forecast {...this.state.forecast} /> 
                </ImageBackground> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textmain: {paddingTop: 30, fontSize: 50,color: 'white', textAlign: "center"},
    textdescription: {paddingTop: 50,fontSize: 40,color: 'white', textAlign: "center"},
    texttemp: {paddingTop: 50,fontSize: 30,color: 'white', textAlign: "center"},
    backdrop: { width: '100%', height: '100%',flexDirection:'column',justifyContent:'center',alignItems:'center'},
    
});