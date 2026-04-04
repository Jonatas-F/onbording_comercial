import SectionHeading from '../components/ui/SectionHeading'

const contextCards = [
  {
    eyebrow: 'Triagem inicial',
    title: 'O lead pode chegar pré-qualificado pelo WhatsApp',
    text: 'Antes de cair no atendimento humano, muitos leads passam por uma triagem inicial no WhatsApp. Nessa etapa, já podem ser identificados pontos como área de interesse, objetivo inicial, se possui computador, se conhece a SAGA e outros contextos úteis para a continuação da conversa.',
  },
  {
    eyebrow: 'NEPPO',
    title: 'O atendimento acontece dentro do NEPPO',
    text: 'Quando esse lead chega ao time, a conversa fica visível no NEPPO, que é a plataforma omnichannel utilizada pela operação. Ali, o atendente já consegue ler parte do histórico e aproveitar informações levantadas antes do contato humano.',
  },
  {
    eyebrow: 'Direcionamento',
    title: 'Na maioria dos casos o lead vai primeiro para a SDR',
    text: 'Geralmente, o lead triado segue primeiro para a SDR, que tenta realizar agenda e organizar o próximo passo. Dependendo do contexto, ele também pode ser direcionado ao vendedor, que deve assumir a conversa com continuidade e não como se fosse um primeiro contato frio.',
  },
]

const neppeReadingCards = [
  {
    eyebrow: 'Leitura 01',
    title: 'Área de interesse',
    text: 'Em muitos casos, o lead já chega com uma zona de interesse mapeada, como Design, Audiovisual, 3D ou Game. Isso ajuda o vendedor a começar com mais assertividade e menos tentativa e erro.',
  },
  {
    eyebrow: 'Leitura 02',
    title: 'Conhecimento prévio sobre a SAGA',
    text: 'Também pode vir sinalizado se o lead já conhecia a SAGA ou se está tendo o primeiro contato com a marca. Esse detalhe muda a forma de apresentar a escola e o nível de contexto que precisa ser construído na conversa.',
  },
  {
    eyebrow: 'Leitura 03',
    title: 'Estrutura mínima para estudar',
    text: 'A triagem inicial também pode mostrar se o lead possui computador e, em alguns casos, onde mora. Isso ajuda o vendedor a entender rapidamente se o formato online faz sentido ou se existe contexto para outra alternativa de atendimento.',
  },
]

const conductionCards = [
  {
    eyebrow: 'Condução 01',
    title: 'Não repita tudo o que a IA já perguntou',
    text: 'Se a triagem já trouxe informações úteis, o vendedor deve evitar repetir tudo de forma mecânica. O ideal é validar com naturalidade e aprofundar apenas o que realmente ajuda a avançar a conversa.',
  },
  {
    eyebrow: 'Condução 02',
    title: 'Continue a conversa, não reinicie',
    text: 'A postura correta é assumir que o lead já começou uma jornada. Em vez de reiniciar a abordagem, o vendedor deve mostrar que entendeu o contexto e que agora vai ajudar a direcionar a melhor opção para aquele momento.',
  },
  {
    eyebrow: 'Condução 03',
    title: 'Use o histórico para aquecer melhor',
    text: 'Quando o histórico mostra a área de interesse, o conhecimento sobre a SAGA e a estrutura do lead, isso encurta caminho. O vendedor consegue aquecer com mais qualidade, construir valor mais rápido e reduzir ruído no atendimento.',
  },
]

const aiDirectionCards = [
  {
    eyebrow: 'Direcionamento da IA',
    title: 'Identificação da área principal',
    text: 'A IA tende a descobrir logo no início qual área mais chama atenção do lead. Isso já orienta a continuação da conversa comercial e ajuda o vendedor a conectar melhor a trilha certa com o objetivo da pessoa.',
  },
  {
    eyebrow: 'Direcionamento da IA',
    title: 'Validação de interesse real',
    text: 'Além da área, a IA busca entender se existe interesse real em estudar, se o lead está apenas pesquisando ou se já demonstra intenção de evoluir na jornada.',
  },
  {
    eyebrow: 'Direcionamento da IA',
    title: 'Leitura de contexto antes do humano',
    text: 'A IA também pode levantar se o lead já conhecia a SAGA, se veio por oficina gratuita ou por curso, e se possui estrutura mínima para acompanhar as aulas. Isso ajuda o humano a entrar com mais contexto e menos atrito.',
  },
]

