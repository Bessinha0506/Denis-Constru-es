import { HardHat, MessageCircle, Ruler, Users } from 'lucide-react';
import Botao from '../components/ui/Botao';
import ImagemFacetada from '../components/ui/ImagemFacetada';
import Revelar from '../components/ui/Revelar';
import { compromissos, imagens } from '../data/conteudo';
import { linkWhatsApp } from '../data/empresa';
import './Metodo.css';

const icones = { HardHat, MessageCircle, Ruler, Users };

export default function Metodo() {
  return (
    <section id="metodo" className="metodo escuro">
      <div className="container">
        <div className="metodo__topo">
          <Revelar className="metodo__texto">
            <h2>Obra bem conduzida avança etapa por etapa, sem surpresas.</h2>
            <p>
              Planejar a sequência dos serviços, ter o material certo no momento certo e conferir o que foi feito
              antes de seguir: é assim que uma casa fica pronta com qualidade.
            </p>
            <Botao href={linkWhatsApp('Quero conversar sobre a construção da minha casa.')} tamanho="pequeno">
              Falar com o Denis
            </Botao>
          </Revelar>

          <Revelar atraso={150} className="metodo__foto">
            <ImagemFacetada forma="metodo" src={imagens.metodo} alt="Canteiro de obras em andamento" />
          </Revelar>
        </div>

        <h3 className="metodo__subtitulo">Por que ter um mestre de obras à frente?</h3>
        <ul className="metodo__lista">
          {compromissos.map((item, i) => {
            const Icone = icones[item.icone];
            return (
              <Revelar as="li" key={item.titulo} atraso={i * 90} className="compromisso">
                {Icone && <Icone size={22} strokeWidth={1.6} aria-hidden="true" />}
                <h4>{item.titulo}</h4>
                <p>{item.texto}</p>
              </Revelar>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
