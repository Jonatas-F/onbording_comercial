import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import OnboardingPage from '../pages/OnboardingPage'
import ProcessoVendasPage from '../pages/ProcessoVendasPage'
import CrmSankhyaPage from '../pages/CrmSankhyaPage'
import AbordagemScriptsPage from '../pages/AbordagemScriptsPage'
import ProdutoOfertaPage from '../pages/ProdutoOfertaPage'
import TecnicasVendaPage from '../pages/TecnicasVendaPage'
import IndicadoresMetasPage from '../pages/IndicadoresMetasPage'
import ObjecoesPage from '../pages/ObjecoesPage'
import BoasPraticasCasesPage from '../pages/BoasPraticasCasesPage'
import BibliotecaPage from '../pages/BibliotecaPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/processo-vendas" element={<ProcessoVendasPage />} />
      <Route path="/crm-sankhya" element={<CrmSankhyaPage />} />
      <Route path="/abordagem-scripts" element={<AbordagemScriptsPage />} />
      <Route path="/produto-oferta" element={<ProdutoOfertaPage />} />
      <Route path="/tecnicas-venda" element={<TecnicasVendaPage />} />
      <Route path="/indicadores-metas" element={<IndicadoresMetasPage />} />
      <Route path="/objecoes" element={<ObjecoesPage />} />
      <Route path="/boas-praticas-cases" element={<BoasPraticasCasesPage />} />
      <Route path="/biblioteca" element={<BibliotecaPage />} />
    </Routes>
  )
}
