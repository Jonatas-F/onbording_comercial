import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const abordagemScriptsBlocks = [
  {
    eyebrow: 'Bloco 01',
    title: 'Abertura de conversa',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
  },
  {
    eyebrow: 'Bloco 02',
    title: 'Perguntas de condução',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    eyebrow: 'Bloco 03',
    title: 'Encaminhamento para proposta',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
]

export default function AbordagemScriptsPage() {
  return (
    <ModulePageTemplate
      eyebrow="Abordagem e scripts"
      title="Estrutura de comunicação comercial e condução da conversa"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral das abordagens"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Blocos de script"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={abordagemScriptsBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo de abordagem comercial"
      videoDescription="Espaço reservado para um vídeo demonstrando exemplos de abertura, condução, argumentação e transição para a proposta comercial."
      videoPlaceholderLabel="Vídeo de abordagem e scripts"
    />
  )
}