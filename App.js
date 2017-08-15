import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const quotes = [{
    message: "You can do anything, but not everything.",
    author: "David Allen",
  },
  {
    message: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    message: "The richest man is not he who has the most, but he who needs the least.",
    author: "Unknown Author"

}];

export default class App extends React.Component {
  state = {
    activeQuoteIndex: 0
  }
  render() {
    const activeQuote = quotes[this.state.activeQuoteIndex];
    return (
      <View style={styles.container}>
        <Text>{activeQuote.message}</Text>
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
