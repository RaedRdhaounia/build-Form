import { RadioButtonState } from '@/constants/interfaces ';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RadioButtonState = {
  id: '',
  name: '',
  options: [],
};

const radioButtonSlice = createSlice({
  name: 'radioButton',
  initialState,
  reducers: {
    setRadioButton: (state, action: PayloadAction<RadioButtonState>) => {
      return action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setOptions: (
      state,
      action: PayloadAction<{ value: string; label: string }[]>
    ) => {
      state.options = action.payload;
    },
  },
});

export const { setRadioButton, setId, setName, setOptions } =
  radioButtonSlice.actions;

export default radioButtonSlice.reducer;
