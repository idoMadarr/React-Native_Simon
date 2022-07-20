import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import AppHeader from '../components/AppHeader';
import ModalMessage from '../components/ModalMessage';
import {Modalize} from 'react-native-modalize';
import {initResult} from '../store/slice';

const AppNavigation = () => {
  const MainNavigator = createNativeStackNavigator();
  const {message} = useSelector(state => state.mainSlice);
  const modalizeRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) modalizeRef.current.open();
  }, [message]);

  useEffect(() => {
    const initStorage = async () => {
      const results = JSON.parse(await AsyncStorage.getItem(`results`));
      dispatch(initResult(results));
    };
    initStorage();
  }, []);

  const closeModal = () => modalizeRef.current.close();

  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{header: () => <AppHeader />}}>
        <MainNavigator.Screen name={'menu-bar'} component={TabNavigation} />
      </MainNavigator.Navigator>
      <Modalize
        modalStyle={{overflow: 'hidden'}}
        ref={modalizeRef}
        adjustToContentHeight={true}>
        <ModalMessage message={message} closeModal={closeModal} />
      </Modalize>
    </NavigationContainer>
  );
};

export default AppNavigation;
