import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FlameDefs } from './components/Icons.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import History from './pages/History.jsx';
import Engagements from './pages/Engagements.jsx';
import Safety from './pages/Safety.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Network from './pages/Network.jsx';
import Contact from './pages/Contact.jsx';
import Mascot from './components/Mascot.jsx';

// Jump to the top of the page on every route change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <FlameDefs />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/histoire" element={<History />} />
        <Route path="/nos-engagements" element={<Engagements />} />
        <Route path="/securite" element={<Safety />} />
        <Route path="/produit/:slug" element={<ProductPage />} />
        <Route path="/reseau" element={<Network />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
      <Mascot />
    </>
  );
}
