import SectionHeading from '../components/ui/SectionHeading'

const purposeCards = [
  {
    eyebrow: 'Objetivo',
    title: 'Fidelizar e reduzir risco de queda',
    text: 'O pós-venda existe para garantir continuidade após a matrícula, fortalecer a confiança do cliente, reduzir inseguranças do início da jornada e aumentar a chance de permanência ativa na escola.',
  },
  {
    eyebrow: 'Momento',
    title: 'Acontece logo após matrícula e contrato',
    text: 'Assim que a venda é fechada, a matrícula concluída e o contrato assinado, o onboarding deve ser agendado. Esse encontro marca a transição entre comercial e relacionamento.',
  },
  {
    eyebrow: 'Intenção',
    title: 'Organizar a entrada do aluno',
    text: 'Nesse momento, o cliente tira dúvidas sobre contrato, funcionamento da escola, acesso ao HUB, aulas ao vivo, materiais, chamadas e canais de comunicação com a escola.',
  },
]

const onboardingMeetingCards = [
  {
    eyebrow: 'Encontro',
    title: 'Reunião obrigatória de onboarding',
    text: 'O onboarding é obrigatório e precisa acontecer para que o cliente comece com clareza e segurança. É nele que o time de relacionamento apresenta a estrutura inicial da experiência do aluno.',
  },
  {
    eyebrow: 'Conteúdo',
    title: 'Apresentação do HUB e da rotina acadêmica',
    text: 'Durante a reunião, o cliente entende como acessar o portal do aluno, entrar nas aulas ao vivo, baixar materiais, responder chamadas e se relacionar com a escola pelos canais corretos.',
  },
  {
    eyebrow: 'Relacionamento',
    title: 'Primeiro vínculo após o fechamento',
    text: 'Além do aspecto operacional, o onboarding reforça cuidado, acompanhamento e proximidade. Ele ajuda a consolidar a percepção de suporte e organização no início da jornada do aluno.',
  },
]

const flowSteps = [
  {
    eyebrow: 'Etapa 01',
    title: 'Agendamento pelo vendedor',
    text: 'Assim que a matrícula é concluída e o contrato é assinado, o vendedor deve realizar o agendamento do onboarding. Essa é a responsabilidade inicial do comercial dentro do fluxo de pós-venda.',
  },
  {
    eyebrow: 'Etapa 02',
    title: 'Envio do template ativo pelo atendimento',
    text: 'Depois que o onboarding é agendado, o time de relacionamento/atendimento deve enviar a mensagem ativa de confirmação ao cliente utilizando o template oficial destacado nesta página.',
  },
  {
    eyebrow: 'Etapa 03',
    title: 'Monitoramento do comparecimento',
    text: 'Cabe ao time de atendimento acompanhar se o cliente compareceu ao onboarding, mantendo o controle da realização e garantindo que a etapa aconteça de forma efetiva.',
  },
  {
    eyebrow: 'Etapa 04',
    title: 'Reagendamento quando houver ausência',
    text: 'Se o cliente não comparecer, o atendimento deve assumir o papel principal de mediação, enviar o template de ausência e buscar uma nova data e horário para reagendar o onboarding.',
  },
  {
    eyebrow: 'Etapa 05',
    title: 'Comercial ciente, atendimento como responsável principal',
    text: 'Se houver ausência, o comercial deve ser mantido informado, mas a condução principal passa a ser do time de relacionamento/atendimento, que deve garantir a execução do onboarding.',
  },
  {
    eyebrow: 'Etapa 06',
    title: 'Conclusão da entrada com segurança',
    text: 'Quando o onboarding acontece, o cliente inicia sua jornada com mais clareza, confiança e menor risco de atrito. Isso fortalece a experiência e contribui para retenção e fidelização.',
  },
]

