import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { HomeStack } from './src/navigator/Stack'

export class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <HomeStack/>
        </NavigationContainer>
    )
  }
}

export default App
