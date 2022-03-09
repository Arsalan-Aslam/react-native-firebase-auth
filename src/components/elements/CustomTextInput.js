import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const CustomTextInput = props => {
  return (
    <View>
      <Text style={styles.inputLabels}>{props.label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        secureTextEntry={props.secured}
        keyboardType={props.type}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    // borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputLabels: {
    fontSize: 24,
    paddingBottom: 5,
  },
});

export default CustomTextInput;
