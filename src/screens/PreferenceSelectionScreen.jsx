import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import useTheme from '@utils/hooks/useTheme';

const PREFERENCE_LIST_DATA = [
  {
    id: 'STUDY_ABROAD',
    title: 'Study Abroad',
    subTitle: 'We are world’s no.1 Tech enabled and customer',
    background: require('@assets/bg_study_abroad.png'),
  },
  {
    id: 'IMMIGRATION_SERVICES',
    title: 'Immigration Services',
    subTitle: 'We are world’s no.1 Tech enabled and customer',
    background: require('@assets/bg_immigration_services.png'),
  },
  {
    id: 'TEST_PREP',
    title: 'Test Prep',
    subTitle: 'We are world’s no.1 Tech enabled and customer',
    background: require('@assets/bg_test_prep.png'),
  },
];
const PreferenceCard = ({data}) => {
  const {colors, fonts} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 12,
        marginVertical: 12,
        position: 'relative',
      }}>
      <ImageBackground
        source={data?.background}
        style={{height: 125, paddingHorizontal: 16}}
        imageStyle={{borderRadius: 12, height: 125}}>
        <Text
          style={{
            fontSize: 20,
            color: colors.secondary,
            fontFamily: fonts.medium,
            marginTop: 48,
          }}>
          {data?.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.grey,
            fontFamily: fonts.regular,
          }}>
          {data?.subTitle}
        </Text>
      </ImageBackground>
    </View>
  );
};
const PreferenceSelectionScreen = props => {
  const {colors, fonts} = useTheme();

  function renderItem({item}) {
    return <PreferenceCard data={item} />;
  }
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.heading,
          {color: colors.primary, fontFamily: fonts.medium},
        ]}>
        {'What are you \nlooking for?'}
      </Text>

      <FlatList
        style={{flex: 1, zIndex: 1, paddingBottom: 300}}
        keyExtractor={item => item.id}
        data={PREFERENCE_LIST_DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <Image
        source={require('@assets/graphic_keel_list_bg.png')}
        style={{
          position: 'absolute',
          height: 220,
          resizeMode: 'contain',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 30,
    lineHeight: 42,
    marginVertical: 16,
  },
});
export default PreferenceSelectionScreen;
