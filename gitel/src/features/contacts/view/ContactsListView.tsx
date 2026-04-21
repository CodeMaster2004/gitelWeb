"use client";


import ContactsList from "@/features/contacts/components/ContactsList";
import { useContactActions, useContacts } from "@/features/contacts/hook";
import layoutStyles from "@/shared/styles/Layout.module.css";
import Button from "@/shared/ui/Button";
import { Contact } from "@/types/interfaces";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


type Props = {
    initialContact?: Contact;
}

export default function ContactsListView({initialContact}: Props){
    const router = useRouter();
    const {contacts} = useContacts({
        initialData: initialContact,
    });
const fetchData = async () => {
  // Implement fetch logic here if needed
  // For now, just a placeholder to avoid errors
  // Example: await someFetchFunction();
};
const {
    deleting,
    removeContact,
} = useContactActions({
    // onSuccess: refetch, // Remove or replace with a valid function if needed
});

    const handleCreate = () => {
        router.push("/contacts/create");
    };

    const handleEdit = (contact: Contact) => {
        router.push(`/contacts/${contact.contact_id}/edit`);
    };

useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return(
            <div className={layoutStyles.pageContainer}>
                <div className={layoutStyles.header}>
                    <h1>Lista de Contactos</h1>
                    <Button variant="animated" onClick={handleCreate}>
                        Nuevo
                    </Button>
                </div>

                <ContactsList
                    contact={contacts}
                    onDelete={removeContact}
                    onEdit={handleEdit}
                    deletingId={deleting}
                   
                />
            </div>
    )
}