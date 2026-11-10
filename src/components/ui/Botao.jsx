import { ArrowRight } from 'lucide-react';
import './Botao.css';

/**
 * Botão/link do site.
 * variante: 'broto' (verde-limão, padrão) | 'contorno' | 'escuro'
 * tamanho:  'normal' | 'pequeno'
 */
export default function Botao({
  children,
  href,
  variante = 'broto',
  tamanho = 'normal',
  seta = true,
  className = '',
  ...resto
}) {
  const classes = `botao botao--${variante} botao--${tamanho} ${className}`.trim();
  const conteudo = (
    <>
      <span>{children}</span>
      {seta && <ArrowRight className="botao__seta" size={16} strokeWidth={2} aria-hidden="true" />}
    </>
  );

  if (href) {
    const externo = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...resto}
      >
        {conteudo}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...resto}>
      {conteudo}
    </button>
  );
}
