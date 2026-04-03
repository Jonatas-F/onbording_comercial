import Header from './Header'
import Footer from './Footer'

export default function SiteLayout({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
