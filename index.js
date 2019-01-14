import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Image} from 'react-native';

type Props = {};
class HelloReactWorld extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let pic = {
      uri: 'https://i.redd.it/ixy3lhau0fn01.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 193}}/>
        <Text style={styles.welcome}>HelloWord!🚀</Text>
        <TextInput
                  style={styles.instructions}
                  placeholder="Type something"
                  onChangeText={(text) => this.setState({text})}
                />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍫').join(' ')}
          </Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloReactWorld);
