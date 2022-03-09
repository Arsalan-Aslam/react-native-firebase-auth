import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const CustomButton = props => {
  const styles = StyleSheet.create({
    btn: {
      width: '100%',
      color: 'black',
      marginTop: 20,
      backgroundColor: !props.bgColor ? '#0583d2' : props.bgColor,
      padding: 10,
      borderRadius: 5,
    },
    BtnText: {
      fontSize: 24,
      textAlign: 'center',
      color: !props.textColor ? 'white' : props.textColor,
    },
  });
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.BtnText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
