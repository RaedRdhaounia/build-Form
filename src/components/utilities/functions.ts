import { FindByIndexT } from "@/constants/types/types ";

// create random id
export const newId =() =>{return `${(Math.random() *1000000 )}`}

// search item by id
export function findIndexById(_arr:FindByIndexT , _id: string) {
  return _arr.findIndex(obj => obj.id === _id);
}

// convert class name type ( from array to single str)
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// filed list 
export const  fileds = [ { name: 'Text Filed' }, { name: 'Radio Button' }, { name: 'Select Input' }, { name: 'CheckBox'     } ]
