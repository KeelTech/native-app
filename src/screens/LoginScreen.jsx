import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppInput from '@comps/AppInput';
import LoginGraphic from '@assets/graphic_login.svg';
import AppButton from '@comps/AppButton';
import {AnimatePresence, MotiView} from 'moti';
import Root from '@utils/Root';
import {SCREEN_KEYS} from '@utils/Constants';

const LoginScreen = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {visible && (
        <MotiView
          from={{
            translateY: 50,
          }}
          transition={{type: 'timing', delay: 0}}
          animate={{
            translateY: 0,
          }}
          style={styles.container}>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <LoginGraphic width={250} height={250} />
          </View>
          <AppInput label="Number" placeholder="9876543210" />
          <AppInput label="Password" placeholder="********" />
          <AppButton
            onPress={() => {
              Root.navigate(SCREEN_KEYS.SIGN_UP_SCREEN);
            }}
          />
        </MotiView>
      )}
    </AnimatePresence>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default LoginScreen;
