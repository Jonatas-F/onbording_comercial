import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const indicadoresMetasBlocks = [
  {
    eyebrow: 'Indicador 01',
    title: 'Volume e produtividade',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
  },
  {
    eyebrow: 'Indicador 02',
    title: 'Conversão e desempenho',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    eyebrow: 'Indicador 03',
    title: 'Acompanhamento de metas',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
]

export default function IndicadoresMetasPage() {
  return (
    <ModulePageTemplate
      eyebrow="Indicadores e metas"
      title="Métricas comerciais, acompanhamento de performance e foco em resultado"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral de indicadores e metas"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Principais indicadores"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={indicadoresMetasBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo de indicadores comerciais"
      videoDescription="Espaço reservado para um vídeo mostrando leitura de métricas, análise de desempenho, acompanhamento de metas e interpretação dos resultados."
      videoPlaceholderLabel="Vídeo de indicadores e metas"
    />
  )
}