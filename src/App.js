import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Home from './Routes/Home';
import Details from './Routes/Details';
import Portfolio from './pages/Portfolio';


function App() {
  return (

      <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/portfolio' element={<Portfolio/>} />
     <Route path='/:id' element={<Details/>} />
    </Routes>
    </BrowserRouter>
    </>
  

  );
}

export default App;
