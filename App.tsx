import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingActions from './components/Layout/FloatingActions';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 antialiased bg-white selection:bg-dsu-gold selection:text-dsu-blue">
      <Header />
      <FloatingActions />
      <Home />
      <Footer />
    </div>
  );
}

export default App;