const responsibilityCards = [
  {
    eyebrow: 'Vendedor',
    title: 'Responsável pelo agendamento inicial',
    text: 'O vendedor deve concluir o agendamento do onboarding assim que a venda for finalizada. Ele pode auxiliar depois, mas sua responsabilidade principal é garantir que a reunião seja marcada corretamente.',
  },
  {
    eyebrow: 'Atendimento',
    title: 'Responsável pela ativação e monitoramento',
    text: 'Depois do agendamento, o time de relacionamento/atendimento deve enviar a mensagem ativa, acompanhar a presença do cliente, agir em caso de ausência e apoiar o reagendamento quando necessário.',
  },
  {
    eyebrow: 'Operação',
    title: 'Continuidade da jornada do cliente',
    text: 'O comercial precisa estar ciente da evolução, mas o papel principal após o agendamento passa a ser do atendimento. O objetivo é garantir que o onboarding realmente aconteça e que a matrícula não caia.',
  },
]

const onboardingTopics = [
  {
    eyebrow: 'Tema 01',
    title: 'Contrato e funcionamento da escola',
    text: 'O cliente pode esclarecer dúvidas importantes sobre regras, dinâmica de funcionamento e pontos principais do contrato já com o time de relacionamento/atendimento.',
  },
  {
    eyebrow: 'Tema 02',
    title: 'Acesso ao HUB e às aulas',
    text: 'É apresentado como acessar o portal do aluno, localizar as aulas ao vivo, entrar corretamente na rotina de acompanhamento e navegar pela experiência digital.',
  },
  {
    eyebrow: 'Tema 03',
    title: 'Materiais, chamadas e comunicação',
    text: 'O cliente entende como baixar materiais, responder chamadas e quais são os canais corretos para se comunicar com a escola e com o time de relacionamento.',
  },
]

const confirmationTemplate = `Olá, **{NOME_DO_CLIENTE}**! 😊

Seu onboarding foi agendado com sucesso para **{HORARIO_DO_ONBOARDING}**.

Esse encontro é **obrigatório**, pois nele vamos te mostrar tudo o que você precisa para começar bem sua experiência com a escola, como:

* como acessar a plataforma;
* como assistir às aulas;
* como baixar os conteúdos de aula;
* como se comunicar com a escola;
* e esclarecer as principais dúvidas sobre o contrato e funcionamento.

Caso tenha qualquer dúvida antes do onboarding, ou se precisar **reagendar**, basta responder por este canal.

Estamos à disposição e será um prazer te acompanhar nesse início! 💙`

const rescheduleTemplate = `Olá, **{NOME_DO_CLIENTE}**! 😊

Percebemos que você não conseguiu participar do onboarding agendado.

Como esse encontro é **obrigatório** e muito importante para apresentar a plataforma, o acesso às aulas, os conteúdos, os canais de comunicação com a escola e esclarecer suas principais dúvidas, queremos reagendar com você.

Por favor, nos informe **qual a melhor data e horário** para realizarmos um novo agendamento.

Ficamos à disposição por este canal para te ajudar! 💙`

function TemplateCard({ eyebrow, title, templateName, content }) {
  return (
    <article className="module-card">
      <span className="module-card__eyebrow">{eyebrow}</span>
      <h3 className="module-card__title">{title}</h3>

      <div
        style={{
          marginTop: '18px',
          display: 'inline-flex',
          alignItems: 'center',
          padding: '10px 14px',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(255,255,255,0.05)',
          color: 'var(--text-primary)',
          fontSize: '0.92rem',
          fontWeight: 600,
        }}
      >
        {templateName}
      </div>

      <div
        style={{
          marginTop: '18px',
          padding: '18px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.03)',
        }}
      >
        <pre
          style={{
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontFamily: 'inherit',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            fontSize: '0.98rem',
          }}
        >
          {content}
        </pre>
      </div>
    </article>
  )
}

