import Link from "next/link";
import { getSession } from "../_lib/session"
import { getContacts } from "../api/contact";
import ContactLists from "../_components/ContactLists";

const  ContactPage = async()=> {
  const user = await getSession();
  if(!user){
    return (
      <div>
          Please{" "} 
          <a href="/login" className="text-blue-500">Login</a>
          {" "} to view contacts
      </div>
    );
  }
      const contacts = await getContacts(user?.id)
       console.log("Contact list : ", contacts)
      if(!contacts || contacts.length === 0){
       
        return (
           <div>
          Please{" "} 
          <a href="/contact/new" className="text-blue-500">Add New</a>
          {" "} to your contacts list
      </div>
        )
      }
  return (
    
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2>All Lists</h2>
        <a href="/contact/new" className="text-white rounded p-3 bg-blue-500">Add Contact</a>
      </div>
      <ContactLists contacts={contacts} />
    </div>
  )
} 

export default ContactPage