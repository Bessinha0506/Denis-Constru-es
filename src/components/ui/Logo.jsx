import './Logo.css';

/** Marca Denis Construções: telhado em duas águas + paredes, em linguagem de diagonais. */
export default function Logo({ claro = false, className = '' }) {
  return (
    <span className={`logo ${claro ? 'logo--claro' : ''} ${className}`.trim()}>
      <svg className="logo__marca" viewBox="0 0 32 30" aria-hidden="true">
        <path className="logo__telhado" d="M0 13.5 16 1l16 12.5h-5.4L16 5.3 5.4 13.5z" />
        <path className="logo__parede" d="M6.5 16h4.6v13H6.5zM20.9 16h4.6v13h-4.6z" />
        <path className="logo__parede" d="M12.6 22.4 19.4 16v4.4l-6.8 6.4z" />
      </svg>
      <span className="logo__texto">
        <span className="logo__nome">Denis</span>
        <span className="logo__sub">Construções</span>
      </span>
    </span>
  );
}
