import {useEffect} from 'react';
import {View} from 'react-native';
import Logo from '@assets/logo.svg';
import Root from '@utils/Root';
import {SCREEN_KEYS} from '@utils/Constants';
import {useNavigation} from '@react-navigation/core';
import RNBootSplash from 'react-native-bootsplash';

/* 
yarn react-native generate-bootsplash /Users/tanujsharma/Downloads/ic_launcher_round\ \(1\)/res/mipmap-xxxhdpi/ic_launcher_round_adaptive_fore.png \
  --background-color=F5FCFF \
  --logo-width=210 \
  --assets-path=assets \
  --flavor=main \
  --platforms=android,ios


*/
const AppSplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    RNBootSplash.hide();
    setTimeout(() => {
      navigation.replace(SCREEN_KEYS.LOGIN_SCREEN);
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
