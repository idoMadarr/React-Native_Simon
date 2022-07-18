import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentSequence: [],
  message: null,
  isLoading: false,
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
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {setSequence, clearSequence, setMessage} = mainSlice.actions;

export default mainSlice.reducer;
