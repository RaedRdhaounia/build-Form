import { BoxReducer, Filed } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BoxReducer[] = [];

const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {
    blockAdd(state, action: PayloadAction<BoxReducer>) {
      state.push(action.payload);
    },
    blockRemove(state, action: PayloadAction<string>) {
      const blocks =  state.filter(block => block.id !== action.payload)
      return [...blocks]
    },
    blockUpdate(state, action: PayloadAction<BoxReducer>) {
      const {id} = action.payload
      function changeDesc(_id:string ) {
        for (var i in state) {
          if (state[i].id === _id) {
            state[i] = action.payload
             break; 
          }
        }
     }
     changeDesc(id)
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

export const { blockAdd, addBlockFiled, blockRemove, removeBlockFiled, blockUpdate } = blockSlice.actions;

export default blockSlice.reducer;
