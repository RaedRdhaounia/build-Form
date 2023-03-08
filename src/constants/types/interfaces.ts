  // /*                               */  //
 /* /  /---- store interfaces --------/  */
// /*                               */  //

// ----- form state interface ----- //
export interface FormReducer {
  formName: string,
  blocks : string[]
}

export interface Form {
  id: string;
  name: string;
  blockOrder: string[];
}

// ----- block state interface ----- //
export interface Block {
  id: string;
  name: string;
  fields: Field[];
}
export interface BoxReducer {
  label: string,
  description: string,
  id: string,
  fields: Filed[]
}

// ----- filed state interface ----- //

// -- singleFiled type ( global fileds structures)
export type FieldType = 'text' | 'checkbox' | 'radio' | 'select';

// ---- Field element
export interface Filed {
  type: FieldType,
  id: string
}
// ---- filed stats
export interface Field {
  id: string;
  type: string;
  name: string;
  styles: object;
  value: string;
}
// -- Field element store
export interface FieldState {
  fields: { [key: string]: Field };
}

// -- Check Box
export interface CheckBoxState {
  label: string;
  value: boolean;
  id: string;
  description: string
}
// -- Input Filed
export interface InputFieldState {
  id: string;
  label: string;
  value: string;
}
// -- RadioBotton
export interface RadioButtonState {
  id: string;
  name: string;
  label: string;
  description: string;
  options: string[];
}
// -- Select Input
export interface SelectInputState {
    id: string;
    label: string;
    options: {
      value: string;
      label: string;
    }[];
  }
