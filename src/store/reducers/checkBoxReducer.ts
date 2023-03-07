import { BoxReducer, CheckBoxState } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CheckBoxState[] = []

const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState,
  reducers: {
    addCheckBox: (state, action: PayloadAction<CheckBoxState>) => {
      state.push(action.payload);
    },
    updateCheckBox: (state, action: PayloadAction<{index:string, newfield: CheckBoxState}>) => {
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
    removeCheckBox: (state, action: PayloadAction<string>) => {
      const blocks =  state.filter(block => block.id !== action.payload)
      return [...blocks]
    },
    removeCheckBoxByBlock: (state, action: PayloadAction<BoxReducer>) => {
      function isIdInArray(arr: any[], idToCheck:string) {
        return arr.some(obj => obj.id === idToCheck);
      }
      const blocks =  state.filter(block => !isIdInArray(action.payload.fields, block.id))
      return [...blocks]
    },
  },
});

export const { addCheckBox, removeCheckBox, updateCheckBox, removeCheckBoxByBlock } = checkBoxSlice.actions;

export default checkBoxSlice.reducer;
