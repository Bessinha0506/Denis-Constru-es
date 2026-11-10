import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const CHAVE = 'tema';

function temaInicial() {
  const atual = document.documentElement.dataset.tema;
  if (atual === 'escuro' || atual === 'claro') return atual;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
}

/** Alterna entre o modo claro e o escuro e lembra a escolha no navegador. */
export default function BotaoTema({ className = '' }) {
  const [tema, setTema] = useState(temaInicial);
  const escuro = tema === 'escuro';

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', escuro ? '#0F1813' : '#17251E');
  }, [tema, escuro]);

  const alternar = () => {
    const novo = escuro ? 'claro' : 'escuro';
    setTema(novo);
    try {
      localStorage.setItem(CHAVE, novo);
    } catch {
      /* navegador sem armazenamento: vale só nesta visita */
    }
  };

  return (
    <button
      type="button"
      className={`botao-tema ${className}`.trim()}
      onClick={alternar}
      aria-label={escuro ? 'Mudar para o modo claro' : 'Mudar para o modo escuro'}
      title={escuro ? 'Modo claro' : 'Modo escuro'}
    >
      {escuro ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
    </button>
  );
}
