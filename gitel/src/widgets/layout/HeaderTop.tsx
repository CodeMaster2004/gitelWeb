import DesktopMenu from '@/widgets/layout/DesktopMenu';
import styles from './HeaderTop.module.css';

export default function HeaderTop() {
  return (
    <header className={styles.headerTop}>
      <div className={styles.logo}>
        <img src="/logo-gitel.svg" alt="Gitel Logo" height={32} width={32} style={{display: 'inline-block', verticalAlign: 'middle'}} />
        <span>Gitel</span>
      </div>
      <DesktopMenu />
    </header>
  );
}
