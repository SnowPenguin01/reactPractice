import React from 'react';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import CalcSection from '../src/components/CaclSection/CalcSection';
import '../src/styles/App.scss';



function App() {

  return (
    <div className="App">
      <Header />
      <CalcSection />
      <Footer />
    </div>
  );
}

export default App;
