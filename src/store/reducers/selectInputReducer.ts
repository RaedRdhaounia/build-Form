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
    addnewLabel: (state, action: PayloadAction<{id:string, valueId:string, labelId:string}>) => {
      const {id, labelId, valueId} = action.payload
      function changeDesc( ) {
        for (let index = 0; index < state.length; index++) {
          if (state[index].id === id)
            state[index].options.push({label:labelId , value:valueId})
        }
     }
     changeDesc()
    },
    addnewEmptyLabel: (state, action: PayloadAction<{id:string, valueId:string}>) => {
      const {id, valueId} = action.payload
      function changeDesc( ) {
        for (let index = 0; index < state.length; index++) {
          if (state[index].id === id)
            state[index].options.push({label:"test" , value:valueId})
        }
     }
     
     changeDesc()
    },
    updateSelectInputLabel: (state, action: PayloadAction<{id:string, labelvalue:string, newLabel: string}>) => {
      const {id, labelvalue, newLabel} = action.payload

      function changeDesc(_id:string, labelvalue:string, newLabel:string ) {
        for (var i in state) {
          if (state[i].id === _id) {
            for (var j in state[i].options) {
              if(state[i].options[j].value === labelvalue) {
                state[i].options[j].label = newLabel
                break;
              }
            }
          }
        }
      }
     changeDesc(id, labelvalue, newLabel)
    },
    removeSelectInputLabel: (state, action: PayloadAction<{id:string, index:number}>)=> {
      const {id, index} = action.payload
      state.map(selectInput =>{ return  selectInput.options.splice(index,1)})
    },
  },
});

export const { addnewEmptyLabel, addnewLabel, addSelectInput, removeSelectInput, removeSelectInputByBlock, removeSelectInputLabel, updateSelectInputLabel, updateSelectInput } = selectInputSlice.actions;

export default selectInputSlice.reducer;
