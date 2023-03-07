import { FormReducer } from '@/constants/types/interfaces ';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FormReducer = { formName: "Form Name", blocks: [] };

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormName(state, action: PayloadAction<string>) {
      state.formName = action.payload;
    },
    addBlock(state, action: PayloadAction<string>) {
      state.blocks.push(action.payload)
    },
    removeBlock(state, action: PayloadAction<string>) {
      const blocks =  state.blocks.filter(block => block !== action.payload)
      return {formName: state.formName, blocks}
    },
  },
});

export const { setFormName, addBlock, removeBlock } = formSlice.actions;

export default formSlice.reducer;
