import { useEffect, useRef, useState } from 'react';

/** Diz quando o elemento entra na tela pela primeira vez (e para de observar). */
export default function useVisivel({ limiar = 0.15, margem = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setVisivel(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: limiar, rootMargin: margem },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [limiar, margem]);

  return [ref, visivel];
}
