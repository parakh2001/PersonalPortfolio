// src/App.tsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Education />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
