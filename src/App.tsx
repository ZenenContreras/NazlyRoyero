import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import ErrorBoundary from './components/ErrorBoundary';
import { HomePage, AboutPage, MethodPage, MethodCasaPage, ServicesPage, BlogPage, PodcastPage, ResourcesPage, ContactPage, LoginPage, RegisterPage, NotFoundPage } from './components/pages';
import { useScrollToSection } from './hooks/useScrollToSection';

function AppContent() {
  useScrollToSection();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/metodo-estrella" element={<MethodPage />} />
        <Route path="/metodo-casa" element={<MethodCasaPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/recursos" element={<ResourcesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        {/* Ruta catch-all para 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;