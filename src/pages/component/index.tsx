import { CheckBox, InputText, RadioBotton, SelectInput } from "@/components/generators ";
import Block from "@/components/generators/Block ";
import Save from "@/components/others/Save ";
import { BlockDescription, Divider } from "@/components/utilities ";
import { blockInfo, checkBoxInfo, radiobottonInfo, selectInputInfo, textInputInfo } from "@/constants/defaultValues ";

export default function index() {

  return (
    <>
      <div className="text-center m-16">
        Form Name
      </div>
      <Block {...blockInfo} />
      <Block {...blockInfo} />
      <Save/>
    </>
  )
}
