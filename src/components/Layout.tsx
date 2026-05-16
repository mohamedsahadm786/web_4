import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './Header';
import Footer from './Footer';
import BottomNav from './BottomNav';
import WhatsappButton from './WhatsappButton';
import CookieBanner from './CookieBanner';
import CartDrawer from './CartDrawer';
import Cursor from './Cursor';
import ScrollManager from './ScrollManager';
import { CartProvider } from '../context/CartContext';
import { useLenis } from '../hooks/useLenis';

export default function Layout() {
  const { pathname } = useLocation();
  useLenis();

  return (
    <CartProvider>
      <ScrollManager />
      <Cursor />
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <BottomNav />
      <WhatsappButton />
      <CartDrawer />
      <CookieBanner />
    </CartProvider>
  );
}
