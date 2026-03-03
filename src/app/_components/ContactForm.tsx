"use client"
import React, { useActionState, useEffect } from 'react'
import { ContactType } from '../_types/contact';
import { useRouter } from 'next/navigation';


type ContactFormProps = {
  
    action:(prevState:any, formData:FormData)=> Promise<any>;
    contact?:ContactType
} 

function ContactForm({action, contact}:ContactFormProps) {
  const router = useRouter();
  const [state, formAction] = useActionState(action, null)

  useEffect(()=>{
    if(state?.success){
      router.push("/contact")
    }
  },[state, router])

  return (
    <div>
      
      <form  action={formAction} className="space-x-4">
        <input type="hidden" name="id" value={contact?.id} />
                  <div>
                      <label htmlFor="name" className="mt-5 block">Name</label>
                      <input type="text" name="name" defaultValue={contact?.name || ""} placeholder="" className="pl-3 mt-1 block rounded-md border-gray-600 shadow-sm h-10 w-100" required />
                       <label htmlFor="email" className="mt-5 block">Email</label>
                      <input type="email" name="email" defaultValue={contact?.email} placeholder="" className="pl-3 mt-1 block rounded-md border-gray-600 shadow-sm h-10 w-100" required />
                     
                     {
                      state?.error && (
                        <div className='text-red-600'>{state.error}</div>
                      )
                     }
                      <button type="submit" className="mt-4 block rounded-md bg-blue-500 text-white shadow-sm h-10 w-100">Submit</button>
                  </div>
              </form>

    </div>
  )
}

export default ContactForm