import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';

export function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <RegisterForm submitLabel="Register" onSuccess={() => navigate('/medicine', { replace: true })} />
      <p className={styles.switchLink}>Already have an account?</p>
    </div>
  );
}
