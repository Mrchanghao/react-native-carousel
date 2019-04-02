/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image,
  View, TouchableWithoutFeedback,
  Dimensions} from 'react-native';
import Carousel from './src/Carousel';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {width, height} = Dimensions.get('window')

// example data
const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];


export default class App extends Component {

  // example render method
  renderItem = (item) => {
    return(
      <View key={item.id} style={[styles.cardStyle, styles.container]}>
        <Image
        style={{width: 350, height: 200}}
        source={{uri: item.uri}}
        />
        <Text style={styles.titleText}>
          {item.text}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel data={DATA} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardStyle: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    backgroundColor: 'black',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 12
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#fff',
  },
});
