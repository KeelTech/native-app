import {StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';

const AppInput = props => {
  const {label = 'Label', ...inputProps} = props;
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...inputProps} />
    </>
  );
};

const styles = StyleSheet.create({
  label: {color: 'rgba(36, 41, 47, 1)', fontWeight: 'bold', marginTop: 16},
  input: {
    marginTop: 8,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(232, 232, 232, 1)',
  },
});
export default AppInput;
