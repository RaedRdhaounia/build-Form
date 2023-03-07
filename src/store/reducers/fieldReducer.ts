import { FieldType } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState : {filed?: FieldType} = {
  filed : undefined
};

export const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    addFiled(state, action: PayloadAction<FieldType>) {
      state.filed = action.payload
    },
    removeFiled(state) {
      state.filed = undefined

    },
  },
});

export const {addFiled, removeFiled } = fieldSlice.actions;
export default fieldSlice.reducer;
