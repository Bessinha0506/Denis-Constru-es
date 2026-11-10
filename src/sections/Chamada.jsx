import FormContato from '../components/ui/FormContato';
import TituloAnimado from '../components/ui/TituloAnimado';
import Revelar from '../components/ui/Revelar';
import { imagens } from '../data/conteudo';
import './Chamada.css';

export default function Chamada() {
  return (
    <section id="contato" className="chamada">
      <img className="chamada__fundo" src={imagens.chamada} alt="" loading="lazy" data-paralaxe="0.15" />
      <span className="chamada__lasca chamada__lasca--a" aria-hidden="true" data-paralaxe="-0.1" />
      <span className="chamada__lasca chamada__lasca--b" aria-hidden="true" data-paralaxe="0.08" />

      <Revelar className="container chamada__conteudo">
        <p className="chamada__apoio">Do terreno à entrega das chaves</p>
        <TituloAnimado texto="Tem um terreno e um projeto? Vamos conversar sobre a sua casa." />
        <FormContato className="chamada__form" botao="Conversar no WhatsApp" />
      </Revelar>
    </section>
  );
}
