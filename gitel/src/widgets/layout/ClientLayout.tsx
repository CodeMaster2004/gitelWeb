"use client";

import HeaderTop from "@/widgets/layout/HeaderTop";
import { useState } from "react";

interface ClientLayoutProps {
    children: React.ReactNode;
}

// Componente interno que usa useAuth
function LayoutContent({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  
    return (
        <>
        <HeaderTop /> 
        {/* <SidebarLeft isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /> */}
        <div>{children}</div>
        </>
    );
}

export default function ClientLayout({ children }: ClientLayoutProps) {

    return (
    
        <LayoutContent>{children}</LayoutContent>
            
    );
}