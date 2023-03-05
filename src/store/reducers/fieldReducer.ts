import { Field, FieldState } from '@/constants/interfaces ';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FieldState = {
  fields: {},
};

export const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<Field>) => {
      state.fields[action.payload.id] = action.payload;
    },
    updateField: (state, action: PayloadAction<Field>) => {
      const { id, ...field } = action.payload;
      state.fields[id] = {
        ...state.fields[id],
        ...field,
      };
    },
    removeField: (state, action: PayloadAction<string>) => {
      delete state.fields[action.payload];
    },
  },
});

export const { addField, updateField, removeField } = fieldSlice.actions;
export default fieldSlice.reducer;
