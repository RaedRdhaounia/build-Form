import { CheckBoxState, RadioButtonState } from "./types/interfaces"
import { BlockP } from "./types/types"

export const radiobottonInfo :RadioButtonState  = {
  id: "id", 
  label: "radio botton label", 
  description: "description for redio botton", 
  options: ["option1", "option2", "option3"], 
  name: ""
}
export const checkBoxInfo :CheckBoxState = { id:"id", label: "checkbox label" , description:"description for checkbox" , value:false }
export const textInputInfo = { id:"id", label: "input text label"  , name : " text input name"                 ,                                            }
export const selectInputInfo = { id:"id", label: "radio botton label"                                            , options: ["option1", "option2", "option3"] }
export const blockInfo1 :BlockP = { id:"id", label: "block label 1", description:"description for block 1 as an example", fields:[ {type:"text" , id:"id"}, {type:"select"  , id:"id"} ]}
export const blockInfo2 :BlockP = { id:"id", label: "block label 2", description:"description for block 2 as an example", fields:[ {type:"radio", id:"id"}, {type:"checkbox", id:"id"} ]}
export const FormInfo  = { formName:"form name", blocks: [blockInfo1, blockInfo2] }