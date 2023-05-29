import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {MotiPressable} from 'moti/interactions';
import {useMemo} from 'react';
import useTheme from '@utils/hooks/useTheme';

const AppButton = props => {
  const {title} = props;
  const {fonts, colors} = useTheme();
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
      <Text
        style={{
          textAlign: 'center',
          color: colors.primary,
          fontFamily: fonts.bold,
          fontSize: 16,
          color: colors.secondary,
        }}>
        {title}
      </Text>
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

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AppButton;
