import Block from "@/components/generators/Block ";
import Save from "@/components/others/Save ";
import {FormInfo } from "@/constants/defaultValues ";

export default function index() {

  return (
    <>
      <div className="text-center m-16">
      {FormInfo.formName}
      </div>
      {FormInfo.blocks && FormInfo.blocks.map((block, index) => {
        return ( <Block {...block} key={index} />)
      })}
      <Save/>
    </>
  )
}
