export const heroSection = {
  eyebrow: 'Portal Comercial',
  title: 'Plataforma modular com visual dark para conteúdo comercial',
  description:
    'Portal interno com trilhas de apoio ao time comercial, organizado em módulos responsivos para consulta rápida de processos, rotinas e treinamentos em vídeo.',
  primaryAction: {
    label: 'Explorar módulos',
    href: '#modulos',
  },
  secondaryAction: {
    label: 'Ver destaques',
    href: '#destaques',
  },
  mediaLabel: 'Imagem / vídeo principal',
}

export const highlightsSection = {
  eyebrow: 'Destaques',
  title: 'Conteúdo organizado para consulta prática',
  description:
    'A estrutura do portal foi pensada para facilitar o acesso a processos, vídeos de treinamento e resumos operacionais da rotina comercial.',
  cards: [
    {
      eyebrow: 'Texto',
      title: 'Conteúdo em módulos',
      text: 'Cada tema é apresentado em blocos independentes, facilitando a leitura, a atualização e a navegação por assunto.',
    },
    {
      eyebrow: 'Vídeo',
      title: 'Treinamentos integrados',
      text: 'Os módulos podem exibir vídeos diretamente na página, tornando a consulta mais prática para onboarding e reciclagem.',
    },
    {
      eyebrow: 'Operação',
      title: 'Consulta rápida do dia a dia',
      text: 'Os resumos estruturados ajudam a equipe a revisar processos importantes sem depender apenas da memória ou de repasses informais.',
    },
  ],
}

export const modulesSection = {
  eyebrow: 'Estrutura',
  title: 'Módulos do portal',
  cards: [
    {
      eyebrow: '01',
      title: 'Onboarding',
      text: 'Conteúdos introdutórios para ambientação da equipe comercial.',
      href: '/onboarding',
    },
    {
      eyebrow: '02',
      title: 'Funil Comercial',
      text: 'Etapas e lógica de condução da jornada comercial.',
      href: '/processo-vendas',
    },
    {
      eyebrow: '03',
      title: 'CRM Sankhya',
      text: 'Treinamentos de visão geral do CRM, matrículas e agendamento de oficinas.',
      href: '/crm-sankhya',
    },
    {
      eyebrow: '04',
      title: 'Abordagem, scripts e objeções',
      text: 'Referências para condução de contato, comunicação comercial e quebra de objeções.',
      href: '/abordagem-scripts',
    },
    {
      eyebrow: '05',
      title: 'Produto e oferta',
      text: 'Resumo dos diferenciais e da apresentação da oferta comercial.',
      href: '/produto-oferta',
    },
    {
      eyebrow: '06',
      title: 'Indicadores e metas',
      text: 'Acompanhamento de performance e leitura dos principais indicadores.',
      href: '/indicadores-metas',
    },
    {
      eyebrow: '07',
      title: 'Pós-venda',
      text: 'Transição do cliente após o fechamento e continuidade da jornada.',
      href: '/pos-venda',
    },
    {
      eyebrow: '08',
      title: 'NEPPO',
      text: 'Manual e visão geral da plataforma omnichannel utilizada no atendimento.',
      href: '/neppo',
    },
    {
      eyebrow: '09',
      title: 'Boas práticas e cases',
      text: 'Exemplos e aprendizados aplicáveis à rotina comercial.',
      href: '/boas-praticas-cases',
    },
    {
      eyebrow: '10',
      title: 'HUB',
      text: 'Central de materiais, acessos e referências de apoio ao ecossistema digital.',
      href: '/hub',
    },
  ],
}