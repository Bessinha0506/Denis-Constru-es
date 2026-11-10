/**
 * Fotos de banco de imagens (Pexels, licença livre) usadas como ESPAÇO
 * RESERVADO até chegarem as fotos reais das obras do Denis.
 * Quando trocar tudo por arquivos em /public, este arquivo pode ser apagado.
 */
export const pexels = (id, largura = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${largura}`;
