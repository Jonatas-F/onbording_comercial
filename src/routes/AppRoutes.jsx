import HomePage from '../pages/HomePage'
import OnboardingPage from '../pages/OnboardingPage'
import ProcessoVendasPage from '../pages/ProcessoVendasPage'
import CrmSankhyaPage from '../pages/CrmSankhyaPage'
import CrmVisaoGeralPage from '../pages/CrmVisaoGeralPage'
import CrmMatriculasPage from '../pages/CrmMatriculasPage'
import CrmAgendamentoOficinasPage from '../pages/CrmAgendamentoOficinasPage'
import AbordagemScriptsPage from '../pages/AbordagemScriptsPage'
import ProdutoOfertaPage from '../pages/ProdutoOfertaPage'
import TecnicasVendaPage from '../pages/TecnicasVendaPage'
import IndicadoresMetasPage from '../pages/IndicadoresMetasPage'
import ObjecoesPage from '../pages/ObjecoesPage'
import BoasPraticasCasesPage from '../pages/BoasPraticasCasesPage'
import BibliotecaPage from '../pages/BibliotecaPage'
import NotFoundPage from '../pages/NotFoundPage'

export const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
    label: 'Home',
  },
  {
    path: '/onboarding',
    element: <OnboardingPage />,
    label: 'Onboarding',
  },
  {
    path: '/processo-vendas',
    element: <ProcessoVendasPage />,
    label: 'Processo de vendas',
  },
  {
    path: '/crm-sankhya',
    element: <CrmSankhyaPage />,
    label: 'CRM Sankhya',
  },
  {
    path: '/crm-sankhya/visao-geral',
    element: <CrmVisaoGeralPage />,
    label: 'Visão geral do CRM',
  },
  {
    path: '/crm-sankhya/matriculas',
    element: <CrmMatriculasPage />,
    label: 'Matrículas',
  },
  {
    path: '/crm-sankhya/agendamento-oficinas',
    element: <CrmAgendamentoOficinasPage />,
    label: 'Agendamento de oficinas',
  },
  {
    path: '/abordagem-scripts',
    element: <AbordagemScriptsPage />,
    label: 'Abordagem e scripts',
  },
  {
    path: '/produto-oferta',
    element: <ProdutoOfertaPage />,
    label: 'Produto e oferta',
  },
  {
    path: '/tecnicas-venda',
    element: <TecnicasVendaPage />,
    label: 'Técnicas de venda',
  },
  {
    path: '/indicadores-metas',
    element: <IndicadoresMetasPage />,
    label: 'Indicadores e metas',
  },
  {
    path: '/objecoes',
    element: <ObjecoesPage />,
    label: 'Objeções',
  },
  {
    path: '/boas-praticas-cases',
    element: <BoasPraticasCasesPage />,
    label: 'Boas práticas e cases',
  },
  {
    path: '/biblioteca',
    element: <BibliotecaPage />,
    label: 'Biblioteca',
  },
  {
    path: '*',
    element: <NotFoundPage />,
    label: '404',
  },
]