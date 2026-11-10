import FormContato from '../components/ui/FormContato';
import Revelar from '../components/ui/Revelar';
import { imagens } from '../data/conteudo';
import './Chamada.css';

export default function Chamada() {
  return (
    <section id="contato" className="chamada">
      <img className="chamada__fundo" src={imagens.chamada} alt="" loading="lazy" />
      <span className="chamada__lasca chamada__lasca--a" aria-hidden="true" />
      <span className="chamada__lasca chamada__lasca--b" aria-hidden="true" />

      <Revelar className="container chamada__conteudo">
        <p className="chamada__apoio">Do terreno à entrega das chaves</p>
        <h2>Tem um terreno e um projeto? Vamos conversar sobre a sua casa.</h2>
        <FormContato className="chamada__form" botao="Conversar no WhatsApp" />
      </Revelar>
    </section>
  );
}
