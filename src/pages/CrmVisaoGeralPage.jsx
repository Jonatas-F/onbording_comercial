import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const crmVisaoGeralBlocks = [
  {
    eyebrow: 'Etapa 01',
    title: 'Entrada e busca de leads',
    text: 'A rotina começa pela localização do lead dentro da Central de Relacionamento. A busca pode ser feita por telefone, nome ou identificador, o que acelera o atendimento e reduz o risco de trabalhar no cadastro errado.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Leitura dos dados do contato',
    text: 'Depois de localizar o lead, é importante interpretar corretamente os dados disponíveis na ficha, validar o histórico e entender em que etapa do atendimento o interessado se encontra antes de realizar qualquer nova ação.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'Uso prático dos filtros',
    text: 'Os filtros ajudam a organizar a operação comercial, facilitando a visualização por responsável, status ou contexto de atendimento. Esse uso melhora a produtividade e torna o acompanhamento mais claro no dia a dia.',
  },
  {
    eyebrow: 'Etapa 04',
    title: 'Turmas e oportunidades',
    text: 'Na navegação geral do CRM, o usuário também consulta disponibilidade de turmas e cruza essas informações com a necessidade do lead. Isso torna o atendimento mais consultivo e prepara o terreno para a conversão.',
  },
  {
    eyebrow: 'Etapa 05',
    title: 'Captação e registro manual',
    text: 'Além da gestão dos leads já existentes, o CRM também pode receber captações manuais. Esse processo é útil quando o contato entra por outro canal e precisa ser formalmente registrado para acompanhamento comercial.',
  },
  {
    eyebrow: 'Etapa 06',
    title: 'Base para os próximos fluxos',
    text: 'Dominar essa visão geral é essencial porque matrícula e agendamento de oficinas partem da navegação correta no CRM. Quando a base está bem feita, os processos seguintes ficam mais rápidos, seguros e padronizados.',
  },
]

export default function CrmVisaoGeralPage() {
  return (
    <ModulePageTemplate
      eyebrow="CRM Sankhya"
      title="Visão geral da operação no CRM"
      description="Este treinamento apresenta a navegação principal da Central de Relacionamento, a busca de leads, a leitura das informações do cadastro, o uso de filtros e a consulta dos dados que sustentam a rotina comercial."
      introLabel="Panorama"
      introTitle="Entendendo a lógica do CRM comercial"
      introText="O objetivo desta etapa é mostrar como o CRM organiza o trabalho da equipe comercial. Antes de executar processos específicos, como matrícula ou oficina, é fundamental dominar a busca, a leitura da ficha do lead e a navegação entre os dados disponíveis."
      contentTitle="Principais aprendizados da visão geral"
      contentDescription="Os pontos abaixo resumem a estrutura de navegação apresentada no treinamento e servem como referência rápida para consulta da equipe."
      textBlocks={crmVisaoGeralBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Treinamento: visão geral do CRM"
      videoDescription="Assista ao vídeo para entender a navegação inicial, a Central de Relacionamento, os filtros, a busca de leads e a leitura dos dados principais do CRM."
      videoPlaceholderLabel="Vídeo da visão geral do CRM"
      heroVideoUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Onbording_srm/Onbording_crm.mp4"
      sectionVideoUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Onbording_srm/Onbording_crm.mp4"
    />
  )
}