import { radiobottonInfo, checkBoxInfo, selectInputInfo, textInputInfo } from "@/constants/defaultValues ";
import { FieldType } from "@/constants/types/interfaces ";
import { InputText, CheckBox, RadioBotton, SelectInput } from "../generators";

export default function ConvertType(props: {type: FieldType, id: string}) {
  const {id, type} = props
  switch (type) {
    case "text"    :
      return <InputText   {...textInputInfo  } id={id}/>;
    case "checkbox":
      return <CheckBox    {...checkBoxInfo   } id={id}/>;
    case "radio"   :
      return <RadioBotton {...radiobottonInfo} id={id}/>;
    case "select"  :
      return <SelectInput {...selectInputInfo} id={id}/>;
    default:
      return <div/>;
  }
}