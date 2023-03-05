import { SelectInputState } from '@/constants/interfaces ';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SelectInputState = {
  id: '',
  name: '',
  options: [],
  styles: {},
  value: '',
};

const selectInputSlice = createSlice({
  name: 'selectInput',
  initialState,
  reducers: {
    setSelectInput: (state, action: PayloadAction<SelectInputState>) => {
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
    setStyles: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.styles = action.payload;
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {
  setSelectInput,
  setId,
  setName,
  setOptions,
  setStyles,
  setValue,
} = selectInputSlice.actions;

export default selectInputSlice.reducer;
