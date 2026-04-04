import SectionHeading from '../components/ui/SectionHeading'

const mindsetCards = [
  {
    eyebrow: 'Princípio 01',
    title: 'Não confronte a objeção',
    text: 'Objeção não deve ser tratada como combate. O vendedor precisa acolher, validar a preocupação do cliente e então conduzir a conversa para uma nova leitura de valor, risco e prioridade.',
  },
  {
    eyebrow: 'Princípio 02',
    title: 'Descubra a objeção real',
    text: 'Preço, momento e computador muitas vezes aparecem como barreira principal, mas nem sempre são a causa real. O vendedor precisa entender se existe falta de confiança, medo de errar, insegurança com a própria capacidade ou dúvida sobre retorno.',
  },
  {
    eyebrow: 'Princípio 03',
    title: 'Traga a conversa para valor e futuro',
    text: 'Em educação, o erro mais comum é responder objeção só com condição comercial. O caminho mais forte é mostrar transformação, empregabilidade, repertório, acesso a ferramentas de mercado e qualidade da formação.',
  },
]

const objectionTypes = [
  {
    eyebrow: 'Objeção 01',
    title: '“Está caro”',
    text: 'Essa é a objeção mais comum. Ela pode significar falta de orçamento, falta de comparação justa, baixa percepção de valor ou simples necessidade de segurança antes da decisão.',
  },
  {
    eyebrow: 'Objeção 02',
    title: '“Não tenho esse valor agora”',
    text: 'Aqui o foco é ajudar o cliente a enxergar planejamento, previsibilidade e jornada. Nem sempre a resposta está em pressionar fechamento imediato, mas sim em estruturar caminho viável.',
  },
  {
    eyebrow: 'Objeção 03',
    title: '“Não tenho computador”',
    text: 'Essa objeção deve ser tratada com praticidade e não com bloqueio. O vendedor pode ajudar o cliente a enxergar que a compra do computador também pode ser planejada como parte do projeto de entrada na área.',
  },
  {
    eyebrow: 'Objeção 04',
    title: '“Agora não é o momento”',
    text: 'Normalmente essa fala esconde dúvida, medo, desorganização financeira ou baixa prioridade. O papel do vendedor é entender o que falta para esse momento passar a fazer sentido.',
  },
  {
    eyebrow: 'Objeção 05',
    title: '“Será que a escola é boa mesmo?”',
    text: 'Quando a dúvida é sobre qualidade, a resposta deve usar prova: história da SAGA, pioneirismo, ex-alunos em grandes empresas, parceria oficial com Adobe, aulas ao vivo e atualização constante do conteúdo.',
  },
  {
    eyebrow: 'Objeção 06',
    title: '“Posso aprender sozinho”',
    text: 'Essa objeção precisa ser tratada mostrando diferença entre consumir conteúdo solto e seguir uma jornada estruturada com professor, prática, direcionamento, portfólio, comunidade e evolução guiada.',
  },
]

const valueProofCards = [
  {
    eyebrow: 'Validação',
    title: 'SAGA como referência de mercado',
    text: 'A SAGA pode ser validada como uma escola pioneira, com 25 anos de história, formação de milhares de alunos e presença forte no mercado criativo e digital.',
  },
  {
    eyebrow: 'Validação',
    title: 'Ex-alunos em grandes empresas',
    text: 'Os cases da própria escola mostram ex-alunos que chegaram a empresas de relevância global, incluindo estúdios, empresas de tecnologia, games, audiovisual e produções internacionais.',
  },
  {
    eyebrow: 'Validação',
    title: 'Parceria oficial com a Adobe',
    text: 'A escola trabalha de forma oficial com a Adobe e oferece benefícios exclusivos aos alunos, o que reforça aderência às ferramentas de mercado e credibilidade institucional.',
  },
  {
    eyebrow: 'Validação',
    title: 'Atualização com IA e ferramentas atuais',
    text: 'Além da base técnica, a proposta da SAGA acompanha a evolução do mercado e incorpora o que existe de mais atual, inclusive o uso de inteligência artificial dentro dos próprios softwares e fluxos criativos.',
  },
  {
    eyebrow: 'Validação',
    title: 'Aulas ao vivo e formação guiada',
    text: 'Um ponto forte para quebrar objeção é mostrar que o aluno não compra apenas acesso a conteúdo, mas acompanhamento, professor, prática, ritmo e construção de evolução com direção.',
  },
  {
    eyebrow: 'Validação',
    title: 'Educação como aceleração de caminho',
    text: 'O investimento em formação encurta curva de aprendizado, reduz erro, organiza a jornada e aumenta a chance do aluno realmente desenvolver portfólio, consistência e visão profissional.',
  },
]

