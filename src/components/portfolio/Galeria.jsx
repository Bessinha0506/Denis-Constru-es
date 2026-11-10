import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SeloIlustrativa from './SeloIlustrativa';
import { fotosDaObra, redimensionar, rotuloStatus } from '../../data/obras';
import './Galeria.css';

/** Visualizador em tela cheia das fotos de uma obra. */
export default function Galeria({ obra, onFechar }) {
  const [atual, setAtual] = useState(0);
  const fecharRef = useRef(null);
  const fotos = fotosDaObra(obra);
  const total = fotos.length;

  const ir = useCallback((passo) => setAtual((i) => (i + passo + total) % total), [total]);

  useEffect(() => {
    const anterior = document.activeElement;
    document.body.style.overflow = 'hidden';
    fecharRef.current?.focus();

    const aoTeclar = (e) => {
      if (e.key === 'Escape') onFechar();
      if (e.key === 'ArrowRight') ir(1);
      if (e.key === 'ArrowLeft') ir(-1);
    };
    window.addEventListener('keydown', aoTeclar);

    return () => {
      window.removeEventListener('keydown', aoTeclar);
      document.body.style.overflow = '';
      anterior?.focus?.();
    };
  }, [ir, onFechar]);

  const detalhes = [obra.tipo, obra.local, obra.ano].filter(Boolean).join(', ');

  return (
    <div
      className="galeria"
      role="dialog"
      aria-modal="true"
      aria-label={`Fotos: ${obra.titulo}`}
      onClick={(e) => e.target === e.currentTarget && onFechar()}
    >
      <div className="galeria__topo">
        <div>
          <p className="galeria__titulo">{obra.titulo}</p>
          <p className="galeria__detalhes">
            {rotuloStatus[obra.status]}
            {detalhes && `, ${detalhes}`}
          </p>
          {obra.ilustrativa && <SeloIlustrativa />}
        </div>
        <button ref={fecharRef} type="button" className="galeria__fechar" onClick={onFechar} aria-label="Fechar galeria">
          <X size={22} />
        </button>
      </div>

      <figure className="galeria__palco">
        <img key={fotos[atual]} src={fotos[atual]} alt={`${obra.titulo}, foto ${atual + 1} de ${total}`} />
      </figure>

      {total > 1 && (
        <>
          <button type="button" className="galeria__nav galeria__nav--ant" onClick={() => ir(-1)} aria-label="Foto anterior">
            <ChevronLeft size={26} />
          </button>
          <button type="button" className="galeria__nav galeria__nav--prox" onClick={() => ir(1)} aria-label="Próxima foto">
            <ChevronRight size={26} />
          </button>

          <div className="galeria__rodape">
            <span className="galeria__contador" aria-live="polite">
              {atual + 1} / {total}
            </span>
            <ul className="galeria__miniaturas">
              {fotos.map((foto, i) => (
                <li key={foto}>
                  <button
                    type="button"
                    aria-label={`Ver foto ${i + 1}`}
                    aria-current={i === atual}
                    onClick={() => setAtual(i)}
                  >
                    <img src={redimensionar(foto, 200)} alt="" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
