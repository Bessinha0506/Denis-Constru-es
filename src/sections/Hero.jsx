import ImagemFacetada from '../components/ui/ImagemFacetada';
import TituloAnimado from '../components/ui/TituloAnimado';
import FormContato from '../components/ui/FormContato';
import { imagens } from '../data/conteudo';
import { obras, redimensionar } from '../data/obras';
import './Hero.css';

export default function Hero({ onAbrirObra }) {
  const miniaturas = obras.slice(0, 4);

  return (
    <section id="inicio" className="hero">
      <div className="container hero__grade">
        <div className="hero__texto">
          <TituloAnimado
            as="h1"
            className="hero__titulo"
            texto="Sua casa, construída do alicerce à entrega das chaves."
            imediato
            atraso={150}
          />
          <p className="hero__lead">
            Denis é mestre de obras e conduz pessoalmente a construção de residências: acompanha cada etapa no
            canteiro, coordena a equipe e cuida para que o projeto saia do papel como foi pensado.
          </p>

          <FormContato className="hero__form" />

          <div className="hero__obras">
            <p>Algumas casas construídas pelo Denis</p>
            <ul>
              {miniaturas.map((obra) => (
                <li key={obra.id} style={{ '--i': miniaturas.indexOf(obra) }}>
                  <button type="button" onClick={() => onAbrirObra(obra)} aria-label={`Ver fotos: ${obra.titulo}`}>
                    <img src={redimensionar(obra.capa, 240)} alt="" loading="eager" />
                  </button>
                </li>
              ))}
              <li>
                <a href="#portfolio" className="hero__ver-todas">
                  Ver portfólio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ImagemFacetada
        forma="hero"
        className="hero__imagem"
        src={imagens.hero}
        alt="Fachada de residência moderna com jardim"
        carregar="eager"
        paralaxe={0.12}
      />
    </section>
  );
}
