import useVisivel from '../../hooks/useVisivel';

/**
 * Envolve um bloco e o revela na primeira vez que entra na tela.
 * efeito: 'subir' (padrão) | 'esquerda' | 'direita' | 'zoom'
 * Uso: <Revelar atraso={120} efeito="esquerda">...</Revelar>
 */
export default function Revelar({ as: Tag = 'div', atraso = 0, efeito = 'subir', className = '', style, children, ...resto }) {
  const [ref, visivel] = useVisivel();

  return (
    <Tag
      ref={ref}
      className={`revelar revelar--${efeito} ${visivel ? 'visivel' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      style={{ '--atraso': `${atraso}ms`, ...style }}
      {...resto}
    >
      {children}
    </Tag>
  );
}
