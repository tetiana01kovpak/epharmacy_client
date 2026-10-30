import { Outlet } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import styles from './AuthLayout.module.css';
import whiteRoundPill from '../../assets/white-round-pill.svg';
import authElements from '../../assets/auth-elements.svg';

export function AuthLayout() {
  return (
    <main className={styles.page}>
      <div className={styles.brandPane}>
        <Logo className={styles.logo} />
        <h1 className={styles.headline}>
          Your medication, delivered Say goodbye to all <span className={styles.accent}>your healthcare</span> worries with us
        </h1>
        <div className={styles.decoration} aria-hidden="true">
          <img src={whiteRoundPill} alt="" />
        </div>
      </div>

      <div className={styles.formPane}>
        <Outlet />
      </div>
      <img className={styles.elements} src={authElements} alt="" aria-hidden="true" />
    </main>
  );
}
