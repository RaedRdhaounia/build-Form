import { BoxReducer, FormReducer } from '@/constants/types/interfaces ';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FormReducer = { formName: "Form Name", blocks: [] };

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormName(state, action: PayloadAction<string>) {
      state.formName = action.payload;
    },
    addBlock(state, action: PayloadAction<BoxReducer>) {
      state.blocks.push(action.payload)
    },
    removeBlock(state, action: PayloadAction<number>) {
      state.blocks.splice(action.payload, 1)
    },
  },
});

export const { setFormName, addBlock, removeBlock } = formSlice.actions;

export default formSlice.reducer;
