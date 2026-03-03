import ContactForm from "@/app/_components/ContactForm"
import { updateContactAction } from "@/app/actions/contact"
import { getContactById } from "@/app/api/contact";
import { use } from "react";

const EditContactPage = async ({ params }: { params: { id: string } }) => {
  const contact = await getContactById(params.id);
  console.log("patel", contact);
  return (
     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl fontbold mb-6">Edit Contact</h1>
       <ContactForm action={updateContactAction} contact={contact} />
    </div>
  )
}

export default EditContactPage