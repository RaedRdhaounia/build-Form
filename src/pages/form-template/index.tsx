
// -- store imports
import { useAppSelector } from "@/store/store ";
import * as Yup from "yup";
import {FormName,} from "@/components/others/ ";

// -- types imports
import { Block } from "@/components/error ";
import { FormEvent, useEffect, useState } from "react";
import { BoxReducer } from "@/constants/types/interfaces ";

 /*
/  / ----- Component BlockList is the unit block element of the Form at the application
 */

function BlockList(props : {block :BoxReducer, formik: any}) {
  const {block} = props

// ----- store selector reducer
  const blockInfo = useAppSelector(state => state.block)
  return ( blockInfo && <Block block={block}  /> )
}

 /*
/  / ----- Component index is main component of the page at the path /form-template to show the final product that the user edited
 */

export default function index() {
// ----- store selector reducer
  //const FormData = useAppSelector(state => state.form)
  const blocks = useAppSelector(state => state.block)
// ----- errors 

  return (
  <div>
    <FormName update={true} />
          <div>
            {blocks.map((block, index) => {
              return <BlockList  key={index} block={block} />
            })}
          </div>
          <div className="flex justify-center " >
            <button type="submit"  > check </button>
          </div>
  </div>

  )
}