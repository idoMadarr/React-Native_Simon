import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
