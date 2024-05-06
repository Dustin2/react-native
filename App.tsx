import {View, Text} from 'react-native';
import React from 'react';
// import {CounterScreen} from './src/screens/CounterScreen';
// import HelloWordScreen from './src/screens/HelloWordScreen';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {Navigation} from './Navigation/Navigation';
// import {CounterScreen} from './src/screens/CounterScreen';

//dependencies
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
const App = () => {
  return (
    // <View>
    // <HelloWordScreen />
    // <CounterScreen />
    // </View>
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};

export default App;
