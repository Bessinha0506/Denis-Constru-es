import { Images } from 'lucide-react';
import ImagemFacetada from '../components/ui/ImagemFacetada';
import TituloAnimado from '../components/ui/TituloAnimado';
import Revelar from '../components/ui/Revelar';
import SeloIlustrativa from '../components/portfolio/SeloIlustrativa';
import { obras, redimensionar, rotuloStatus } from '../data/obras';
import './ObrasDestaque.css';

export default function ObrasDestaque({ onAbrirObra }) {
  const [principal, ...demais] = obras.filter((o) => o.destaque).slice(0, 3);
  if (!principal) return null;

  return (
    <section id="obras" className="destaque">
      <div className="container">
        <Revelar className="destaque__cabeca">
          <TituloAnimado texto="Casas que já saíram do papel" />
          <p>
            Cada obra é acompanhada do início ao fim pelo próprio Denis. Estas são algumas das residências
            construídas pela Denis Construções.
          </p>
        </Revelar>

        <div className="destaque__grade">
          <Revelar as="article" className="cartao-largo">
            <div className="cartao-largo__texto">
              <h3 className="titulo-sublinhado">{principal.titulo}</h3>
              <div className="cartao-largo__meta">
                <strong>{principal.tipo}</strong>
                <span>{[principal.local, principal.ano].filter(Boolean).join(', ') || rotuloStatus[principal.status]}</span>
              </div>
              {principal.descricao && <p className="cartao-largo__descricao">{principal.descricao}</p>}
              <button type="button" className="botao botao--broto botao--pequeno" onClick={() => onAbrirObra(principal)}>
                <Images size={15} aria-hidden="true" />
                <span>Ver fotos da obra</span>
              </button>
            </div>
            <button
              type="button"
              className="cartao-largo__foto"
              onClick={() => onAbrirObra(principal)}
              aria-label={`Abrir galeria: ${principal.titulo}`}
            >
              <ImagemFacetada forma="destaque" src={redimensionar(principal.capa, 1000)} alt="" paralaxe={0.06} />
              {principal.ilustrativa && <SeloIlustrativa />}
            </button>
          </Revelar>

          {demais.map((obra, i) => (
            <Revelar
              as="article"
              key={obra.id}
              className={`cartao-cor ${i === 0 ? 'cartao-cor--broto' : 'cartao-cor--mata'}`}
            >
              <button type="button" data-inclinar className="cartao-cor__alvo" onClick={() => onAbrirObra(obra)}>
                <h3 className="titulo-sublinhado">{obra.titulo}</h3>
                <div className="cartao-cor__foto">
                  <img src={redimensionar(obra.capa, 700)} alt="" loading="lazy" />
                  {obra.ilustrativa && <SeloIlustrativa />}
                </div>
                <div className="cartao-cor__rodape">
                  <strong>{rotuloStatus[obra.status]}</strong>
                  <span>{[obra.tipo, obra.local].filter(Boolean).join(', ')}</span>
                </div>
              </button>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
