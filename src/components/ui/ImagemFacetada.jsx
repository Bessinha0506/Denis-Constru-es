import './ImagemFacetada.css';

/**
 * Foto recortada em facetas diagonais — a assinatura visual do site.
 * forma: 'hero' | 'destaque' | 'card' | 'metodo'
 */
export default function ImagemFacetada({ src, alt = '', forma = 'card', className = '', carregar = 'lazy', children }) {
  return (
    <div className={`facetada facetada--${forma} ${className}`.trim()}>
      <img src={src} alt={alt} loading={carregar} decoding="async" />
      <span className="facetada__lasca facetada__lasca--a" aria-hidden="true" />
      <span className="facetada__lasca facetada__lasca--b" aria-hidden="true" />
      {children}
    </div>
  );
}
