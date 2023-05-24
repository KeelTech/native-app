import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {loaderRef, navigationRef} from '@utils/Root';
import AppNavigator from '@app/AppNavigator';
import AppLoader from '@comps/AppLoader';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={backgroundStyle}>
        <AppNavigator />
      </SafeAreaView>
      <AppLoader ref={loaderRef} />
    </NavigationContainer>
  );
}

export default App;
