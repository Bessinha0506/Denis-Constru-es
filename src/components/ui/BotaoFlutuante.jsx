import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { linkWhatsApp } from '../../data/empresa';
import './BotaoFlutuante.css';

/** Botão de WhatsApp que aparece no canto depois que a pessoa passa do topo. */
export default function BotaoFlutuante() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const aoRolar = () => setMostrar(window.scrollY > 640);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <a
      className={`flutuante ${mostrar ? 'flutuante--visivel' : ''}`}
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Denis no WhatsApp"
      aria-hidden={!mostrar}
      tabIndex={mostrar ? 0 : -1}
    >
      <MessageCircle size={26} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
