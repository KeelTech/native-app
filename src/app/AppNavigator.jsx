import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';
import {SCREEN_KEYS} from '@utils/Constants';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(20, 20, 20)',
    borderBottomWidth: 0,
    elevation: 0,
  },
});

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_KEYS.LOGIN_SCREEN}
      screenOptions={{
        headerStyle: styles.header,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_KEYS.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_KEYS.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
      <Stack.Screen name={SCREEN_KEYS.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
