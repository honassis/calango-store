import React from 'react';
import logo from './logo.svg';
import Login from './pages/Login';
import Home from './pages/Home';
import Config from './pages/Config';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Button from '@mui/material/Button';





export default function App() {
  return (


    <Router>
          <div>
      <Button variant="contained"> Olá Mundo</Button>

    </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/config">Config</Link>
            </li>
          </ul>
        </nav>

  
        <Routes>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/config" element={<Config/>}>
            
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

