import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import LoginScreen from './src/login/login.js'
import Icon from 'react-native-ico-material-design';

const IconHeight = 26;
const IconWidth = 26;


export default class App extends React.Component {
  render() {
    return (
      <View>
      <Icon name="add-plus-button" height="40" width="40" />
      <LoginScreen />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});