import { AtSign, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../ui/Logo';
import { navegacao, etapas } from '../../data/conteudo';
import { empresa, linkWhatsApp } from '../../data/empresa';
import './Rodape.css';

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape escuro">
      <div className="container rodape__grade">
        <div className="rodape__marca">
          <Logo claro />
          <p>
            Construção de residências conduzida pessoalmente por {empresa.responsavel},{' '}
            {empresa.cargo.toLowerCase()}.
          </p>
          {empresa.regiao && (
            <p className="rodape__regiao">
              <MapPin size={15} aria-hidden="true" /> {empresa.regiao}
            </p>
          )}
        </div>

        <nav className="rodape__coluna" aria-label="Rodapé">
          <h3>Navegação</h3>
          <ul>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rodape__coluna">
          <h3>Etapas da obra</h3>
          <ul>
            {etapas.map((etapa) => (
              <li key={etapa.nome}>
                <a href="#etapas">{etapa.nome}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rodape__coluna">
          <h3>Contato</h3>
          <ul className="rodape__contato">
            <li>
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                <Phone size={15} aria-hidden="true" /> {empresa.telefone}
              </a>
            </li>
            {empresa.email && (
              <li>
                <a href={`mailto:${empresa.email}`}>
                  <Mail size={15} aria-hidden="true" /> {empresa.email}
                </a>
              </li>
            )}
            {empresa.instagram && (
              <li>
                <a href={empresa.instagram} target="_blank" rel="noopener noreferrer">
                  <AtSign size={15} aria-hidden="true" /> Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container rodape__base">
        <p>
          © {ano} {empresa.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
