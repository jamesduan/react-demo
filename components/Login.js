/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';

import {Actions} from "react-native-router-flux";

// import CustomButton from './CustomButton'
import {Button as NButton } from 'native-base';
import logo from '../assets/images/applogo.png'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPassword: true,
      keyboardType: 'name-phone-pad'
    };
  }
  render() {
    return (
      <View style={styles.container} flexDirection="column" justifyContent="center">
        <View>
          <Image
            style={styles.ledaoLogo}
            source={logo}
          />
        </View>
        <View style={styles.loginInputs}>
          <TextInput
            keyboardType={this.state.keyboardType}
            style={styles.username}
            placeholder="用户名"
          />
          <TextInput
            keyboardType={this.state.keyboardType}
            secureTextEntry={this.state.isPassword}
            style={styles.password}
            placeholder="密码"
          />

        </View>
        <View style={{marginTop: 30}}>
          <NButton full info
            onPress={() => {
            Actions.home({data: "Custom data"})
          }}>
            <Text>
              登录
            </Text>
          </NButton>
        </View>
        <NButton full info
          onPress = { () => {
            Actions.footer();
          }}
        >
          <Text>Footer</Text>
        </NButton>
        <View style={styles.help}>
          <Button 
            color="red" title="首次登录?申请乐道登录权限"
            onPress={() => {
              Actions.register()
            }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  second: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 20
  },
  ledaoLogo: {
    width: 115,
    height: 104,
    marginBottom: 20
  },
  loginInputs: {
    marginTop: 20
  },
  loginButton: {
    backgroundColor: '#14C9B3',
    borderRadius: 10,
    width: 250,
    height: 30,
    marginTop: 30,
    textAlign: 'center',
    color: 'white',

  },
  help: {
    marginTop: 10
  },
  username: {
    width: 200,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10
  },
  password: {
    width: 200,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10
  }
});
