import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, NeuralNetworkBackground, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative'>
      <NeuralNetworkBackground />
      <div className='relative z-10'>
        <div className='bg-transparent'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
