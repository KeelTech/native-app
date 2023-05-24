import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
// import Lottie from 'lottie-react-native';
import Root from '@utils/Root';
import {useState, forwardRef, useImperativeHandle} from 'react';

const transparentColor = '#00000066';

const {width, height} = Dimensions.get('screen');

const AppLoader = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(false);
  const [isCancelable, setIsCancelable] = useState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        show: isCancelable => {
          show(isCancelable);
        },
        hide: () => {
          hide();
        },
      };
    },
    [],
  );

  function show(isCancelable = true) {
    const showingSheet = false;
    if (showingSheet) return;
    setLoading(true);
    setIsCancelable(isCancelable);
  }

  function hide() {
    setLoading(false);
  }

  if (!loading) {
    return null;
  }

  return (
    <SafeAreaView style={styles.alertContainer}>
      {isCancelable && (
        <TouchableOpacity
          style={{
            height: 54,
            width: 60,
            backgroundColor: 'transparent',
          }}
          activeOpacity={1}
          onPress={() => {
            Root.hideLoader();
            Root.goBack();
          }}
        />
      )}
      <View style={styles.content}>
        <View style={styles.indicator}>
          <ActivityIndicator size={'large'} />
          {/* <Lottie
            style={[
              styles.lottie,
              {
                top: this.props.cancelable ? -20 : 0,
              },
            ]}
            autoPlay
            loop
            source={require('@assets/anim/loading.json')}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  lottie: {
    width: 66,
    height: 66,
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: transparentColor,
  },
  alertContainer: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    margin: 0,
    position: 'absolute',
    zIndex: 1000,
  },
  indicator: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default AppLoader;
