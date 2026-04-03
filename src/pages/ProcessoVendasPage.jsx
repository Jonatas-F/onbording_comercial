import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const processoVendasBlocks = [
  {
    eyebrow: 'Etapa 01',
    title: 'Recepção do lead',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Qualificação e entendimento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'Condução até o fechamento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
]

export default function ProcessoVendasPage() {
  return (
    <ModulePageTemplate
      eyebrow="Processo de vendas"
      title="Fluxo comercial do primeiro contato ao fechamento"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral do processo de vendas"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Etapas do processo"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={processoVendasBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo do processo comercial"
      videoDescription="Espaço reservado para um vídeo explicativo demonstrando a jornada do lead, os pontos de contato e a condução da negociação."
      videoPlaceholderLabel="Vídeo do processo de vendas"
    />
  )
}