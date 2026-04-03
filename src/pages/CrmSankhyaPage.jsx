import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const crmSankhyaBlocks = [
  {
    eyebrow: 'Etapa 01',
    title: 'Cadastro e leitura do lead',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Atualização do funil',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'Acompanhamento e histórico',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
  },
]

export default function CrmSankhyaPage() {
  return (
    <ModulePageTemplate
      eyebrow="CRM Sankhya"
      title="Gestão comercial e acompanhamento do lead no sistema"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral do CRM Sankhya"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Pontos principais do CRM"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={crmSankhyaBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo de uso do CRM"
      videoDescription="Espaço reservado para um vídeo demonstrando navegação, atualização de status, registro de histórico e boas práticas no CRM Sankhya."
      videoPlaceholderLabel="Vídeo do CRM Sankhya"
    />
  )
}