const techniqueCards = [
  {
    eyebrow: 'Técnica',
    title: 'Acolher e espelhar',
    text: 'Antes de responder, mostre que entendeu a preocupação. Isso reduz resistência e faz o cliente sentir que está sendo ouvido, e não empurrado para uma decisão.',
  },
  {
    eyebrow: 'Técnica',
    title: 'Isolar a objeção',
    text: 'Descubra se o problema é realmente preço, computador, momento ou confiança. Muitas vezes a primeira objeção é só uma camada superficial da decisão.',
  },
  {
    eyebrow: 'Técnica',
    title: 'Reancorar valor',
    text: 'Depois de acolher, traga a conversa de volta para valor: transformação, estrutura, qualidade, prova social, diferenciais e impacto futuro do investimento.',
  },
  {
    eyebrow: 'Técnica',
    title: 'Usar prova e exemplos',
    text: 'Em venda educacional, depoimentos, cases, histórico da escola, ex-alunos e diferenciais concretos costumam ter mais força do que pressão comercial.',
  },
  {
    eyebrow: 'Técnica',
    title: 'Reduzir risco percebido',
    text: 'O cliente precisa sentir que a decisão é possível e segura. Isso passa por clareza, previsibilidade, explicação da jornada e visão concreta do próximo passo.',
  },
  {
    eyebrow: 'Técnica',
    title: 'Concluir com direção',
    text: 'Toda tratativa de objeção precisa terminar com um avanço: oficina, proposta, matrícula, novo retorno, conversa com responsável ou nova etapa de decisão.',
  },
]

const simulationCards = [
  {
    eyebrow: 'Simulação 01',
    title: 'Objeção de preço',
    objection: '“Achei caro.”',
    response:
      'Eu entendo, e é super válido olhar com cuidado para isso. O mais importante aqui é comparar de forma justa o que você está recebendo: aulas ao vivo, professor, trilha estruturada, prática, portfólio, comunidade, HUB e uma escola com histórico real de formação. Em educação, o mais caro costuma ser perder tempo em caminhos soltos que não geram evolução consistente.',
    nextStep:
      'Faz sentido eu te mostrar por que essa formação entrega mais valor do que apenas olhar o número isolado?',
  },
  {
    eyebrow: 'Simulação 02',
    title: 'Objeção de falta de dinheiro agora',
    objection: '“Não tenho esse valor agora.”',
    response:
      'Perfeito, e eu não quero que isso vire uma decisão impulsiva. O ponto aqui é entender se o curso faz sentido para o seu objetivo. Quando faz, a gente consegue olhar a jornada com mais planejamento, porque a formação não é só um gasto do mês, e sim um investimento em desenvolvimento e entrada mais estruturada no mercado.',
    nextStep:
      'Hoje o que pesa mais para você é o valor imediato ou ainda falta segurança para entender se essa formação realmente vale a pena para o seu momento?',
  },
  {
    eyebrow: 'Simulação 03',
    title: 'Objeção de computador',
    objection: '“Eu não tenho computador agora.”',
    response:
      'Entendi. Nesse caso, vale olhar isso como parte do projeto de entrada na área, e não como bloqueio definitivo. Muita gente começa planejando um computador mais simples para rodar o básico da trilha e organiza isso em paralelo com o início da formação. O importante é não tratar isso como impedimento eterno, e sim como etapa de organização.',
    nextStep:
      'Faz sentido a gente pensar juntos em um caminho viável para você estruturar isso e não adiar seu começo por tempo indefinido?',
  },
  {
    eyebrow: 'Simulação 04',
    title: 'Objeção de momento',
    objection: '“Agora não é o momento.”',
    response:
      'Eu entendo. Quase sempre essa frase aparece quando a pessoa ainda está tentando organizar prioridade, tempo ou segurança na decisão. O ponto principal é entender o que falta para esse momento passar a fazer sentido, porque adiar também tem um custo: tempo perdido, evolução travada e mais distância do objetivo que você quer construir.',
    nextStep:
      'Hoje, o que faz esse não ser o momento ideal para você?',
  },
  {
    eyebrow: 'Simulação 05',
    title: 'Objeção de qualidade',
    objection: '“Mas será que a SAGA é boa mesmo?”',
    response:
      'Essa é uma pergunta importante. A SAGA tem 25 anos de história, é pioneira na área, formou alunos que hoje estão em grandes empresas no Brasil e no exterior, trabalha com aulas ao vivo, acompanha as ferramentas de mercado e ainda tem parceria oficial com a Adobe. Então a conversa aqui não é sobre promessa vazia, e sim sobre uma escola que já provou sua relevância ao longo do tempo.',
    nextStep:
      'Faz sentido eu te mostrar alguns dos diferenciais que mais ajudam a validar essa qualidade para quem está decidindo agora?',
  },
  {
    eyebrow: 'Simulação 06',
    title: 'Objeção de autoaprendizado',
    objection: '“Eu posso aprender sozinho pela internet.”',
    response:
      'Pode sim, e muita gente começa assim. O problema é que conteúdo solto nem sempre gera evolução estruturada. O que a formação faz é organizar caminho, acelerar aprendizado, reduzir tentativa e erro, trazer professor, prática, direção, comunidade e um projeto de desenvolvimento mais consistente.',
    nextStep:
      'O que você sente que hoje te falta mais: conteúdo ou direção para evoluir com mais consistência?',
  },
]

