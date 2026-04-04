import { Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import OnboardingPage from '../pages/OnboardingPage'
import ProcessoVendasPage from '../pages/ProcessoVendasPage'
import CrmSankhyaPage from '../pages/CrmSankhyaPage'
import CrmVisaoGeralPage from '../pages/CrmVisaoGeralPage'
import CrmMatriculasPage from '../pages/CrmMatriculasPage'
import CrmAgendamentoOficinasPage from '../pages/CrmAgendamentoOficinasPage'
import AbordagemScriptsPage from '../pages/AbordagemScriptsPage'
import ProdutoOfertaPage from '../pages/ProdutoOfertaPage'
import IndicadoresMetasPage from '../pages/IndicadoresMetasPage'
import BoasPraticasCasesPage from '../pages/BoasPraticasCasesPage'
import HubPage from '../pages/HubPage'
import PosVendaPage from '../pages/PosVendaPage'
import NeppoPage from '../pages/NeppoPage'
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
    label: 'Funil Comercial',
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
    label: 'Abordagem, scripts e objeções',
  },
  {
    path: '/produto-oferta',
    element: <ProdutoOfertaPage />,
    label: 'Produto e oferta',
  },
  {
    path: '/indicadores-metas',
    element: <IndicadoresMetasPage />,
    label: 'Indicadores e metas',
  },
  {
    path: '/pos-venda',
    element: <PosVendaPage />,
    label: 'Pós-venda',
  },
  {
    path: '/neppo',
    element: <NeppoPage />,
    label: 'NEPPO',
  },
  {
    path: '/boas-praticas-cases',
    element: <BoasPraticasCasesPage />,
    label: 'Boas práticas e cases',
  },
  {
    path: '/hub',
    element: <HubPage />,
    label: 'HUB',
  },

  {
    path: '/objecoes',
    element: <Navigate to="/abordagem-scripts" replace />,
    label: 'Redirect Objeções',
  },
  {
    path: '/tecnicas-venda',
    element: <Navigate to="/abordagem-scripts" replace />,
    label: 'Redirect Técnicas de venda',
  },
  {
    path: '/passagem-bastao-onboarding',
    element: <Navigate to="/pos-venda" replace />,
    label: 'Redirect Pós-venda',
  },
  {
    path: '/neppe',
    element: <Navigate to="/neppo" replace />,
    label: 'Redirect NEPPO',
  },
  {
    path: '/biblioteca',
    element: <Navigate to="/hub" replace />,
    label: 'Redirect HUB antigo',
  },

  {
    path: '*',
    element: <NotFoundPage />,
    label: '404',
  },
]