const scriptCards = [
  {
    eyebrow: 'Script 01',
    title: 'Abertura para lead já triado',
    text: 'Oi! Vi que você demonstrou interesse em uma das áreas da SAGA. Quero entender rapidinho melhor seu momento para te direcionar da forma mais assertiva possível.',
  },
  {
    eyebrow: 'Script 02',
    title: 'Aprofundamento com base no histórico',
    text: 'Vi que você já teve um primeiro contato com a nossa triagem. Então, em vez de começar tudo do zero, quero aprofundar só o que faz mais sentido para te indicar o melhor caminho.',
  },
  {
    eyebrow: 'Script 03',
    title: 'Validação de objetivo',
    text: 'Hoje você está olhando para essa área mais pensando em carreira, portfólio, mudança de área ou para começar a aprender com mais estrutura?',
  },
  {
    eyebrow: 'Script 04',
    title: 'Construção de valor',
    text: 'O que faz a SAGA ser diferente é que a formação não fica só em conteúdo solto. Você entra em uma jornada com aulas ao vivo, professores com vivência de mercado, prática, comunidade, HUB e uma proposta pensada para evolução real.',
  },
  {
    eyebrow: 'Script 05',
    title: 'Transição para próximo passo',
    text: 'Pelo que você me contou, faz sentido eu te mostrar a trilha que mais conversa com seu momento e com o tipo de resultado que você quer construir agora.',
  },
  {
    eyebrow: 'Script 06',
    title: 'Encaminhamento natural',
    text: 'Com esse contexto, consigo te direcionar melhor e seguir com você no próximo passo, seja agenda, oficina, proposta ou avanço para matrícula.',
  },
]

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

