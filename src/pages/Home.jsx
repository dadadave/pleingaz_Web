import Hero from '../components/Hero.jsx';
import Supplier from '../components/Supplier.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Promo from '../components/Promo.jsx';
import Figures from '../components/Figures.jsx';
import News from '../components/News.jsx';
import Approaches from '../components/Approaches.jsx';
import { useReveal } from '../useReveal.js';

export default function Home() {
  useReveal('home');
  return (
    <main>
      <Hero />
      <Supplier />
      <Portfolio />
      <Promo />
      <Figures />
      <News />
      <Approaches />
    </main>
  );
}
