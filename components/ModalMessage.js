import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {colors} from '../assets/colors';

const ModalMessage = ({message, closeModal}) => {
  const onSave = () => {
    closeModal();
    message.onPress();
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.headerContainer}>
        <Text>{message.header}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>{message.content}</Text>
        <TextInput placeholder={'Your Name'} />
        <Button title={'Save'} onPress={onSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
  },
  headerContainer: {},
  contentContainer: {},
});

export default ModalMessage;
