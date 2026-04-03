import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const crmAgendamentoOficinasBlocks = [
  {
    eyebrow: 'Etapa 01',
    title: 'Busca e validação do lead',
    text: 'O agendamento de oficinas começa com a localização correta do lead dentro do CRM. Antes de avançar, é importante validar se o cadastro está certo e se o histórico comercial corresponde ao atendimento em andamento.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Acesso à aba de oficinas',
    text: 'Depois de localizar o contato, o usuário acessa a aba de oficinas para iniciar o processo. É nessa área que o CRM organiza os workshops e permite registrar o agendamento de forma estruturada.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'Escolha do workshop',
    text: 'Com a aba correta aberta, o próximo passo é selecionar o workshop ou oficina adequada. Essa escolha precisa considerar o contexto do lead e a oferta disponível para garantir aderência ao que foi combinado no atendimento.',
  },
  {
    eyebrow: 'Etapa 04',
    title: 'Definição da turma',
    text: 'Após selecionar a oficina, é necessário escolher a turma correspondente. Essa etapa exige atenção à disponibilidade e ao encaixe correto, evitando erros de agendamento ou registros incompatíveis.',
  },
  {
    eyebrow: 'Etapa 05',
    title: 'Confirmação do agendamento',
    text: 'Com workshop e turma definidos, o CRM permite concluir o agendamento. Esse registro formaliza a ação no sistema e garante que a informação fique visível para acompanhamento posterior pela operação.',
  },
  {
    eyebrow: 'Etapa 06',
    title: 'Envios automáticos e usuário no Rubi',
    text: 'Após a confirmação, o processo pode disparar comunicações automáticas, como e-mail, além de permitir a criação opcional de usuário no Rubi quando necessário. Esse fechamento melhora a integração entre atendimento e experiência do aluno.',
  },
]

export default function CrmAgendamentoOficinasPage() {
  return (
    <ModulePageTemplate
      eyebrow="CRM Sankhya"
      title="Agendamento de oficinas no CRM"
      description="Este treinamento mostra como localizar o lead, acessar a aba de oficinas, selecionar workshop e turma, concluir o agendamento e validar os envios automáticos relacionados ao processo."
      introLabel="Panorama"
      introTitle="Como registrar oficinas de forma padronizada"
      introText="O agendamento de oficinas precisa ser executado com clareza para garantir organização, comunicação correta com o lead e rastreabilidade dentro do CRM. Este conteúdo resume a lógica do processo e ajuda a padronizar a operação."
      contentTitle="Principais etapas do agendamento de oficinas"
      contentDescription="Os blocos abaixo sintetizam o fluxo operacional apresentado no treinamento e podem ser usados como apoio rápido pela equipe."
      textBlocks={crmAgendamentoOficinasBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Treinamento: agendamento de oficinas"
      videoDescription="Assista ao vídeo para acompanhar o fluxo de agendamento, desde a localização do lead até a confirmação da oficina e os disparos automáticos."
      videoPlaceholderLabel="Vídeo de agendamento de oficinas"
      heroVideoUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Onbording_srm/agendamento_oficina.mp4"
      sectionVideoUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Onbording_srm/agendamento_oficina.mp4"
    />
  )
}