// components/layout/DesktopMenu.tsx
"use client";

import { menuConfig } from '@/shared/config/menuConfig';
import styles from '@/shared/styles/Header.module.css';
import { useRef } from 'react';
import MenuTree from './MenuTree';
import { FaPhoneAlt } from 'react-icons/fa';

const DesktopMenu = () => {
    const menuRef = useRef<HTMLDivElement>(null);

    return (
        <nav className={styles.desktopMenuWrap}>
            <div ref={menuRef} className={styles.desktopMenuTrack}>
                <div className={styles.desktopMenu}>
                    <MenuTree
                        items={menuConfig}
                        renderSubMenu={(Children) => (
                            <div className={styles.desktopSubMenu}>{Children}</div>
                        )}
                    />
                </div>
            </div>
            <div className={styles.phoneBlock}>
                <span className={styles.phoneIcon}><FaPhoneAlt /></span>
                <span className={styles.phoneNumber}>01 7390793</span>
            </div>
        </nav>
    );
};

export default DesktopMenu;