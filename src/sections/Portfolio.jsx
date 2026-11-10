import { useMemo, useState } from 'react';
import ObraCard from '../components/portfolio/ObraCard';
import useVisivel from '../hooks/useVisivel';
import TituloAnimado from '../components/ui/TituloAnimado';
import Revelar from '../components/ui/Revelar';
import { obras, rotuloStatus } from '../data/obras';
import './Portfolio.css';

const filtrosStatus = { entregue: 'Entregues', andamento: 'Em andamento' };

export default function Portfolio({ onAbrirObra }) {
  const [filtro, setFiltro] = useState('todas');
  const [gradeRef, gradeVisivel] = useVisivel({ limiar: 0.1 });

  // Os filtros só aparecem para os status que existem de fato nas obras cadastradas
  const filtros = useMemo(() => {
    const presentes = [...new Set(obras.map((o) => o.status))].filter((s) => rotuloStatus[s]);
    return presentes.length > 1 ? ['todas', ...presentes] : [];
  }, []);

  const visiveis = filtro === 'todas' ? obras : obras.filter((o) => o.status === filtro);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <Revelar className="portfolio__cabeca">
          <TituloAnimado texto="Portfólio de obras" />
          <p>Toque em uma obra para ver todas as fotos.</p>
        </Revelar>

        {filtros.length > 0 && (
          <div className="portfolio__filtros" role="group" aria-label="Filtrar obras">
            {filtros.map((f) => (
              <button
                key={f}
                type="button"
                className="portfolio__filtro"
                aria-pressed={filtro === f}
                onClick={() => setFiltro(f)}
              >
                {f === 'todas' ? 'Todas' : filtrosStatus[f]}
              </button>
            ))}
          </div>
        )}

        <ul ref={gradeRef} className={`portfolio__grade ${gradeVisivel ? 'visivel' : ''}`}>
          {visiveis.map((obra, i) => (
            <li key={`${filtro}-${obra.id}`} className="portfolio__item" style={{ '--i': i }}>
              <ObraCard obra={obra} onAbrir={onAbrirObra} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
