import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ButtonElement from './ButtonElement';
import {colors} from '../assets/colors';

const ModalMessage = ({message, closeModal}) => {
  const [username, setusername] = useState('');
  const [isValid, setIsValid] = useState(false);
  const isSuccess = message?.isSuccess;

  const updateState = value => setusername(value);

  useEffect(() => {
    setIsValid(username.length > 1 || isSuccess ? true : false);
  }, [username]);

  const buttonHandler = () => {
    closeModal();
    message.onPress(username);
  };

  let modalExpand = null;
  if (!isSuccess) {
    modalExpand = (
      <TextInput
        value={username}
        onChangeText={updateState}
        placeholder={'Please Enter Your Name'}
        maxLength={16}
        style={styles.input}
      />
    );
  }

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.headerTitle}>{message?.header}</Text>
      <Text>{message?.content}</Text>
      {modalExpand}
      <ButtonElement
        title={isSuccess ? 'Next' : 'Save'}
        onPress={isValid ? buttonHandler : null}
        background={isValid ? colors.dark : colors.placeholder}
        titleColor={isValid ? colors.white : colors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    minHeight: 120,
    paddingVertical: 16,
    backgroundColor: colors.placeholder,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.dark,
    marginBottom: 16,
  },
});

export default ModalMessage;
