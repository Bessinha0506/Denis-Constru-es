import useVisivel from '../../hooks/useVisivel';
import './ImagemFacetada.css';

/**
 * Foto recortada em facetas diagonais — a assinatura visual do site.
 * forma: 'hero' | 'destaque' | 'card' | 'metodo'
 * paralaxe: número (ex.: 0.1) para a foto andar mais devagar que a rolagem
 */
export default function ImagemFacetada({ src, alt = '', forma = 'card', className = '', carregar = 'lazy', paralaxe, children }) {
  const [ref, visivel] = useVisivel({ limiar: 0.2 });

  return (
    <div ref={ref} className={`facetada facetada--${forma} ${visivel ? 'facetada--visivel' : ''} ${className}`.trim()}>
      <img src={src} alt={alt} loading={carregar} decoding="async" data-paralaxe={paralaxe} />
      <span className="facetada__lasca facetada__lasca--a" aria-hidden="true" />
      <span className="facetada__lasca facetada__lasca--b" aria-hidden="true" />
      {children}
    </div>
  );
}
