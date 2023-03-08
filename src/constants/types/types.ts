import { CheckBoxState, FieldType, InputFieldState, SelectInputState } from "./interfaces";

export type DependencyP = {
    title : string;
    description : string;
    Icon : React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
  }>
  }

export type FormP  = { formName: string, blocks : BlockP[] }
export type BlockP = {label: string, description:string, id:string, fields: {type:FieldType, id:string}[]}

export type FindByIndexT =  InputFieldState[] | SelectInputState[] | CheckBoxState[]