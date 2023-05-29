import {View, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppInput from '@comps/AppInput';
import LoginGraphic from '@assets/graphic_login.svg';
import AppButton from '@comps/AppButton';
import {AnimatePresence, MotiView, ScrollView} from 'moti';
import Root from '@utils/Root';
import {SCREEN_KEYS} from '@utils/Constants';
import {useForm, Controller} from 'react-hook-form';

const SignUpScreen = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      mobileNumber: '',
      password: '',
    },
  });
  const onSubmit = data => {
    console.log('formData: ', data);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  function onSignInPress() {
    Root.navigate(SCREEN_KEYS.LOGIN_SCREEN);
  }

  return (
    // <AnimatePresence>
    //   {visible && (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <MotiView
        key={'sign_up_form'}
        from={{
          translateY: 40,
        }}
        transition={{type: 'timing', delay: 0}}
        animate={{
          translateY: 0,
        }}
        style={styles.container}>
        <View style={styles.graphicContainer}>
          <LoginGraphic width={250} height={250} />
        </View>
        <Controller
          control={control}
          rules={{
            required: 'Name is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              label="Name"
              placeholder="John Wick"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name?.message}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: 'Email is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              label="Email"
              placeholder="johnwick@getkeel.com"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name?.email}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: 'Number is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              label="Number"
              placeholder="9876543210"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name?.mobileNumber}
            />
          )}
          name="mobileNumber"
        />
        <Controller
          control={control}
          rules={{
            required: 'Password is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              label="Password"
              placeholder="********"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name?.password}
            />
          )}
          name="password"
        />
        <AppButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
        <Text onPress={onSignInPress} style={styles.signInText}>
          Already a user? Sign in
        </Text>
      </MotiView>
    </ScrollView>
    //   )}
    // </AnimatePresence>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  graphicContainer: {alignItems: 'center', marginTop: 40},
  signInText: {
    textAlign: 'center',
    color: 'rgba(36, 41, 47, 1)',
    fontSize: 18,
    lineHeight: 42,
    marginTop: 12,
  },
});
export default SignUpScreen;
