import AddMore from "@/components/others/AddMore ";
import { Panel } from "@/components/view ";
import { useAppSelector } from "@/store/store ";
import { useState } from "react";


export default function index() {
    const FormData = useAppSelector(state => state.form)
    const [open, setOpen] = useState<boolean>(false)
  return (
  <>
    <AddMore open={open} setOpen={setOpen} />
    <div className="text-center m-16">
      {FormData.formName}
    </div>
    <Panel open={open} setOpen={setOpen} />
  </>

  )
}