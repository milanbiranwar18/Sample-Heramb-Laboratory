
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RND from "./pages/RND";
import Testing from "./pages/Testing";
import Production from "./pages/Production";
import PopupBoxes from './pages/PopupBoxes';
import Products from './pages/Products';
import Rewards from './pages/Rewards';



function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Navbar />
        
        {/* Content goes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rnd" element={<RND />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/production" element={<Production />} />
        <Route path="/products" element={<Products />} />
        <Route path="/rewards" element={<Rewards />} />

        </Routes>
        

        {/* <PopupBoxes /> */}
        {/* Footer should be inside the main container */}
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
