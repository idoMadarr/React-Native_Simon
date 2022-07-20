import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  currentSequence: [],
  results: [],
  message: null,
};

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setSequence: (state, action) => {
      state.currentSequence.push(action.payload);
    },
    clearSequence: state => {
      state.currentSequence = [];
    },
    initResult: (state, action) => {
      state.results = action.payload;
    },
    setResult: (state, action) => {
      state.results.unshift(action.payload);
      AsyncStorage.setItem(`results`, JSON.stringify(state.results));
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {setSequence, clearSequence, initResult, setResult, setMessage} =
  mainSlice.actions;

export default mainSlice.reducer;
