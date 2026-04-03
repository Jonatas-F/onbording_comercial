import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const onboardingBlocks = [
  {
    eyebrow: 'Etapa 01',
    title: 'Boas-vindas e contexto',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Fluxo inicial de atendimento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Donec sed odio dui. Sed posuere consectetur est at lobortis.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'Primeiros direcionamentos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.',
  },
]

export default function OnboardingPage() {
  return (
    <ModulePageTemplate
      eyebrow="Onboarding"
      title="Integração comercial e primeiros passos"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      introLabel="Introdução"
      introTitle="Visão geral do onboarding"
      introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo."
      contentTitle="Estrutura do onboarding"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      textBlocks={onboardingBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Apresentação do onboarding"
      videoDescription="Espaço reservado para um vídeo explicativo com a introdução do processo, contexto da equipe e direcionamento inicial do módulo."
      videoPlaceholderLabel="Vídeo de onboarding"
    />
  )
}