import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

export default class App extends Component{
    render() {
        return (
            <ImageBackground style={styles.container} resizeMode="cover" source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-Owl7wiyAI8bZDSFa_Ftk2P3-W6QnfpBnmx2clnF7J1RPkc0q'}} >
                <Text style={styles.welcome}>Hello!</Text>
            </ImageBackground>
      ); 
    };
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
        color:'#fff'
    }
});
