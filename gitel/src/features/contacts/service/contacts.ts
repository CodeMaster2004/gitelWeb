import { apiFetcher } from "@/core/api/apiClient";
import type { Contact } from "@/types/interfaces";

export const contactsService = {
  getAll: (): Promise<Contact[]> => apiFetcher<Contact[]>("/contacts"),

  getById: (id: number): Promise<Contact> =>
    apiFetcher<Contact>(`/contacts/${id}`),

  create: (data: Contact): Promise<Contact> =>
    apiFetcher<Contact>("/contacts", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (id: number, data: Partial<Contact>): Promise<Contact> =>
    apiFetcher<Contact>(`/contacts/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number): Promise<{ message: string }> =>
    apiFetcher<{ message: string }>(`/contacts/${id}`, {
      method: "DELETE",
    }),
};