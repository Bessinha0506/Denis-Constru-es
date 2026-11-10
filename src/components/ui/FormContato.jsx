import { useId, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { linkWhatsApp } from '../../data/empresa';
import './FormContato.css';

/**
 * Campo + botão na mesma barra (como na referência).
 * Ao enviar, abre o WhatsApp do Denis com a mensagem já escrita.
 */
export default function FormContato({
  rotulo = 'Conte em poucas palavras o que você quer construir',
  placeholder = 'Ex.: casa térrea de 3 quartos',
  botao = 'Pedir orçamento',
  className = '',
}) {
  const id = useId();
  const [texto, setTexto] = useState('');

  function enviar(evento) {
    evento.preventDefault();
    const mensagem = texto.trim()
      ? `Quero um orçamento para: ${texto.trim()}`
      : 'Quero conversar sobre a construção da minha casa.';
    window.open(linkWhatsApp(mensagem), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className={`form-contato ${className}`.trim()} onSubmit={enviar}>
      <label htmlFor={id} className="sr-only">
        {rotulo}
      </label>
      <input
        id={id}
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={160}
      />
      <button type="submit" className="botao botao--broto botao--pequeno">
        <span>{botao}</span>
        <ArrowRight className="botao__seta" size={15} aria-hidden="true" />
      </button>
    </form>
  );
}