const objectionTechniqueCards = [
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

const sellerGuidelines = [
  {
    eyebrow: 'Diretriz',
    title: 'Soe humano e contextual',
    text: 'Como o lead pode já ter falado com a IA, a etapa humana precisa ser mais natural, personalizada e segura. O valor do vendedor está justamente em aprofundar, interpretar e conduzir com mais sensibilidade.',
  },
  {
    eyebrow: 'Diretriz',
    title: 'Leia o que já veio no NEPPO',
    text: 'Antes de responder, vale sempre observar o histórico e os sinais que já vieram filtrados. Isso evita retrabalho e melhora a experiência do lead.',
  },
  {
    eyebrow: 'Diretriz',
    title: 'Conclua sempre com um próximo passo claro',
    text: 'Toda boa abordagem precisa terminar com direção: agenda, oficina, retorno com responsável, proposta, matrícula ou continuidade do atendimento comercial.',
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

export default function AbordagemScriptsPage() {
  return (
    <main className="page page--home">
      <section className="hero-block">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">Abordagem, scripts e objeções</span>
          <h1 className="hero-block__title">Abordagem, scripts e objeções</h1>
          <p className="hero-block__description">
            Esta página reúne orientações para abordagem comercial, leitura do
            histórico do lead no NEPPO, continuidade da conversa após a triagem
            da IA, uso de scripts e tratamento das objeções mais comuns da
            operação. O foco é transformar contexto em condução mais natural,
            segura e comercialmente mais eficiente.
          </p>

          <div className="hero-block__actions">
            <a href="#scripts" className="button button--primary">
              Ver scripts
            </a>
            <a href="#objecoes" className="button button--ghost">
              Ver objeções
            </a>
            <a href="#diretrizes" className="button button--ghost">
              Ver diretrizes
            </a>
          </div>
        </div>

        <div className="hero-block__media">
          <div className="media-placeholder media-placeholder--large">
            <img
              src="https://cdn.saga.com.br/files01/comercial_treinamento/Assets/Dicas.png"
              alt="Abordagem, scripts e objeções"
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
          title="Como esse lead normalmente chega para o time"
          description="Antes de falar com SDR ou vendedor, muitos leads já passaram por uma triagem inicial. Isso muda a forma correta de abordar e exige mais leitura de contexto do que repetição de perguntas."
        />

        <div className="module-grid module-grid--three">
          {contextCards.map((item) => (
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
          eyebrow="Leitura do lead"
          title="O que normalmente já pode estar filtrado no NEPPO"
          description="Ao abrir a conversa, o vendedor pode já encontrar pistas relevantes deixadas pela triagem inicial. Isso ajuda a tornar a abordagem mais inteligente e menos repetitiva."
        />

        <div className="module-grid module-grid--three">
          {neppeReadingCards.map((item) => (
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
          eyebrow="IA no WhatsApp"
          title="Como a triagem inicial já ajuda o vendedor"
          description="A IA já entra com uma lógica de filtragem que economiza tempo e ajuda a deixar o atendimento humano mais objetivo e mais comercial."
        />

        <div className="module-grid module-grid--three">
          {aiDirectionCards.map((item) => (
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
          eyebrow="Condução"
          title="Como continuar a conversa sem parecer repetitivo"
          description="O vendedor deve assumir que a jornada do lead já começou. O objetivo agora é aprofundar, aquecer e conduzir para o próximo passo comercial."
        />

        <div className="module-grid module-grid--three">
          {conductionCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="scripts" className="content-section">
        <SectionHeading
          eyebrow="Scripts"
          title="Exemplos de fala para leads já pré-triados"
          description="Esses exemplos servem como apoio para o vendedor construir uma fala mais natural, humana e contextual."
        />

        <div className="module-grid module-grid--three">
          {scriptCards.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="objecoes" className="content-section">
        <SectionHeading
          eyebrow="Mentalidade"
          title="Como pensar antes de responder uma objeção"
          description="O tratamento de objeção começa mais pela postura do vendedor do que pela frase pronta. A lógica correta é acolher, diagnosticar e reposicionar valor."
        />

        <div className="module-grid module-grid--three">
          {mindsetCards.map((item) => (
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
          eyebrow="Objeções"
          title="As barreiras mais comuns na venda de formação"
          description="Em educação, a objeção quase nunca é só financeira. Muitas vezes ela mistura medo, timing, insegurança e baixa percepção de valor."
        />

        <div className="module-grid module-grid--three">
          {objectionTypes.map((item) => (
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
          eyebrow="Validação"
          title="Provas que ajudam a sustentar valor"
          description="Quando a objeção é sobre preço ou qualidade, o vendedor precisa sair do discurso abstrato e usar prova concreta para validar a decisão."
        />

        <div className="module-grid module-grid--three">
          {valueProofCards.map((item) => (
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
          eyebrow="Técnicas"
          title="Estruturas úteis para quebrar objeções"
          description="Essas técnicas ajudam o vendedor a acolher, isolar a objeção real, reancorar valor e conduzir o próximo passo com mais clareza."
        />

        <div className="module-grid module-grid--three">
          {objectionTechniqueCards.map((item) => (
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
          eyebrow="Simulações"
          title="Scripts práticos para situações reais"
          description="Os exemplos abaixo servem como base de fala. O ideal é adaptar o tom para o contexto do cliente, sem soar decorado ou agressivo."
        />

        <div className="module-grid module-grid--three">
          {simulationCards.map((item) => (
            <SimulationCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="diretrizes" className="content-section">
        <SectionHeading
          eyebrow="Diretrizes"
          title="Boas práticas para o atendimento humano"
          description="O valor do atendimento humano está em interpretar melhor o contexto, construir segurança e conduzir com clareza."
        />

        <div className="module-grid module-grid--three">
          {sellerGuidelines.map((item) => (
            <article key={item.title} className="module-card">
              <span className="module-card__eyebrow">{item.eyebrow}</span>
              <h3 className="module-card__title">{item.title}</h3>
              <p className="module-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}