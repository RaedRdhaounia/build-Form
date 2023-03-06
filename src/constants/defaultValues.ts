import { RadioButtonState } from "./types/interfaces"
import { BlockP } from "./types/types"

export const radiobottonInfo :RadioButtonState  = {
  id: "id", 
  label: "radio botton label", 
  description: "description for redio botton", 
  options: ["option1", "option2", "option3"], 
  name: ""
}
export const checkBoxInfo       = { id:"id", label: "checkbox label"    , description:"description for checkbox"    ,                                            }
export const textInputInfo      = { id:"id", label: "input text label"  , name : " text input name"                 ,                                            }
export const selectInputInfo    = { id:"id", label: "radio botton label"                                            , options: ["option1", "option2", "option3"] }
export const blockInfo       :BlockP = { id:"id", label: "block label"       , description:"description for block"       , fields:  [{type:"text", id:"id"}, {type:"text", id:"id"}, {type:"radio", id:"id"},{type:"checkbox", id:"id"}, {type:"radio", id:"id"}]          }
export const FormInfo   = { formName:"form name", blocks: [blockInfo, blockInfo] }