import React from 'react';
import {Text, StyleSheet} from 'react-native';
// import { useMotiPressable } from 'moti/interactions'
import {MotiPressable} from 'moti/interactions';
import {useMemo} from 'react';

const AppButton = props => {
  return (
    <MotiPressable
      animate={useMemo(
        () =>
          ({hovered, pressed}) => {
            'worklet';
            return {
              scale: hovered || pressed ? 1.07 : 1,
              opacity: hovered || pressed ? 0.9 : 1,
            };
          },
        [],
      )}
      transition={useMemo(
        () =>
          ({hovered, pressed}) => {
            'worklet';

            return {
              delay: hovered || pressed ? 0 : 0,
            };
          },
        [],
      )}
      style={styles.button}
      onPress={props?.onPress}>
      <Text style={{color: 'white', fontSize: 16}}>Press Me</Text>
    </MotiPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(215, 77, 92, 1)',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 5,
    marginTop: 16,
  },
});

export default AppButton;
