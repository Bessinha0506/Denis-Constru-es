import { etapas } from '../../data/conteudo';
import './FaixaRolante.css';

const frases = [...etapas.map((e) => e.nome), 'Mestre de obras', 'Do alicerce às chaves'];

function Tijolo() {
  return (
    <svg className="faixa__tijolo" viewBox="0 0 20 16" aria-hidden="true">
      <rect x="0" y="0" width="12" height="7" rx="1.5" />
      <rect x="6" y="9" width="14" height="7" rx="1.5" />
    </svg>
  );
}

/** Faixa verde-limão com as etapas da obra correndo sem parar. Decorativa. */
export default function FaixaRolante() {
  const itens = [...frases, ...frases];
  return (
    <div className="faixa" aria-hidden="true">
      <div className="faixa__trilho">
        {itens.map((texto, i) => (
          <span className="faixa__item" key={i}>
            {texto}
            <Tijolo />
          </span>
        ))}
      </div>
    </div>
  );
}
