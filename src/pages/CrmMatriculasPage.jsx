import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const crmMatriculasBlocks = [
  {
    eyebrow: 'Etapa 01',
    title: 'Localização do lead',
    text: 'O processo de matrícula começa com a busca correta do lead dentro do CRM. Antes de avançar, é importante confirmar que o cadastro aberto corresponde ao interessado certo e que o histórico está coerente com a negociação realizada.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Acesso à aba de matrícula',
    text: 'Após localizar o lead, o usuário acessa a aba de matrícula para iniciar o fluxo formal. É nessa etapa que o CRM passa do acompanhamento comercial para a preparação efetiva da conversão em contrato.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'Montagem do orçamento',
    text: 'Dentro do fluxo, é necessário gerar o orçamento, validar unidade, selecionar os cursos ou blocos corretos e alinhar a composição da proposta com o que foi negociado com o cliente.',
  },
  {
    eyebrow: 'Etapa 04',
    title: 'Turma e forma de pagamento',
    text: 'Com a proposta estruturada, o próximo passo é escolher a turma adequada e configurar a forma de pagamento. Esse preenchimento precisa ser feito com atenção para garantir consistência entre comercial, contrato e secretaria.',
  },
  {
    eyebrow: 'Etapa 05',
    title: 'Contrato e link de assinatura',
    text: 'Depois da parametrização da matrícula, o CRM permite gerar o contrato e o link para assinatura. Esse momento é decisivo para transformar a negociação em matrícula formalizada e seguir com a finalização do processo.',
  },
  {
    eyebrow: 'Etapa 06',
    title: 'Comprovante e envio para secretaria',
    text: 'Na etapa final, são anexados os comprovantes necessários e o registro segue para a secretaria. Esse fechamento garante que a matrícula não fique apenas no comercial, mas seja encaminhada corretamente para continuidade operacional.',
  },
]

export default function CrmMatriculasPage() {
  return (
    <ModulePageTemplate
      eyebrow="CRM Sankhya"
      title="Fluxo de matrículas dentro do CRM"
      description="Este treinamento mostra o passo a passo da matrícula dentro do CRM, desde a localização do lead até a geração de contrato, definição da turma, configuração do pagamento e envio do processo para a secretaria."
      introLabel="Panorama"
      introTitle="Como estruturar uma matrícula com segurança"
      introText="A matrícula exige atenção aos detalhes porque envolve dados comerciais, acadêmicos e financeiros. O objetivo deste conteúdo é padronizar a execução, reduzir erros operacionais e garantir que a informação siga corretamente para as próximas áreas."
      contentTitle="Principais etapas do processo de matrícula"
      contentDescription="Os blocos abaixo resumem a lógica operacional do treinamento e funcionam como apoio rápido para a equipe durante a rotina."
      textBlocks={crmMatriculasBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Treinamento: matrículas no CRM"
      videoDescription="Assista ao vídeo para acompanhar o fluxo de matrícula, incluindo orçamento, turma, forma de pagamento, contrato, assinatura e encaminhamento final."
      videoPlaceholderLabel="Vídeo de matrículas no CRM"
      heroVideoUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Onbording_srm/matricula.mp4"
      sectionVideoUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Onbording_srm/matricula.mp4"
    />
  )
}