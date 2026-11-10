import { Fragment } from 'react';
import useVisivel from '../../hooks/useVisivel';

/** Título que sobe palavra por palavra, cada uma saindo de trás de uma "máscara". */
export default function TituloAnimado({ as: Tag = 'h2', texto, className = '', imediato = false, atraso = 0 }) {
  const [ref, visivel] = useVisivel({ limiar: 0.3 });
  const palavras = texto.split(' ');

  return (
    <Tag
      ref={ref}
      aria-label={texto}
      className={`titulo-animado ${imediato || visivel ? 'titulo-animado--ativo' : ''} ${className}`.trim()}
      style={{ '--atraso-titulo': `${atraso}ms` }}
    >
      {palavras.map((palavra, i) => (
        <Fragment key={i}>
          <span className="titulo-animado__mascara" aria-hidden="true">
            <span className="titulo-animado__palavra" style={{ '--p': i }}>
              {palavra}
            </span>
          </span>
          {i < palavras.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  );
}
