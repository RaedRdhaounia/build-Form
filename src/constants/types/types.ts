import { CheckBoxState, FieldType, InputFieldState, SelectInputState } from "./interfaces";

// ---- props types 

export type DependencyP = {
  title : string;
  description : string;
  Icon : React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
    titleId?: string | undefined;
  }>
}

export type ListValuesP = {
  key: number
  option:  { value: string; label: string},
  handleRemoveLabel: () => void,
  handleAddLabel : (_value: string) => void,
  handleUpdateLabel: (_value: string, _newLabel: string) => void
}

export type useStateP     = { func?: () => void }
export type openStatusP   = { open: boolean, setOpen: (value: boolean) => void }
export type inputChangesP = { value:string, func: (value:string) => void }
export type ConvertTypeP  = { type: FieldType, id: string }
export type selectItemdP  = { type:FieldType, id:string, setOpen:(open:boolean)=>void }
export type selectFieldP  = {handleActive:(_active:FieldType) => void }
export type FormP         = { formName: string, blocks : BlockP[] }
export type BlockP        = { label: string, description:string, id:string, fields: {type:FieldType, id:string}[] }

// ---- enum type
export type FindByIndexT =  InputFieldState[] | SelectInputState[] | CheckBoxState[]