/**
 * Dados da empresa.
 * ----------------------------------------------------------------
 * Tudo que aparece no cabeçalho, rodapé e botões de contato vem daqui.
 * Os campos marcados com "PREENCHER" ainda não foram informados —
 * substitua pelos dados reais antes de publicar.
 */
export const empresa = {
  nome: 'Denis Construções',
  responsavel: 'Denis',
  cargo: 'Mestre de obras',

  // PREENCHER: telefone exibido no site (formato livre)
  telefone: '(00) 00000-0000',

  // PREENCHER: número do WhatsApp só com dígitos, com DDI 55 + DDD
  // Ex.: '5511912345678'
  whatsapp: '5500000000000',

  // PREENCHER: e-mail de contato (deixe '' para ocultar)
  email: '',

  // PREENCHER: cidade / região de atendimento (deixe '' para ocultar)
  regiao: '',

  // PREENCHER: perfil do Instagram, ex.: 'https://instagram.com/denisconstrucoes'
  instagram: '',
};

/** Monta o link do WhatsApp com uma mensagem já escrita. */
export function linkWhatsApp(mensagem = '') {
  const texto = mensagem
    ? `Olá, Denis! ${mensagem}`
    : 'Olá, Denis! Gostaria de conversar sobre uma obra.';
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`;
}
