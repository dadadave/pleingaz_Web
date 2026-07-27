import { useEffect } from 'react';

// Scroll-reveal: add `.in` to `.reveal` elements as they enter the viewport.
// `?static` reveals everything at once (used for full-page screenshots).
// Re-runs whenever `key` changes (e.g. on route change) so a freshly mounted
// page's elements get observed.
export function useReveal(key) {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal:not(.in)');
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
  }, [key]);
}
