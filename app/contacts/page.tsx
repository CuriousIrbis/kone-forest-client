import ContactsForm from "@/components/layout/contacts/form";
import ContactsInfo from "@/components/layout/contacts/info";

export default function Contacts(){
    return (
        <main className="p-30 flex flex-row justify-between">
            <ContactsInfo />
            <ContactsForm />
        </main>
    )
}