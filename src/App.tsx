import React from 'react';
import './App.css';
import { Footer } from './footer/Footer';
import { Home } from './Home/Home';
import { Navbar } from './navbar/Navbar';

function App() {
  return (
    <div>
   <Navbar/>
   <Home/>
   <Footer/>
    </div>
  );
}

export default App;
