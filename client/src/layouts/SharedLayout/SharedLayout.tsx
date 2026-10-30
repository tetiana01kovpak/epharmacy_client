import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { AuthRequiredModal } from '../../components/AuthRequiredModal/AuthRequiredModal';

export function SharedLayout() {
  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <AuthRequiredModal />
    </div>
  );
}
