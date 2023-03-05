import { BlockState } from '@/constants/interfaces ';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BlockState[] = [];

const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {
    addBlock(state, action: PayloadAction<BlockState>) {
      state.push(action.payload);
    },
    removeBlock(state, action: PayloadAction<string>) {
      return state.filter((block) => block.id !== action.payload);
    },
    updateBlockName(state, action: PayloadAction<{ id: string; name: string }>) {
      const { id, name } = action.payload;
      const blockToUpdate = state.find((block) => block.id === id);
      if (blockToUpdate) {
        blockToUpdate.name = name;
      }
    },
  },
});

export const { addBlock, removeBlock, updateBlockName } = blockSlice.actions;

export default blockSlice.reducer;
