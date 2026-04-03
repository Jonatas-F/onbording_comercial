import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const bibliotecaBlocks = [
  {
    eyebrow: 'Recurso 01',
    title: 'Materiais de apoio',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
  },
  {
    eyebrow: 'Recurso 02',
    title: 'Referências rápidas',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    eyebrow: 'Recurso 03',
    title: 'Base de consulta contínua',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
]

export default function BibliotecaPage() {
  return (
    <ModulePageTemplate
      eyebrow="Biblioteca"
      title="Central de materiais, referências e conteúdo de apoio comercial"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral da biblioteca"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Conteúdos disponíveis"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={bibliotecaBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo de apresentação da biblioteca"
      videoDescription="Espaço reservado para um vídeo explicando como consultar materiais, localizar referências e utilizar a biblioteca como apoio no processo comercial."
      videoPlaceholderLabel="Vídeo da biblioteca"
    />
  )
}