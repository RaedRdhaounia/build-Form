import { InputFieldState } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InputFieldState = {
  id: '',
  type: '',
  name: '',
  styles: {},
  value: '',
};

const inputFieldSlice = createSlice({
  name: 'inputField',
  initialState,
  reducers: {
    setInputField: (state, action: PayloadAction<InputFieldState>) => {
      return action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setStyles: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.styles = action.payload;
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setInputField, setId, setType, setName, setStyles, setValue } =
  inputFieldSlice.actions;

export default inputFieldSlice.reducer;
