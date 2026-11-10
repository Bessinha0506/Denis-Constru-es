import { useEffect } from 'react';

/**
 * Efeitos que acompanham a rolagem e o mouse, para a página inteira:
 * - --progresso no <html> (0 a 1), usado pela barra do cabeçalho
 * - [data-paralaxe="0.1"]: o elemento se desloca mais devagar que a rolagem
 * - [data-inclinar]: o card inclina em 3D seguindo o mouse
 */
export default function useEfeitos() {
  useEffect(() => {
    const raiz = document.documentElement;
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pendente = false;

    const atualizar = () => {
      pendente = false;
      const max = raiz.scrollHeight - window.innerHeight;
      raiz.style.setProperty('--progresso', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
      if (reduzir) return;

      const alturaTela = window.innerHeight;
      document.querySelectorAll('[data-paralaxe]').forEach((el) => {
        const base = el.closest('section') || el.parentElement;
        const r = base.getBoundingClientRect();
        if (r.bottom < -100 || r.top > alturaTela + 100) return;
        const distancia = r.top + r.height / 2 - alturaTela / 2;
        const limite = Math.max(40, r.height * 0.08);
        const desloca = Math.max(-limite, Math.min(limite, -distancia * parseFloat(el.dataset.paralaxe)));
        el.style.translate = `0 ${desloca.toFixed(1)}px`;
      });
    };

    const aoRolar = () => {
      if (!pendente) {
        pendente = true;
        requestAnimationFrame(atualizar);
      }
    };

    atualizar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);

    // Inclinação 3D só com mouse de verdade
    const podeInclinar = !reduzir && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let atual = null;
    const soltar = (el) => {
      el.classList.remove('inclinando');
      el.style.removeProperty('--rx');
      el.style.removeProperty('--ry');
    };
    const mover = (e) => {
      const el = e.target instanceof Element ? e.target.closest('[data-inclinar]') : null;
      if (atual && atual !== el) soltar(atual);
      atual = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.classList.add('inclinando');
      el.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-y * 9).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
    };
    const sair = () => {
      if (atual) soltar(atual);
      atual = null;
    };
    if (podeInclinar) {
      document.addEventListener('pointermove', mover, { passive: true });
      raiz.addEventListener('mouseleave', sair);
    }

    return () => {
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRolar);
      document.removeEventListener('pointermove', mover);
      raiz.removeEventListener('mouseleave', sair);
    };
  }, []);
}
