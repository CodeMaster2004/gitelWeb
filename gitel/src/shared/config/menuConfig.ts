export interface MenuItem {
    id: string;
    label: string;
    href?: string;
    children?: MenuItem[];
}

export const menuConfig: MenuItem[] = [
    {id: "home", label: "Inicio", href: "/"},
    {id: "plans", label: "Planes", href: "/plans"},
    {id: "Covertura", label: "Covertura", href: "/series"},
    {id: "Contact", label: "Contacto", href: "/contact"},
    {id: "MiGitel", label: "Mi Gitel", href: "/settings"},

];