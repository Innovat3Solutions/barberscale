import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <main style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
