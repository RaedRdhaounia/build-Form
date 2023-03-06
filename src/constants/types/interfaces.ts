 /* 
/ / ---- store interfaces
*/

// ----- form state interface
export interface FormState {
  formId  : string;
  blocks  : Block[];
  field  ?: FieldState;
  formName: string
}

export interface Form {
  id: string;
  name: string;
  blockOrder: string[];
}

// ----- block state interface
export interface BlockState {
  id: string;
  name: string;
  fields: string[];
}
// -- singleblock type 
export interface Block {
  id: string;
  name: string;
  fields: Field[];
}


// ----- filed state interface
// -- singleFiled type ( global fileds structures)
type FieldType = 'text' | 'checkbox' | 'radio' | 'select';

export interface Field {
  id: string;
  type: string;
  name: string;
  styles: object;
  value: string;
}

export interface FieldState {
  fields: { [key: string]: Field };
}

export interface AddFieldPayload {
  blockId: string;
  fieldType: FieldType;
  fieldName: string;
}
// -- checkBox
export interface CheckBoxState {
  label: string;
  value: boolean;
}
// -- Input
export interface InputFieldState {
  id: string;
  type: string;
  name: string;
  styles: {
    [key: string]: string;
  };
  value: string;
}
// -- RadioBotton
export interface RadioButtonState {
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
}
// -- Select
export interface SelectInputState {
    id: string;
    name: string;
    options: {
      value: string;
      label: string;
    }[];
    styles: {
      [key: string]: string;
    };
    value: string;
  }