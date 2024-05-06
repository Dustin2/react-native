import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GlobalStyles} from '../../src/GlobalStyles';

interface TextInputProps {
  label?: string;
  value?: string;
  onChange?: () => void;
  mode?: 'flat' | 'outlined';
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  // onChange?: ()=> void
}

export const TextInputcus = ({
  label,
  value,
  onChange,
  mode,
  keyboardType,
}: TextInputProps) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChange}
      mode={mode}
      keyboardType={keyboardType}
      style={styles.inputs}
      
    />
  );
};

const styles = StyleSheet.create({
  inputs: {
    // flex: 1,
    padding: 1,
    // marginBottom: 15,
    margin: 13,
  },
});
