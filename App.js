import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

const Card = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>My Application</Text>

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: "gray",
    alignItems: 'center',
  },
  mainHeading: {
    padding: 4,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomColor: 'blue',
    borderBottomWidth: 2
  }
})
