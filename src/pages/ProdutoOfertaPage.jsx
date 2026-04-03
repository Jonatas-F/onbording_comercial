import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const produtoOfertaBlocks = [
  {
    eyebrow: 'Bloco 01',
    title: 'Entendimento do portfólio',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
  },
  {
    eyebrow: 'Bloco 02',
    title: 'Construção da oferta',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    eyebrow: 'Bloco 03',
    title: 'Apresentação de valor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
]

export default function ProdutoOfertaPage() {
  return (
    <ModulePageTemplate
      eyebrow="Produto e oferta"
      title="Apresentação comercial, valor percebido e construção da proposta"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral de produto e oferta"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Estrutura da oferta"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={produtoOfertaBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo de produto e oferta"
      videoDescription="Espaço reservado para um vídeo mostrando como apresentar diferenciais, organizar argumentos de valor e estruturar a oferta comercial."
      videoPlaceholderLabel="Vídeo de produto e oferta"
    />
  )
}