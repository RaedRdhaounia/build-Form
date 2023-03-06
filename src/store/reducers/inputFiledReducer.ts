import { InputFieldState } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InputFieldState[] = [];

const inputFieldSlice = createSlice({
  name: 'inputField',
  initialState,
  reducers: {
    addInputText: (state, action: PayloadAction<InputFieldState>) => {
      state.push(action.payload);
    },
    updateInputText: (state, action: PayloadAction<{index:number, newfield: InputFieldState}>) => {
      state[action.payload.index] = action.payload.newfield;
    },
    removeInputText: ( state, action: PayloadAction<number> ) => {
      state.splice(action.payload, 1)
    },
  },
});

export const { addInputText, removeInputText, updateInputText } = inputFieldSlice.actions;

export default inputFieldSlice.reducer;
