import { RadioButtonState } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RadioButtonState[] = [];

const radioButtonSlice = createSlice({
  name: 'radioButton',
  initialState,
  reducers: {
    addRadioButton: (state, action: PayloadAction<RadioButtonState>) => {
      state.push(action.payload);
    },
    updateRadioButton: (state, action: PayloadAction<{index:number, newfield: RadioButtonState}>) => {
      state[action.payload.index] = action.payload.newfield;
    },
    removeRadioButton: (
      state,
      action: PayloadAction<number>
    ) => {
      state.splice(action.payload, 1)
    },
  },
});

export const { addRadioButton, removeRadioButton, updateRadioButton} =
  radioButtonSlice.actions;

export default radioButtonSlice.reducer;
