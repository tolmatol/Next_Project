"use client"
import { FaTrash } from "react-icons/fa"
import { ContactType } from "../_types/contact"
import { useActionState } from "react";

type DeleteButtonProps = {
    action:(prevState:any, formData:FormData)=> Promise<any>;
    contact?:ContactType
}


function DeleteButton({action, contact}:DeleteButtonProps) {
    const [state, formAction] = useActionState(action, null)
  return (
    <div className="text-red-600 cursor-pointer">
       <form action={formAction} method="post" className="hover:text-white">
        <input type="hidden" name="id" value={contact?.id} />
       <button type="submit" className="text-red-600 flex items-center pt-1 pb-1 pl-2 pr-2 border rounded-sm hover:bg-red-200 hover:text-red cursor-pointer"
       onClick={(e)=>{if(!confirm("Are you sure want to delete this contact?")){
        e.preventDefault();
       }}}
       >
        <FaTrash className="text-red-500 text-sm pr-1"  /> <small>Delete</small>
       </button>
        
        </form> 
    </div>
  )
}

export default DeleteButton