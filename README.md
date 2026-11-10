# Denis Construções — site

React + Vite + CSS puro + Lucide React.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/ para publicar
```

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Telefone, WhatsApp, e-mail, região, Instagram | `src/data/empresa.js` |
| Obras do portfólio (título, dados, fotos) | `src/data/obras.js` |
| Fotos do topo, da seção escura e da chamada final; etapas; textos de "Por que ter um mestre de obras" | `src/data/conteudo.js` |

### Adicionar uma obra

1. Crie a pasta `public/obras/<id-da-obra>/` e coloque as fotos nela.
2. Em `src/data/obras.js`, copie um bloco e preencha:
   `capa: '/obras/<id-da-obra>/fachada.jpg'`, `fotos: ['/obras/<id-da-obra>/sala.jpg', ...]`.
3. Use `destaque: true` para que ela também apareça em "Casas que já saíram do papel" (as 3 primeiras marcadas são usadas).
4. Use `ilustrativa: false` para tirar o selo "Imagem ilustrativa".

As obras atuais são **espaços reservados** com fotos do Pexels. Troque pelas obras reais antes de publicar.

## Estrutura

```
src/
  data/          conteúdo editável (empresa, obras, textos)
  components/
    layout/      Cabecalho, Rodape
    ui/          Botao, Logo, ImagemFacetada, FormContato, Revelar
    portfolio/   ObraCard, Galeria (tela cheia), SeloIlustrativa
  sections/      Hero, ObrasDestaque, Sobre, Metodo, Portfolio, Chamada
  styles/        global.css (cores, tipografia, espaçamentos)
```
