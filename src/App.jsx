import { useCallback, useState } from 'react';
import Cabecalho from './components/layout/Cabecalho';
import Rodape from './components/layout/Rodape';
import Galeria from './components/portfolio/Galeria';
import Hero from './sections/Hero';
import ObrasDestaque from './sections/ObrasDestaque';
import Sobre from './sections/Sobre';
import Metodo from './sections/Metodo';
import Portfolio from './sections/Portfolio';
import Chamada from './sections/Chamada';

export default function App() {
  const [obraAberta, setObraAberta] = useState(null);
  const fecharGaleria = useCallback(() => setObraAberta(null), []);

  return (
    <>
      <a className="pular-conteudo" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        <Hero onAbrirObra={setObraAberta} />
        <ObrasDestaque onAbrirObra={setObraAberta} />
        <Sobre />
        <Metodo />
        <Portfolio onAbrirObra={setObraAberta} />
        <Chamada />
      </main>
      <Rodape />

      {obraAberta && <Galeria obra={obraAberta} onFechar={fecharGaleria} />}
    </>
  );
}
