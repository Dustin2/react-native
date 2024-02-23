import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  backgroundColor?: 'red';
  position?: 'left' | 'rigth';
  style?: {};
  onPress(): void;
}
export const Fab = ({



  text,
  onPress,
  backgroundColor,
  style,
  position = 'left',
}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.fabLocation,
          position === 'left' ? styles.left : styles.rigth,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'left' ? styles.left : styles.rigth,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{text}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 5,
    // marginEnd: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabText: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
  },
  left: {
    left: 25,
  },
  rigth: {
    right: 25,
  },
});
