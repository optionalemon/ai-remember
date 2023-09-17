import { BrowserRouter } from 'react-router-dom';

import { Game, About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Work, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-purple">
        <div className="sm:bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Game />
        <About />
        <Experience />
        <Tech />
        <Work />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
