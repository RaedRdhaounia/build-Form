import { CheckBoxState, InputFieldState, RadioButtonState } from "./types/interfaces"
import { BlockP, FormP } from "./types/types"

export const radiobottonInfo :RadioButtonState  = { id: "id",  label: "radio botton label",  description: "description for redio botton",  options: ["option1", "option2", "option3"],  name: ""}
export const checkBoxInfo :CheckBoxState    = { id:"id", label: "checkbox label" , description:"description for checkbox" , value:false }
export const textInputInfo :InputFieldState = { id:"id", label: "input text label"  , value : " text input name"                 ,                                            }
export const selectInputInfo = { id:"id", label: "select Input label" , options: ["option1", "option2", "option3"] }
export const blockInfo     :BlockP = { id:"id", label: "block label", description:"description for block as an example", fields:[ {type:"radio", id:"id"}, {type:"checkbox", id:"id"}, {type:"text" , id:"id"}, {type:"select"  , id:"id"} ]}
export const FormInfo      :FormP = { formName:"form name", blocks: [blockInfo] }