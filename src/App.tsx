import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { HomePage, AboutPage, MethodPage, ServicesPage, BlogPage, PodcastPage, ResourcesPage, ContactPage, LoginPage, RegisterPage } from './components/pages';
import { useScrollToSection } from './hooks/useScrollToSection';

function AppContent() {
  useScrollToSection();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/metodo" element={<MethodPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/recursos" element={<ResourcesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;