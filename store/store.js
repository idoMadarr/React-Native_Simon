import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';

import mainSlice from './slice';

const rootReducer = combineReducers({
  mainSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export default store;
