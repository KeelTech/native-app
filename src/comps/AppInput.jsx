import {StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '@utils/hooks/useTheme';

const AppInput = props => {
  const {label = 'Label', error, ...inputProps} = props;
  const {colors, fonts} = useTheme();

  return (
    <>
      <Text
        style={[
          styles.label,
          {fontFamily: fonts.regular, color: colors.primary},
        ]}>
        {label}
      </Text>
      <TextInput
        style={
          error
            ? [styles.input, {borderColor: colors.error}]
            : [styles.input, {borderColor: colors.border}]
        }
        {...inputProps}
      />
      {error && (
        <Text
          style={[
            styles.error,
            {color: colors.error, fontFamily: fonts.regular},
          ]}>
          {error}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 16,
    fontSize: 16,
  },
  error: {
    marginTop: 4,
    fontSize: 12,
  },
  input: {
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});

AppInput.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default AppInput;
