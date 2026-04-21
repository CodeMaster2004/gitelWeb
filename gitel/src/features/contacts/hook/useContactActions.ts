"use client";

import { contactsService } from "@/features/contacts/service/contacts";
import { Contact } from "@/types/interfaces";
import { useCallback, useState } from "react";

type Options = {
    onSuccess?: (Result?: Contact) => void;
    onError?: (error: unknown) => void;
}

export function useContactActions(options?: Options) {
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<unknown | null>(null);
    const [deleting, setDeleting] = useState<number | null>(null);

    const addContact = useCallback(
        async (data: Contact) => {
            setSaving(true);
            setError(null);
            try {
                const created = await contactsService.create(data);
                options?.onSuccess?.(created);
                return created;
            }catch (err) {
                setError(err);
                options?.onError?.(err);
                throw err;
            }finally{
                setSaving(false);
            }
        },
        [options]
    );

    const editContact = useCallback(
        async (id: number, data: Partial<Contact>) => {
            setSaving(true);
            setError(null);
            try {
                const updated = await contactsService.update(id, data);
                options?.onSuccess?.(updated);
                return updated;
            }catch (err) {
                setError(err);
                options?.onError?.(err);
                throw err;
            }finally{
                setSaving(false);
            }
        
        },
        [options]
    );

    const removeContact = useCallback(
        async (id: number) => {
            setDeleting(id);
            setError(null);
            try {
                await contactsService.delete(id);
                options?.onSuccess?.();
            } catch (err) {
                setError(err);
                options?.onError?.(err);
            } finally {
                setDeleting(null);
            }
        },
        [options]

    );

    return {
        addContact,
        editContact,
        removeContact,
        saving,
        error,
        deleting,
    
    }

    

    
}