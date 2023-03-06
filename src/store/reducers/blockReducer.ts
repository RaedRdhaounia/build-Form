import { BlockState, FieldType } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BlockState[] = [];

const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {
    addBlock(state, action: PayloadAction<BlockState>) {
      state.push(action.payload);
    },
    removeBlock(state, action: PayloadAction<number>) {
      state.splice(action.payload, 1)
    },
    updateBlock(state, action: PayloadAction<{ index: number, description:string, name: string }>) {
      state[action.payload.index] = {... state[action.payload.index], description: action.payload.description, name: action.payload.name }
    },
    removeBlockFiled(state, action: PayloadAction<{ index: number, fieldId: number}>) {
      state[action.payload.index].fields.splice(action.payload.fieldId, 1)
    },
    addBlockFiled(state, action: PayloadAction<{ index: number, field: {type: FieldType,  id: string}}>) {
      state[action.payload.index].fields.push(action.payload.field)
    },
  },
});

export const { addBlock, removeBlock, updateBlock } = blockSlice.actions;

export default blockSlice.reducer;
