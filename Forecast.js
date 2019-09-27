import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default class Forecast extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.textmain}>{this.props.main}</Text>
                <Text style={styles.textmain}>{this.props.description}</Text>
                <Text style={styles.textmain}>{this.props.temp} °C</Text>
        
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    textmain: {paddingTop: 10, fontSize: 40,color: 'white', textAlign: "center"},

    backdrop: { width: '100%', height: '100%',flexDirection:'column',justifyContent:'center',alignItems:'center'},

    container: { paddingTop: 25,
    backgroundColor: 'black',
    opacity: 0.5
    }

});

