import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';
import {SCREEN_KEYS} from '@utils/Constants';
import PreferenceSelectionScreen from '@screens/PreferenceSelectionScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_KEYS.PREFERENCE_SELECTION_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_KEYS.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={SCREEN_KEYS.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
      <Stack.Screen name={SCREEN_KEYS.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={SCREEN_KEYS.PREFERENCE_SELECTION_SCREEN}
        component={PreferenceSelectionScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
