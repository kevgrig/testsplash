import React from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };
  
  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      console.log("Calling SplashScreen.preventAutoHideAsync");
      await SplashScreen.preventAutoHideAsync();
      console.log("Calling setTimeout");
      setTimeout(this.slowSplashCallback, 5000);
    } catch (e) {
      console.warn(e);
    }
  }

  slowSplashCallback = async () => {
    console.log("setTimeout finished");
    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  }

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#1a689c', alignItems: 'center', justifyContent: 'center' }}>
        <Text>testsplash</Text>
      </View>
    );
  }
}
