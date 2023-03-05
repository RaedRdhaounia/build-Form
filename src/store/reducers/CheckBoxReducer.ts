import { CheckBoxState } from '@/constants/interfaces ';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CheckBoxState = {
  label: '',
  value: false,
};

const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState,
  reducers: {
    setCheckBox: (state, action: PayloadAction<CheckBoxState>) => {
      return action.payload;
    },
    setLabel: (state, action: PayloadAction<string>) => {
      state.label = action.payload;
    },
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setCheckBox, setLabel, setValue } = checkBoxSlice.actions;

export default checkBoxSlice.reducer;
