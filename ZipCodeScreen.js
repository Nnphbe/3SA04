import React from 'react';
import { StyleSheet, FlatList, View, Text, ImageBackground,
    TouchableHighlight } from 'react-native';
    
    const availableZipItems = [
     { place: 'Hatyai', code: '90110' },
     { place: 'Trang', code: '92000' },
     { place: 'Chiangmai', code: '50000' },
     { place: 'Khonkaen', code: '40000' },
     { place: 'Chonburi', code: '20000' },
     { place: 'Satun', code: '91000' },
    ]
    const ZipItem = ({place, code, navigate}) => (
        <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>
            <View style={styles.zipItem}>
                <Text style={styles.zipPlace}>{place}</Text>
                <Text style={styles.zipCode}>{code}</Text>
            </View>
        </TouchableHighlight>
    )

    const _keyExtractor = item => item.code

    export default class ZipcodeScreen extends React.Component {
        static navigationOptions = ({navigation}) => {
            return {
                headerTitle: (<Text>Choose a zip code</Text>),
            }
        }
 render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground source={require('./chopper.jpg')} style={styles.backdrop}>
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
            />
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
   zipItem:{paddingTop: 23, 
            fontSize: 45,
            color: 'white', 
            justifyContent:'space-evenly',
            flexDirection:'row'
        },
    zipPlace:{
        color: 'white'
    },

    zipCode: {
        color: 'skyblue'
    },
        
    backdrop: { width: '100%', height: '100%',flexDirection:'column'},
    

});