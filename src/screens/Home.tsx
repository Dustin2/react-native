import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';
import {Fab} from '../../componets/FAB/Fab';
import CButton from '../../componets/Button/CButton';
// import { Navigation } from '../Navigation/Navigation';

export const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 25,
      }}>
      {/* <Fab icon='plus' onPress={() => navigation.navigate('map')}/> */}
      <Fab icon="plus" onPress={() => navigation.navigate('new routes')} />
      <List.Item
        title="Tienda chayo"
        description="Item description"
        // left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="Tienda chayo"
        description="Item description"
        // left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="Tienda chayo"
        description="Item description"
        // left={props => <List.Icon {...props} icon="folder" />}
      />
      <CButton
      
        buttonColor="blue"
        mode="outlined"
        text="ir a mapa"
        textColor="white"
        onPress={() => navigation.navigate('map')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
