import { BoxReducer, InputFieldState } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InputFieldState[] = [];

const inputFieldSlice = createSlice({
  name: 'inputField',
  initialState,
  reducers: {
    addInputText: (state, action: PayloadAction<InputFieldState>) => {
      state.push(action.payload);
    },
    updateInputText: (state, action: PayloadAction<{index:string, newfield: InputFieldState}>) => {
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
    removeInputText:(state, action: PayloadAction<string>) => {
      const blocks =  state.filter(block => block.id !== action.payload)
      return [...blocks]
    },
    removeInputTextByBlock: (state, action: PayloadAction<BoxReducer>) => {
      function isIdInArray(arr: any[], idToCheck:string) {
        return arr.some(obj => obj.id === idToCheck);
      }
      const blocks =  state.filter(block => !isIdInArray(action.payload.fields, block.id))
      return [...blocks]
    },
  },
});

export const { addInputText, removeInputText, updateInputText, removeInputTextByBlock } = inputFieldSlice.actions;

export default inputFieldSlice.reducer;
