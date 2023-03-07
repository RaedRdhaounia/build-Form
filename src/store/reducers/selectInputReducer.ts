import { BoxReducer, SelectInputState } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SelectInputState[] = []

const selectInputSlice = createSlice({
  name: 'selectInput',
  initialState,
  reducers: {
    addSelectInput: (state, action: PayloadAction<SelectInputState>) => {
      state.push(action.payload);
    },
    updateSelectInput: (state, action: PayloadAction<{index:string, newfield: SelectInputState}>) => {
      const {index, newfield} = action.payload
      function changeDesc(_id:string ) {
        for (var i in state) {
          if (state[i].id === _id) {
            state[i] = newfield
             break; 
          }
        }
     }
     changeDesc(index)
    },
    removeSelectInput: (state, action: PayloadAction<string>) => {
      const blocks =  state.filter(block => block.id !== action.payload)
      return [...blocks]
    },
    removeSelectInputByBlock: (state, action: PayloadAction<BoxReducer>) => {
      function isIdInArray(arr: any[], idToCheck:string) {
        return arr.some(obj => obj.id === idToCheck);
      }
      const blocks =  state.filter(block => !isIdInArray(action.payload.fields, block.id))
      return [...blocks]
    },
  },
});

export const { addSelectInput, removeSelectInput, removeSelectInputByBlock, updateSelectInput } = selectInputSlice.actions;

export default selectInputSlice.reducer;
