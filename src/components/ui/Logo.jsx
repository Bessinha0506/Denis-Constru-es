import './Logo.css';

/** Marca Denis Construções: a letra D levantada em tijolos, com um tijolo em destaque. */
export default function Logo({ claro = false, className = '' }) {
  return (
    <span className={`logo ${claro ? 'logo--claro' : ''} ${className}`.trim()}>
      <svg className="logo__marca" viewBox="0 0 48 52" aria-hidden="true">
        <g className="logo__tijolos">
          <rect x="4" y="3" width="12" height="7" rx="1.5" />
          <rect x="18" y="3" width="18" height="7" rx="1.5" />
          <rect x="4" y="13" width="8" height="7" rx="1.5" />
          <rect x="30" y="13" width="12" height="7" rx="1.5" />
          <rect x="4" y="23" width="8" height="7" rx="1.5" />
          <rect x="4" y="33" width="8" height="7" rx="1.5" />
          <rect x="30" y="33" width="12" height="7" rx="1.5" />
          <rect x="4" y="43" width="12" height="7" rx="1.5" />
          <rect x="18" y="43" width="18" height="7" rx="1.5" />
        </g>
        <rect className="logo__destaque" x="34" y="23" width="10" height="7" rx="1.5" />
      </svg>
      <span className="logo__texto">
        <span className="logo__nome">Denis</span>
        <span className="logo__sub">Construções</span>
      </span>
    </span>
  );
}
