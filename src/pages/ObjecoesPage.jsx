import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const objecoesBlocks = [
  {
    eyebrow: 'Objeção 01',
    title: 'Preço e investimento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
  },
  {
    eyebrow: 'Objeção 02',
    title: 'Tempo e prioridade',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    eyebrow: 'Objeção 03',
    title: 'Segurança na decisão',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
]

export default function ObjecoesPage() {
  return (
    <ModulePageTemplate
      eyebrow="Objeções"
      title="Tratativa de barreiras comerciais e condução para avanço"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral das objeções"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Principais objeções"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={objecoesBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo de tratamento de objeções"
      videoDescription="Espaço reservado para um vídeo com exemplos práticos de contorno de objeções, reformulação de percepção de valor e avanço da negociação."
      videoPlaceholderLabel="Vídeo de objeções"
    />
  )
}