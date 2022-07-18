import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {useSelector, useDispatch} from 'react-redux';
import ModalMessage from '../components/ModalMessage';
import {Modalize} from 'react-native-modalize';

const AppNavigation = () => {
  const MainNavigator = createNativeStackNavigator();
  const {message} = useSelector(state => state.mainSlice);
  const modalizeRef = useRef();

  useEffect(() => {
    if (message) modalizeRef.current.open();
  }, [message]);

  const closeModal = () => modalizeRef.current.close();

  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{headerShown: false}}>
        <MainNavigator.Screen name={'menu-bar'} component={TabNavigation} />
      </MainNavigator.Navigator>
      <Modalize
        modalStyle={{overflow: 'hidden'}}
        ref={modalizeRef}
        adjustToContentHeight={true}
        panGestureEnabled={false}>
        <ModalMessage message={message} closeModal={closeModal} />
      </Modalize>
    </NavigationContainer>
  );
};

export default AppNavigation;
