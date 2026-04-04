import ModulePageTemplate from '../components/blocks/ModulePageTemplate'

const processoVendasBlocks = [
  {
    eyebrow: 'Etapa 01',
    title: 'Origem dos leads',
    text: 'As fontes mais comuns de entrada são as LPs de oficinas e as LPs de cursos. O cliente é impactado por anúncio, acessa a landing page, recebe as informações do serviço e, ao se cadastrar, passa a ser tratado como lead dentro da operação comercial.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Mensagem ativa e triagem no WhatsApp',
    text: 'Depois do cadastro, o lead recebe uma mensagem ativa via WhatsApp. Ao responder, ele entra na triagem da IA, que ajuda a aquecer a conversa e entender pontos como interesse, área desejada, se possui computador, se já conhecia a SAGA e se já teve contato anterior com a escola.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'SDR como ponte para agenda',
    text: 'Após a triagem inicial, o lead geralmente segue para a SDR, que aquece melhor o contato e tenta realizar o agendamento para o vendedor. Essa etapa é importante para preparar o terreno e fazer o closer entrar em uma conversa mais qualificada.',
  },
  {
    eyebrow: 'Etapa 04',
    title: 'Closer ou vendedor no fechamento',
    text: 'O closer entra quando a conversa já tem mais contexto, seja após agenda, seja em alguns fluxos em que o próprio lead quer seguir pelo WhatsApp. O papel do vendedor é aprofundar o diagnóstico, construir valor, tratar objeções e conduzir o lead até oficina, proposta, matrícula ou fechamento.',
  },
  {
    eyebrow: 'Etapa 05',
    title: 'Leads mais quentes e fontes especiais',
    text: 'Além das LPs, existem contatos vindos diretamente do site, que tendem a chegar mais quentes porque o próprio lead procurou a SAGA. Também entram na operação ex-alunos, alunos próximos de concluir e bases de repique, que podem ser trabalhadas diretamente pelo vendedor ou por ações ativas da equipe.',
  },
  {
    eyebrow: 'Etapa 06',
    title: 'Reativação e uso de base própria',
    text: 'Em momentos de menor temperatura comercial, o vendedor também pode reaproveitar a própria base de contatos não fechados, tentando reativar oportunidades antigas. Essa frente complementa o funil principal e ajuda a ampliar resultado sem depender apenas do lead novo.',
  },
]

export default function ProcessoVendasPage() {
  return (
    <ModulePageTemplate
      eyebrow="Funil Comercial"
      title="Funil Comercial"
      description="Esta página resume o funil comercial da operação: entrada por LPs e site, triagem inicial no WhatsApp com IA, passagem pela SDR, atendimento do closer e uso de bases complementares para reativação e fechamento."
      introLabel="Panorama"
      introTitle="Como funciona o fluxo comercial da operação"
      introText="O objetivo deste módulo é dar uma visão clara do caminho percorrido pelo lead dentro da operação comercial. Entender esse fluxo ajuda o time a saber de onde o lead veio, em que estágio está e como conduzir o próximo passo com mais contexto."
      contentTitle="Etapas principais do funil comercial"
      contentDescription="Os blocos abaixo organizam a lógica operacional do processo, desde a geração do lead até o uso de bases reativadas e contatos direcionados ao vendedor."
      textBlocks={processoVendasBlocks}
      videoEyebrow="Vídeo"
      videoTitle="Treinamento: funil e processo comercial"
      videoDescription="Assista ao vídeo para entender a lógica das LPs, da triagem via WhatsApp, da passagem pela SDR, do papel do closer e das demais fontes de lead trabalhadas pela operação."
      videoPlaceholderLabel="Vídeo do fluxo comercial"
      heroImageUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Assets/funil.png"
      heroImageAlt="Funil Comercial"
      heroVideoUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Onbording_srm/Funil.mp4"
      sectionVideoUrl="https://cdn.saga.com.br/files01/comercial_treinamento/Onbording_srm/Funil.mp4"
    />
  )
}