import { FiEdit } from "react-icons/fi"
import { ContactType } from "../_types/contact"
import Link from "next/link"
import DeleteButton from "./DeleteButton"
import { deleteContactAction } from "../actions/contact"

const ContactLists=({contacts}:{contacts:ContactType[]})=> {
  return (
    <div className="space-y-4">
        {contacts.map((contact)=>
            <div key={contact.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold">{contact.name}</h2>
                        <p>{contact.email}</p>
                    </div>
                    <div className="flex items-center self-center gap-3">
                        <Link href={`/contact/edit/${contact.id}`} className="text-blue-600 flex items-center pt-1 pb-1 pl-2 pr-2 border rounded-sm hover:bg-blue-600 hover:text-white">
                            <FiEdit /> <small className="pl-2">Edit</small>
                        </Link> 
                        <DeleteButton action={deleteContactAction} contact={contact} />
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default ContactLists