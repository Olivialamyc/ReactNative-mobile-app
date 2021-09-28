import React from 'react';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import LoginScreen from './src/login/login.js'
import Icon from 'react-native-ico-material-design';
import style from './src/Login/style.js';

const IconHeight = 26;
const IconWidth = 26;


export default class App extends React.Component {
  state = {
    screenText: "Press a button"
  }

  changeText = (text) =>{
    console.log(text + 'has been pressed.')
    this.setState({
      screenText : text
    })
  }

  render() {
    return (
      <View>
        <View>
      <Text  style={{fontSize:30}}>{this.state.screenText}</Text>
      <Icon name="add-plus-button" height="40" width="40" />
      <StatusBar style='light' />
      
      </View>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
        <Pressable onPress={() =>  this.changeText('Welcome')} style={styles.IconBehave}
        android_ripple={{borderless:true, radius:50}}>
          <Icon name="front-store" height={iconHeight} width={iconWidth} color='448aff' />

        </Pressable>
        <Pressable onPress={() =>  this.changeText('Login')} style={styles.IconBehave}
        android_ripple={{borderless:true, radius:50}}>
          <Icon name="user-account-box" height={iconHeight} width={iconWidth} color='448aff' />
          
        </Pressable>
        <LoginScreen />

        </View>
      </View>



      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282b75',
    color: '#a296ca',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavContainer:{
    position:'absolute',
    alignItems:'center',
    bottom:20
  },
  NavBar:{
    flexDirection:'row',
    backgroundColor:'#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40


  },

  IconBehave:{
    padding: 14

  } 
   
});