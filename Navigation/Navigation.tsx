import React from 'react';
import {StyleSheet, View} from 'react-native';
// dependencies to navigate
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//screens
import {Home} from '../src/screens/Home';
import {NewRoutes} from '../src/screens/NewRoutes';
import MapsStores from '../src/screens/MapsStores';
import {SplashScreen} from '../src/screens/SplashScreen';
const Tab = createMaterialTopTabNavigator();

export const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
      
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Inicio',
          }}
        />
        <Stack.Screen
          name="new routes"
          component={NewRoutes}
          options={{
            title: ' Agregar nueva ruta',
          }}
        />
        <Stack.Screen
          name="map"
          component={MapsStores}
          options={{
            title: ' mapa',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // top taps
    // <NavigationContainer>
    // <Tab.Navigator>
    //   <Tab.Screen name="home" component={Home}  options={
    //     {
    //       title:'Inicio'
    //     }
    //   }/>
    //   <Tab.Screen name="new routes" component={NewRoutes} options={{
    //     title:' Agregar nueva ruta'
    //   }} />
    // </Tab.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
