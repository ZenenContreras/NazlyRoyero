import { Hero, Introduction, Proposal, About, Method, Services, Contact } from '../sections';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Introduction />
      <Proposal />
      <About />
      <Method />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
