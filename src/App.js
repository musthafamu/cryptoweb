import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Home from './Routes/Home';
import Details from './Routes/Details';
import Portfolio from './pages/Portfolio';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

      <>
    <BrowserRouter>
    <ToastContainer/>
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
