import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomTextInput from './elements/CustomTextInput';
import CustomButton from './elements/CustomButton';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 20,
        }}>
        Login
      </Text>
      <CustomTextInput
        label="Email"
        placeholder="Enter Email Address"
        secured={false}
        type="email-address"
      />
      <CustomTextInput
        label="Password"
        placeholder="Enter Password"
        secured={true}
      />
      <CustomButton text="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
});

export default Login;
