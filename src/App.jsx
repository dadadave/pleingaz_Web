import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FlameDefs } from './components/Icons.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import History from './pages/History.jsx';
import Engagements from './pages/Engagements.jsx';

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
      </Routes>
      <Footer />
    </>
  );
}
