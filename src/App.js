import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CalcSection from './components/CalcSection';
import '../src/styles/App.css';



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
