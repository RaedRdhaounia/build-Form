import { FieldType } from "./interfaces";

export type DependencyP = {
    title : string;
    description : string;
    Icon : React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
  }>
  }
export type BlockP = {label: string, description:string, id:string, fields: {type:FieldType, id:string}[]}