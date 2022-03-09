import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomButton from './elements/CustomButton';
import CustomTextInput from './elements/CustomTextInput';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = () => {
    console.warn(name, email, phone, password);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 20,
        }}>
        Sign Up
      </Text>
      <CustomTextInput
        label="Name"
        placeholder="Enter Name"
        secured={false}
        onChangeText={value => setName(value)}
      />
      <CustomTextInput
        label="Email Address"
        placeholder="Enter Email Address"
        secured={false}
        type="email-address"
        onChangeText={value => setEmail(value)}
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="Enter Phone Number"
        secured={false}
        type="numeric"
        onChangeText={value => setPhone(value)}
      />
      <CustomTextInput
        label="Password"
        placeholder="Enter Password"
        secured={true}
        onChangeText={value => setPassword(value)}
      />

      <CustomButton text="Sign Up" onPress={signUpHandler} />

      <Text>Name: {name}</Text>
      <Text>Email:{email}</Text>
      <Text>Phone:{phone}</Text>
      <Text>Password:{password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
});

export default Signup;