function SimulationCard({ item }) {
  return (
    <article className="module-card">
      <span className="module-card__eyebrow">{item.eyebrow}</span>
      <h3 className="module-card__title">{item.title}</h3>

      <div
        style={{
          marginTop: '18px',
          display: 'grid',
          gap: '14px',
        }}
      >
        <div>
          <strong style={{ color: 'var(--text-primary)' }}>Objeção</strong>
          <p className="module-card__text" style={{ marginTop: '8px' }}>
            {item.objection}
          </p>
        </div>

        <div>
          <strong style={{ color: 'var(--text-primary)' }}>Resposta sugerida</strong>
          <p className="module-card__text" style={{ marginTop: '8px' }}>
            {item.response}
          </p>
        </div>

        <div>
          <strong style={{ color: 'var(--text-primary)' }}>Pergunta de avanço</strong>
          <p className="module-card__text" style={{ marginTop: '8px' }}>
            {item.nextStep}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function ObjecoesPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Objeções</span>
          <h1 className="hero-block__title">Como tratar objeções em venda educacional</h1>
          <p className="hero-block__description">
            Esta página foi pensada para ajudar o vendedor a tratar as
            objeções mais comuns da operação comercial: preço, falta de
            dinheiro no momento, ausência de computador, dúvida sobre
            qualidade e indecisão. O foco não é pressionar, e sim reposicionar
            valor, reduzir risco percebido e conduzir a conversa com mais
            segurança.
          </p>

          <div className="hero-block__actions">
            <a
              href="#simulacoes"
              className="button button--primary"
            >
              Ver simulações
            </a>

            <a
              href="#validacao"
              className="button button--ghost"
            >
              Ver validações da SAGA
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <span>Preço, qualidade, momento e computador</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Mentalidade"
          title="Como pensar antes de responder uma objeção"
          description="O tratamento de objeção começa mais pela postura do vendedor do que pela frase pronta. A lógica correta é acolher, diagnosticar e reposicionar valor."
        />

        <div className="module-grid module-grid--three">
          {mindsetCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Objeções"
          title="As barreiras mais comuns na venda de formação"
          description="Em educação, a objeção quase nunca é só financeira. Muitas vezes ela mistura medo, timing, insegurança e baixa percepção de valor."
        />

        <div className="module-grid module-grid--three">
          {objectionTypes.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="validacao"
        className="content-section"
      >
        <SectionHeading
          eyebrow="Validação"
          title="Provas que ajudam a sustentar valor"
          description="Quando a objeção é sobre preço ou qualidade, o vendedor precisa sair do discurso abstrato e usar prova concreta para validar a decisão."
        />

        <div className="module-grid module-grid--three">
          {valueProofCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Técnicas"
          title="Estruturas úteis para quebrar objeções"
          description="Essas técnicas são inspiradas em princípios clássicos de venda consultiva, prova, redução de risco e condução por perguntas."
        />

        <div className="module-grid module-grid--three">
          {techniqueCards.map((item) => (
            <article
              key={item.title}
              className="module-card"
            >
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="simulacoes"
        className="content-section"
      >
        <SectionHeading
          eyebrow="Simulações"
          title="Scripts práticos para situações reais"
          description="Os exemplos abaixo servem como base de fala. O ideal é adaptar o tom para o contexto do cliente, sem soar decorado ou agressivo."
        />

        <div className="module-grid module-grid--three">
          {simulationCards.map((item) => (
            <SimulationCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </section>
    </main>
  )
}