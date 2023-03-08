// component imports
import { InputText, CheckBox, RadioBotton, SelectInput } from "../generators";
// types imports
import { ConvertTypeP } from "@/constants/types/types ";
// default values imports
import { radiobottonInfo, checkBoxInfo, selectInputInfo, textInputInfo } from "@/constants/defaultValues ";

 /*
/  / ----- Component ConvertType switcher  created to convert Block stored data ({type, id}) to the write component path
 */

export default function ConvertType(props: ConvertTypeP) {
  const {id, type} = props
  switch (type) {
    case "text"    :
      return <InputText   {...textInputInfo  } id={id}/>;
    case "checkbox":
      return <CheckBox  {...checkBoxInfo} id={id}/>;
    case "radio"   :
      return <RadioBotton {...radiobottonInfo} id={id}/>;
    case "select"  :
      return <SelectInput {...selectInputInfo} id={id}/>;
    default:
      return <div/>;
  }
}