export default function PosVendaPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Pós-venda</span>
          <h1 className="hero-block__title">Pós-venda e onboarding do cliente</h1>
          <p className="hero-block__description">
            Esta página organiza o fluxo do pós-venda logo após o fechamento da
            matrícula e a assinatura do contrato. O objetivo é garantir
            onboarding, reduzir risco de queda, fidelizar o cliente e assegurar
            uma entrada mais clara, acompanhada e bem conduzida.
          </p>

          <div className="hero-block__actions">
            <a
              href="https://calendar.app.google/PxwpSZzNzEkAG4JP9"
              target="_blank"
              rel="noreferrer"
              className="button button--primary"
            >
              Abrir link de agendamento
            </a>

            <a href="#fluxo" className="button button--ghost">
              Ver fluxo
            </a>

            <a href="#templates" className="button button--ghost">
              Ver templates
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <img
              src="https://cdn.saga.com.br/files01/comercial_treinamento/Assets/pos.png"
              alt="Pós-venda e onboarding do cliente"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                opacity: 0.96,
              }}
            />
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Panorama"
          title="Intenção do pós-venda"
          description="O pós-venda é a etapa que sustenta a transição entre comercial e relacionamento, reforça confiança, organiza a entrada do aluno e contribui diretamente para fidelização e retenção."
        />

        <div className="module-grid module-grid--three">
          {purposeCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Onboarding"
          title="O que acontece na reunião"
          description="A reunião é obrigatória e acontece logo após o fechamento. Ela serve para apresentar a escola, esclarecer dúvidas do contrato e mostrar o funcionamento prático da jornada do aluno."
        />

        <div className="module-grid module-grid--three">
          {onboardingMeetingCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Conteúdo"
          title="Principais temas apresentados ao cliente"
          description="Durante o onboarding, o time de relacionamento/atendimento apresenta os pontos essenciais para que o aluno comece com mais clareza e autonomia."
        />

        <div className="module-grid module-grid--three">
          {onboardingTopics.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="fluxo" className="content-section">
        <SectionHeading
          eyebrow="Fluxo"
          title="Como funciona o processo de pós-venda"
          description="A lógica abaixo organiza o papel do comercial e do atendimento desde o agendamento inicial até o monitoramento, eventual reagendamento e conclusão do onboarding."
        />

        <div className="module-grid module-grid--three">
          {flowSteps.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Responsabilidades"
          title="Qual é o papel de cada time"
          description="O vendedor agenda o onboarding. Depois disso, a responsabilidade principal de acompanhamento passa a ser do time de relacionamento/atendimento."
        />

        <div className="module-grid module-grid--three">
          {responsibilityCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="agendamento" className="content-section">
        <SectionHeading
          eyebrow="Agendamento"
          title="Link usado pelo comercial"
          description="Este é o link que o vendedor deve utilizar para realizar o agendamento do onboarding logo após a conclusão da matrícula e assinatura do contrato."
        />

        <a
          href="https://calendar.app.google/PxwpSZzNzEkAG4JP9"
          target="_blank"
          rel="noreferrer"
          className="module-card module-card--link"
        >
          <span className="module-card__eyebrow">Link oficial</span>
          <h3 className="module-card__title">Abrir agenda do onboarding</h3>
          <p className="module-card__text">
            https://calendar.app.google/PxwpSZzNzEkAG4JP9
          </p>
        </a>
      </section>

      <section id="templates" className="content-section">
        <SectionHeading
          eyebrow="Templates"
          title="Mensagens usadas pelo atendimento"
          description="Após o agendamento, o atendimento deve usar o template de confirmação. Se o cliente não comparecer, o time deve enviar o template de reagendamento e assumir a mediação do próximo passo."
        />

        <div className="module-grid module-grid--three">
          <TemplateCard
            eyebrow="Template 01"
            title="Confirmação do onboarding"
            templateName="confirmacao_pv"
            content={confirmationTemplate}
          />

          <TemplateCard
            eyebrow="Template 02"
            title="Reagendamento por ausência"
            templateName="reagendar_pv"
            content={rescheduleTemplate}
          />

          <article className="module-card">
            <span className="module-card__eyebrow">Aplicação</span>
            <h3 className="module-card__title">Quando cada template deve ser usado</h3>
            <p className="module-card__text">
              O template <strong>confirmacao_pv</strong> deve ser enviado assim
              que o vendedor concluir o agendamento do onboarding. O template{' '}
              <strong>reagendar_pv</strong> deve ser enviado pelo atendimento se
              o cliente não comparecer, com o objetivo de retomar contato e
              garantir uma nova data.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}