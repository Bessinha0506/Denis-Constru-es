import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Logo from '../ui/Logo';
import { navegacao } from '../../data/conteudo';
import { empresa, linkWhatsApp } from '../../data/empresa';
import './Cabecalho.css';

export default function Cabecalho() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [oculto, setOculto] = useState(false);

  useEffect(() => {
    let ultimoY = window.scrollY;
    const aoRolar = () => {
      const y = window.scrollY;
      setRolou(y > 12);
      // Some ao descer e volta ao subir, liberando a tela para as fotos
      if (Math.abs(y - ultimoY) > 6) {
        setOculto(y > ultimoY && y > 420);
        ultimoY = y;
      }
    };
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : '';
    const aoTeclar = (e) => e.key === 'Escape' && setAberto(false);
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [aberto]);

  const fechar = () => setAberto(false);

  return (
    <header className={`cabecalho ${rolou ? 'cabecalho--rolou' : ''} ${aberto ? 'cabecalho--aberto' : ''} ${oculto && !aberto ? 'cabecalho--oculto' : ''}`}>
      <div className="container cabecalho__barra">
        <a href="#inicio" className="cabecalho__logo" aria-label="Denis Construções — início" onClick={fechar}>
          <Logo />
        </a>

        <nav className="cabecalho__nav" aria-label="Navegação principal">
          <ul>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={fechar}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="cabecalho__fone" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
          <span className="cabecalho__fone-icone">
            <Phone size={14} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="cabecalho__fone-numero">{empresa.telefone}</span>
          <span className="sr-only"> — falar no WhatsApp</span>
        </a>

        <button
          type="button"
          className="cabecalho__menu"
          aria-expanded={aberto}
          aria-controls="menu-movel"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <span className="cabecalho__progresso" aria-hidden="true" />

      <div id="menu-movel" className="menu-movel" hidden={!aberto}>
        <nav aria-label="Navegação móvel">
          <ul>
            {navegacao.map((item, i) => (
              <li key={item.href} style={{ '--i': i }}>
                <a href={item.href} onClick={fechar}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="menu-movel__fone botao botao--broto" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
          <Phone size={16} aria-hidden="true" />
          <span>Falar com o Denis</span>
        </a>
      </div>
    </header>
  );
}
