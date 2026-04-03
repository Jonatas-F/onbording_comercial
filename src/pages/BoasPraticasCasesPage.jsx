import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const boasPraticasCasesBlocks = [
  {
    eyebrow: 'Prática 01',
    title: 'Padronização de atendimento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
  },
  {
    eyebrow: 'Prática 02',
    title: 'Leitura de casos reais',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
  },
  {
    eyebrow: 'Prática 03',
    title: 'Aprendizados aplicáveis',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
]

export default function BoasPraticasCasesPage() {
  return (
    <ModulePageTemplate
      eyebrow="Boas práticas e cases"
      title="Referências comerciais, exemplos práticos e padrões de execução"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Panorama"
      introTitle="Visão geral de boas práticas e cases"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
      contentTitle="Aplicações e aprendizados"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={boasPraticasCasesBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Vídeo de boas práticas comerciais"
      videoDescription="Espaço reservado para um vídeo com exemplos práticos, estudos de caso e análise de boas abordagens comerciais aplicadas no dia a dia."
      videoPlaceholderLabel="Vídeo de boas práticas e cases"
    />
  )
}