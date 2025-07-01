import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Proposal from './components/Proposal';
import About from './components/About';
import Method from './components/Method';
import Services from './components/Services';
import Blog from './components/Blog';
import Podcast from './components/Podcast';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Introduction />
      <Proposal />
      <About />
      <Method />
      <Services />
      <Blog />
      <Podcast />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;