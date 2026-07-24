import { useEffect } from 'react';
import { FlameDefs } from './components/Icons.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Supplier from './components/Supplier.jsx';
import Portfolio from './components/Portfolio.jsx';
import Figures from './components/Figures.jsx';
import News from './components/News.jsx';
import Approaches from './components/Approaches.jsx';
import Footer from './components/Footer.jsx';

// Scroll-reveal: add `.in` to `.reveal` elements as they enter the viewport.
// `?static` reveals everything at once (used for full-page screenshots).
function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const showAll = new URLSearchParams(location.search).has('static');
    if (showAll || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <FlameDefs />
      <Header />
      <main>
        <Hero />
        <Supplier />
        <Portfolio />
        <Figures />
        <News />
        <Approaches />
      </main>
      <Footer />
    </>
  );
}
