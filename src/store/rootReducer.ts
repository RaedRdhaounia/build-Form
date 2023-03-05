import { combineReducers } from '@reduxjs/toolkit';
import {blockSlice, checkBoxSlice, fieldSlice, formSlice, inputFiledSlice, radioBottonSlice, selectInputSlice} from './reducers';

const rootReducer = combineReducers({
  block      : blockSlice,
  checkbox   : checkBoxSlice,
  field      : fieldSlice,
  form       : formSlice,
  textField  : inputFiledSlice,
  radioButton: radioBottonSlice,
  selectInput: selectInputSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
