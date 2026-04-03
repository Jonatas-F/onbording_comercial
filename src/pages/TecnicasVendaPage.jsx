import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const tecnicasVendaBlocks = [
  {
    eyebrow: 'Técnica 01',
    title: 'Conexão e rapport',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
  },
  {
    eyebrow: 'Técnica 02',
    title: 'Argumentação e valor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    eyebrow: 'Técnica 03',
    title: 'Fechamento e avanço',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
]

export default function TecnicasVendaPage() {
  return (
    <ModulePageTemplate
      eyebrow="Técnicas de venda"
      title="Métodos de condução comercial para aumentar conversão"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral das técnicas de venda"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Principais técnicas"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={tecnicasVendaBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo de técnicas comerciais"
      videoDescription="Espaço reservado para um vídeo demonstrando técnicas de condução, persuasão, construção de valor e encaminhamento para fechamento."
      videoPlaceholderLabel="Vídeo de técnicas de venda"
    />
  )
}