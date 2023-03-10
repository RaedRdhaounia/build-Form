import { CheckBoxState, InputFieldState, RadioButtonState, SelectInputState } from "./types/interfaces"
import { BlockP, FormP } from "./types/types"

export const selectInputInfo : SelectInputState = { id:"id", label: "select Input label" , options: [{label:"option1", value:"id1"}, {label:"option2", value:"id2"}, {label:"option3", value:"id3"}] }
export const radiobottonInfo : RadioButtonState = { id:"id", label: "radio botton label" , options: [{label:"option1", value:"id1"}, {label:"option2", value:"id2"}, {label:"option3", value:"id3"}], description: "description for redio botton"  }
export const checkBoxInfo    : CheckBoxState    = { id:"id", label: "checkbox label"     , description:"description for checkbox" , value:false }
export const textInputInfo   : InputFieldState  = { id:"id", label: "input text label"   , value : " text input name"                 ,                                            }
export const blockInfo       : BlockP           = { id:"id", label: "block label"        , description:"description for block as an example", fields:[ {type:"radio", id:"id"}, {type:"checkbox", id:"id"}, {type:"text" , id:"id"}, {type:"select"  , id:"id"} ]}
export const FormInfo        : FormP            = { formName:"form name", blocks: [blockInfo] }

// input types 
export function inputType(type: string){
    if (type.toLowerCase().includes("email")) {
      return "email";
    } else if (type.toLowerCase().includes("password")) {
      return 'password';
    } else if (type.toLowerCase().includes("url")) {
        return "url";
    } else {
      return "text"
    }
}