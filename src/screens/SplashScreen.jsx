import {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Logo from '@assets/logo.svg';
import Root from '@utils/Root';
import {SCREEN_KEYS} from '@utils/Constants';

const AppSplashScreen = () => {
  useEffect(() => {
    SplashScreen.hide();

    setTimeout(() => {
      Root.navigate(SCREEN_KEYS.LOGIN_SCREEN);
    }, 300);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo width={210} height={75} />
    </View>
  );
};

export default AppSplashScreen;
