import { BoxReducer, Filed } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BoxReducer[] = [];

const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {
    addBlock(state, action: PayloadAction<BoxReducer>) {
      state.push(action.payload);
    },
    removeBlock(state, action: PayloadAction<string>) {
      state.filter(block => block.id !== action.payload)
    },
    updateBlock(state, action: PayloadAction<{ id: string, description:string, label: string }>) {
      const {description, id, label} = action.payload
      state.forEach(block =>{
        if(block.id === id) {
          if (description) {
            block.description = description;
          }
          if (label) {
            block.label = label
          }
        }
      })
    },
    removeBlockFiled(state, action: PayloadAction<{ id: string, fieldId: string}>) {
      const {fieldId, id} = action.payload
      state.forEach((block) => {
        block.fields.filter(field => {
          field.id !== fieldId
        })
      }
      )
    },
    addBlockFiled(state, action: PayloadAction<{ index: number, field: Filed}>) {
      state[action.payload.index].fields.push(action.payload.field)
    },
  },
});

export const { addBlock, addBlockFiled, removeBlock, removeBlockFiled, updateBlock } = blockSlice.actions;

export default blockSlice.reducer;
