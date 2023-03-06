import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formId: string;
  formName: string;
  blockOrder: string[];
}
const initForm = {  formId: "",
formName: "",
blockOrder: []
}
const initialState: FormState = initForm;

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormId(state, action: PayloadAction<string>) {
      state.formId = action.payload;
    },
    setFormName(state, action: PayloadAction<string>) {
      state.formName = action.payload;
    },
    addBlock(state, action: PayloadAction<string>) {
      state.blockOrder.push(action.payload);
    },
    removeBlock(state, action: PayloadAction<string>) {
      const index = state.blockOrder.indexOf(action.payload);
      if (index !== -1) {
        state.blockOrder.splice(index, 1);
      }
    },
  },
});

export const { setFormId, setFormName, addBlock, removeBlock } = formSlice.actions;

export default formSlice.reducer;
