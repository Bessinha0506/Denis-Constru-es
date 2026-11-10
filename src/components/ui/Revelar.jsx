import { useEffect, useRef } from 'react';

/**
 * Envolve um bloco e o revela suavemente na primeira vez que entra na tela.
 * Uso: <Revelar atraso={120}>...</Revelar>
 */
export default function Revelar({ as: Tag = 'div', atraso = 0, className = '', style, children, ...resto }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visivel');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.classList.add('visivel');
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`revelar ${className}`.trim()} style={{ '--atraso': `${atraso}ms`, ...style }} {...resto}>
      {children}
    </Tag>
  );
}
