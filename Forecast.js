import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.textmain}>{this.props.main}</Text>
                <Text style={styles.textdescription}>{this.props.description}</Text>
                <Text style={styles.texttemp}>{this.props.temp} °C</Text>
        
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