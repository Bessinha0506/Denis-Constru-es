/**
 * Textos e imagens fixas das seções.
 * As imagens de fundo (hero, seção escura e chamada final) ficam aqui —
 * troque pelas fotos reais em public/ quando estiverem disponíveis.
 */

import { pexels } from './fotosExemplo';

// Ex. com foto real: hero: '/fotos/hero-fachada.jpg'
export const imagens = {
  hero: pexels(1115804, 2200),
  faixa: pexels(2581922, 600),
  metodo: pexels(2219024, 1600),
  chamada: pexels(7031406, 2200),
};

export const navegacao = [
  { rotulo: 'Obras', href: '#obras' },
  { rotulo: 'Sobre o Denis', href: '#sobre' },
  { rotulo: 'Etapas', href: '#etapas' },
  { rotulo: 'Como trabalhamos', href: '#metodo' },
  { rotulo: 'Portfólio', href: '#portfolio' },
  { rotulo: 'Contato', href: '#contato' },
];

/** Etapas de uma construção residencial — em ordem. */
export const etapas = [
  {
    nome: 'Fundação',
    texto: 'Locação da obra, escavação e execução da base que sustenta toda a casa.',
  },
  {
    nome: 'Estrutura',
    texto: 'Pilares, vigas e lajes conferidos em cada concretagem.',
  },
  {
    nome: 'Alvenaria',
    texto: 'Paredes no prumo e no esquadro, prontas para receber as instalações.',
  },
  {
    nome: 'Acabamento',
    texto: 'Reboco, pisos, revestimentos e pintura até a entrega das chaves.',
  },
];

/**
 * O que significa ter um mestre de obras à frente da construção.
 * Revise estes textos com o Denis para refletir exatamente como ele trabalha.
 */
export const compromissos = [
  {
    icone: 'HardHat',
    titulo: 'Presença no canteiro',
    texto: 'O mestre de obras acompanha a execução no dia a dia, não à distância.',
  },
  {
    icone: 'Users',
    titulo: 'Equipe coordenada',
    texto: 'Pedreiros, ajudantes e profissionais de cada etapa trabalhando em sequência.',
  },
  {
    icone: 'Ruler',
    titulo: 'Fidelidade ao projeto',
    texto: 'Medidas, níveis e prumos conferidos conforme o projeto aprovado.',
  },
  {
    icone: 'MessageCircle',
    titulo: 'Conversa direta',
    texto: 'Você fala com quem está tocando a obra e acompanha cada avanço.',
  },
];
