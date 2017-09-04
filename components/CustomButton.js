

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor='#EFEFF4'
        activeOpacity={0.7}
        >
        <View style={styles.button}>
          <Text style={styles.buttonText}>提交</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#14C9B3',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#14C9B3',
    padding: 5,
    width: 250,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
  }
});
