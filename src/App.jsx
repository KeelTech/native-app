import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {loaderRef, navigationRef} from '@utils/Root';
import AppNavigator from '@app/AppNavigator';
import AppLoader from '@comps/AppLoader';
import useTheme from '@utils/hooks/useTheme';
import {Provider} from 'react-redux';
import {store} from '@redux/store';

function App() {
  const {colors, isDarkMode} = useTheme();
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={{
          dark: isDarkMode,
          colors: {
            background: colors.background,
          },
        }}
        ref={navigationRef}>
        <SafeAreaView
          style={[styles.main, {backgroundColor: colors.background}]}>
          <AppNavigator />
        </SafeAreaView>
        <AppLoader ref={loaderRef} />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
export default App;
