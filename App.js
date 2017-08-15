import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const quotes = [{
    message: "You can do anything, but not everything.",
    author: "David Allen",
  },
  {
    message: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    message: "You miss 100 percent of the shots you never take.",
    author: "Wayne Gretzky",
  },
  {
    message: "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
    author: "Ambrose Redmoon",
  },
  {
    message: "The richest man is not he who has the most, but he who needs the least.",
    author: "Unknown Author"

}];

export default class App extends React.Component {
  state = {
    activeQuoteIndex: 0
  }

  nextQuote = () => {
    const {activeQuoteIndex} = this.state;
    if (activeQuoteIndex < quotes.length - 2) {
      this.setState({
        activeQuoteIndex: activeQuoteIndex + 1
      })
    } else {
      this.setState({
        activeQuoteIndex: 0
      })
    }
  };
  render() {
    const activeQuote = quotes[this.state.activeQuoteIndex];
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{activeQuote.message}</Text>
        <Text style={styles.autor}> - {activeQuote.author}</Text>
        <View style={styles.button}>
          <Button
            title={'Next quote'}
            onPress={this.nextQuote}
          />
        </View>
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
    paddingHorizontal: 30
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
  },
  autor: {
    fontSize: 18,
  },
  button: {
    position: 'absolute',
    bottom: 40,
  }
});
