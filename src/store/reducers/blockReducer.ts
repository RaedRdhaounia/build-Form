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
    removeBlockFiled(state, action: PayloadAction<string>) {
      let new_state: BoxReducer[] = [];
      function filt(){
        for (let index = 0; index < state.length; index++) {
          const {description, id, label} = state[index]
          const element = state[index].fields.filter(field => field.id !== action.payload)
          new_state.push({fields : element, description, id, label})
          console.log("newState", new_state)
        }
      }
      filt()
        return new_state;
    },
    addBlockFiled(state, action: PayloadAction<{ index: string, field: Filed}>) {
      const {field, index} = action.payload
      function changeDesc(_id:string ) {
        for (var i in state) {
          if (state[i].id === _id) {
            state[i].fields.push(field)
             break; 
          }
        }
      }
      changeDesc(index)
    },
  },
});

export const { blockAdd, addBlockFiled, blockRemove, removeBlockFiled, blockUpdate } = blockSlice.actions;

export default blockSlice.reducer;
