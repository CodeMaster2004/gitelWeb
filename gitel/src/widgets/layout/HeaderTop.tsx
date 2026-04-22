import DesktopMenu from '@/widgets/layout/DesktopMenu';
import styles from './HeaderTop.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function HeaderTop() {
  return (
    <>
      {/* Barra superior */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <a href="#" className={styles.topLink}>HOGAR</a>
          <a href="#" className={styles.topLink}>NEGOCIOS</a>
          <a href="#" className={styles.topLink}>EMPRESAS</a>
        </div>
        <div className={styles.topCenter}>
          <a href="#" className={styles.topLink}>Preguntas frecuentes</a>
          <a href="#" className={styles.topLink}>Presentar un reclamo</a>
          <a href="#" className={styles.topLink}>Blog</a>
        </div>
        <div className={styles.topRight}>
          <a href="#" className={styles.socialIcon} title="Facebook"><FaFacebookF size={20} /></a>
          <a href="#" className={styles.socialIcon} title="X"><FaTwitter size={20} /></a>
          <a href="#" className={styles.socialIcon} title="Instagram"><FaInstagram size={20} /></a>
          <a href="#" className={styles.socialIcon} title="WhatsApp"><FaWhatsapp size={20} /></a>
        </div>
      </div>
      {/* Header principal */}
      <header className={styles.headerTop}>
        <div className={styles.logo}>
          <img src="https://gitel.pe/wp-content/uploads/2025/08/logo-gitel.jpg" alt="Gitel Logo" height={52} width={172} style={{display: 'inline-block', verticalAlign: 'middle'}} />
        </div>
        <DesktopMenu />
      </header>
    </>
  );
}
