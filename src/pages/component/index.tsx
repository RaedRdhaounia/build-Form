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
      <Divider/>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <BlockDescription title="Block1" discription="description block 1"/>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <InputText {...textInputInfo} />
                    <SelectInput {...selectInputInfo} />
                  </div>
                </div>
                <Save/>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Divider/>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <BlockDescription title="Block2" discription="description block 2"/>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <CheckBox {...checkBoxInfo} />
                  <RadioBotton {...radiobottonInfo} />
                </div>
                <Save/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
