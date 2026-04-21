import { useState } from "react";
import  layoutStyles  from "@/shared/styles/Layout.module.css";
import  tableStyles  from "@/shared/styles/Table.module.css";
import { Contact } from "@/types/interfaces";
import ConfirmDialog from "@/shared/ui/ConfirmDialog";
import MoreMenu from "@/shared/ui/MoreMenu";

interface Props{
    contact: Contact[];
    onDelete: (id: number) => void;
    onEdit: (contact: Contact) => void;
    deletingId?: number | null;
    loading?: boolean;
}

export default function ContactsList ({contact, onDelete, onEdit, deletingId, loading}: Props){
    const [confirmDialog, setConfirmDialog] = useState<{isOpen: boolean; id: number; contactType: string}>({

        isOpen: false,
        id: 0,
        contactType: "",
    });


    const handleDeleteClick = (id: number, contactType: string) => {
        setConfirmDialog({isOpen: true, id, contactType})
    };

    const handleConfirmDelete = () => {
        onDelete(confirmDialog.id);
        setConfirmDialog({isOpen: false, id: 0, contactType: ""});
    };

    const handleCancelDelete = () => {
        setConfirmDialog({isOpen: false, id: 0, contactType: ""})
    };

    return(
        <div className={layoutStyles.section}>
            <ConfirmDialog
                isOpen={confirmDialog.isOpen}
                title="confirmar Eliminacion"
                message={`¿Estás seguro de que deseas eliminar el contacto "${confirmDialog.contactType}"? Esta accion no se puede deshacer.`}
                confirmText="Eliminar"
                cancelText="Cancelar"
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
                variant="danger"
            
            />

            <h2>Lista de Contactos</h2>

            {contact.length === 0 ? (
                <p>{loading ? "Buscando..." : "No hay contactos registrados con ese término"}</p>
            ) : (
                <div className={`${tableStyles.tableWrap} ${loading ? tableStyles.loading : ""}`}>
                    <table className={tableStyles.table}>
                        <thead>
                            <tr className={tableStyles.rowHover}>
                                <th className={`${tableStyles.headCell} ${tableStyles.idColumn}`}>ID</th>
                                <th className={tableStyles.headCell}>Nombre</th>
                                <th className={tableStyles.headCell}>Email</th>
                                <th className={tableStyles.headCell}>Telefono</th>
                                <th className={tableStyles.headCell}>Mensaje</th>
                                <th className={tableStyles.headCell}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contact.map((contact) => (
                                <tr key={contact.contact_id} className={tableStyles.rowHover}>
                                    <td className={`${tableStyles.cell} ${tableStyles.idColumn}`}>{contact.contact_id}</td>
                                    <td className={tableStyles.cell}>{contact.name}</td>
                                    <td className={tableStyles.cell}>{contact.email}</td>
                                    <td className={tableStyles.cell}>{contact.phone}</td>
                                    <td className={tableStyles.cell}>{contact.message}</td>
                                    <td className={`${tableStyles.cell} ${tableStyles.actions}`}>
                                        <MoreMenu
                                            items={[
                                                {
                                                    label: "Editar",
                                                    onClick: () => onEdit(contact),
                                                },
                                                {
                                                    label:
                                                        deletingId === contact.contact_id
                                                            ? "Eliminando..."
                                                            : "Eliminar",
                                                    onClick: () => handleDeleteClick(contact.contact_id, contact.name),
                                                    variant: "danger",
                                                },
                                            ]}
                                        />
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>
            )}

        </div>
    )
}