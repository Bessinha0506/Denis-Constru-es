import { ArrowRight } from 'lucide-react';
import ImagemFacetada from '../ui/ImagemFacetada';
import SeloIlustrativa from './SeloIlustrativa';
import { fotosDaObra, redimensionar, rotuloStatus } from '../../data/obras';
import './ObraCard.css';

export default function ObraCard({ obra, onAbrir }) {
  const totalFotos = fotosDaObra(obra).length;
  const detalhes = [obra.tipo, obra.local].filter(Boolean).join(', ');

  return (
    <article className="obra-card">
      <button type="button" className="obra-card__alvo" onClick={() => onAbrir(obra)}>
        <h3 className="obra-card__titulo titulo-sublinhado">{obra.titulo}</h3>
        <p className="obra-card__detalhes">{obra.descricao || detalhes}</p>

        <ImagemFacetada forma="card" src={redimensionar(obra.capa, 900)} alt="" className="obra-card__foto">
          {obra.ilustrativa && <SeloIlustrativa />}
        </ImagemFacetada>

        <span className="obra-card__rodape">
          <span>{obra.ano || rotuloStatus[obra.status]}</span>
          <span className="obra-card__fotos">
            {totalFotos} {totalFotos === 1 ? 'foto' : 'fotos'}
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        </span>
      </button>
    </article>
  );
}
