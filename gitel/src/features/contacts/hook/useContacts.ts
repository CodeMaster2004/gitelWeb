import { contactsService } from "@/features/contacts/service/contacts";
import { Contact } from "@/types/interfaces";
import { useEffect, useState } from "react";

export function useContacts(p0: { initialData: Contact | undefined; }) {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        contactsService.getAll()
            .then(setContacts)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { contacts, loading, error };
}