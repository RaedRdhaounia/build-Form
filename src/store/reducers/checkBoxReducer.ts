import { CheckBoxState } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CheckBoxState[] = []

const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState,
  reducers: {
    addCheckBox: (state, action: PayloadAction<CheckBoxState>) => {
      state.push(action.payload);
    },
    updateCheckBox: (state, action: PayloadAction<{index:number, newfield: CheckBoxState}>) => {
      state[action.payload.index] = action.payload.newfield;
    },
    removeCheckBox: (
      state,
      action: PayloadAction<number>
    ) => {
      state.splice(action.payload, 1)
    },
  },
});

export const { addCheckBox, removeCheckBox, updateCheckBox } = checkBoxSlice.actions;

export default checkBoxSlice.reducer;
