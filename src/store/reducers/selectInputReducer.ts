import { SelectInputState } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SelectInputState[] = []

const selectInputSlice = createSlice({
  name: 'selectInput',
  initialState,
  reducers: {
    addSelectInput: (state, action: PayloadAction<SelectInputState>) => {
      state.push(action.payload);
    },
    updateSelectInput: (state, action: PayloadAction<{index:number, newfield: SelectInputState}>) => {
      state[action.payload.index] = action.payload.newfield;
    },
    removeSelectInput: (
      state,
      action: PayloadAction<number>
    ) => {
      state.splice(action.payload, 1)
    },
  },
});

export const { addSelectInput, removeSelectInput, updateSelectInput } = selectInputSlice.actions;

export default selectInputSlice.reducer;
