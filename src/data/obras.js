/**
 * PORTFÓLIO DE OBRAS
 * ----------------------------------------------------------------
 * Cada objeto abaixo é uma obra exibida no site. Para adicionar uma
 * nova obra, copie um bloco, mude o `id` e preencha os campos.
 *
 * Fotos reais: coloque os arquivos em  public/obras/<id-da-obra>/
 * e referencie assim:  capa: '/obras/residencia-01/fachada.jpg'
 *
 * Campos:
 *  id           identificador único, sem espaços
 *  titulo       nome da obra exibido no card
 *  tipo         ex.: 'Residência térrea', 'Sobrado', 'Reforma'
 *  local        cidade/bairro (opcional — oculto se vazio)
 *  ano          ano de entrega (opcional — oculto se vazio)
 *  status       'entregue' ou 'andamento'
 *  descricao    texto curto sobre a obra (opcional)
 *  capa         foto principal
 *  fotos        demais fotos da galeria (a capa entra automaticamente)
 *  destaque     true = aparece também em "Casas que já saíram do papel"
 *               (as 3 primeiras marcadas são usadas)
 *  ilustrativa  true = mostra o selo "Imagem ilustrativa".
 *               Mude para false ao trocar pelas fotos reais.
 *
 * ATENÇÃO: as obras abaixo são ESPAÇOS RESERVADOS com fotos de banco de
 * imagens. Substitua título, dados e fotos pelas obras reais do Denis.
 */
import { pexels } from './fotosExemplo';

export const obras = [
  {
    id: 'residencia-01',
    titulo: 'Residência 01',
    tipo: 'Residência',
    local: '',
    ano: '',
    status: 'entregue',
    descricao: '',
    capa: pexels(323780),
    fotos: [pexels(1643383), pexels(2251247)],
    destaque: true,
    ilustrativa: true,
  },
  {
    id: 'residencia-02',
    titulo: 'Residência 02',
    tipo: 'Residência',
    local: '',
    ano: '',
    status: 'entregue',
    descricao: '',
    capa: pexels(280222),
    fotos: [pexels(2724749)],
    destaque: true,
    ilustrativa: true,
  },
  {
    id: 'residencia-03',
    titulo: 'Residência 03',
    tipo: 'Residência',
    local: '',
    ano: '',
    status: 'andamento',
    descricao: '',
    capa: pexels(3990359),
    fotos: [pexels(585419)],
    destaque: true,
    ilustrativa: true,
  },
  {
    id: 'residencia-04',
    titulo: 'Residência 04',
    tipo: 'Residência',
    local: '',
    ano: '',
    status: 'entregue',
    descricao: '',
    capa: pexels(259588),
    fotos: [],
    destaque: false,
    ilustrativa: true,
  },
  {
    id: 'residencia-05',
    titulo: 'Residência 05',
    tipo: 'Residência',
    local: '',
    ano: '',
    status: 'entregue',
    descricao: '',
    capa: pexels(1732414),
    fotos: [],
    destaque: false,
    ilustrativa: true,
  },
  {
    id: 'residencia-06',
    titulo: 'Residência 06',
    tipo: 'Residência',
    local: '',
    ano: '',
    status: 'entregue',
    descricao: '',
    capa: pexels(106399),
    fotos: [],
    destaque: false,
    ilustrativa: true,
  },
];

/** Todas as fotos de uma obra, começando pela capa. */
export const fotosDaObra = (obra) => [obra.capa, ...(obra.fotos || [])];

/** Versão menor de uma foto (só tem efeito em URLs com parâmetro w=). */
export const redimensionar = (src, largura) => src.replace(/([?&])w=\d+/, `$1w=${largura}`);

export const rotuloStatus = {
  entregue: 'Obra entregue',
  andamento: 'Em andamento',
};
