import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { OurStore } from './pages/OurStore';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='store' element={<OurStore/>}/>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
