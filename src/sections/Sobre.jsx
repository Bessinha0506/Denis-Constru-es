import Botao from '../components/ui/Botao';
import TituloAnimado from '../components/ui/TituloAnimado';
import Revelar from '../components/ui/Revelar';
import { etapas, imagens } from '../data/conteudo';
import { empresa } from '../data/empresa';
import './Sobre.css';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      {imagens.faixa && (
        <div className="sobre__faixa" aria-hidden="true" data-paralaxe="-0.12">
          <img src={imagens.faixa} alt="" loading="lazy" />
        </div>
      )}

      <div className="container">
        <Revelar className="sobre__texto">
          <TituloAnimado texto="Quem constrói a sua casa também responde por ela." />
          <p>
            O mestre de obras é quem transforma o projeto em casa: organiza o canteiro, coordena pedreiros e
            ajudantes, confere cada medida e acompanha a obra até a última demão de tinta. Na {empresa.nome},
            esse papel é do próprio {empresa.responsavel} — e é com ele que você conversa do primeiro dia à
            entrega.
          </p>
          <Botao href="#portfolio" tamanho="pequeno">
            Ver as obras
          </Botao>
        </Revelar>

        <ol id="etapas" className="etapas" aria-label="Etapas da construção">
          {etapas.map((etapa, i) => (
            <Revelar as="li" key={etapa.nome} atraso={i * 140} className="etapa">
              <span className="etapa__nome">{etapa.nome}</span>
              <span className="etapa__ordem">{i + 1}ª etapa</span>
              <p>{etapa.texto}</p>
            </Revelar>
          ))}
        </ol>
      </div>
    </section>
  );
}
