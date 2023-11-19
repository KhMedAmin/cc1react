import React, { useState } from 'react';
import { Link} from 'react-router-dom'
import './Navbar.css'; 
import BtnToggle from './Composents/BtnToggle/BtnToggle';

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbar-container">
      
      
    <div className={`nav-links ${showLinks ? 'show' : ''}`}> 
    
    <Link to={'/tp1'} className="borderYtoX">CALCUL</Link>
    <Link to={'/tp2'} className="borderYtoX">SLIDER</Link>
    <Link to={'/tp3'} className="borderYtoX">TO DO LIST</Link>
    <Link to={'/tpL'} className="borderYtoX">LANGUE</Link>
    <Link to={'/tp4'} className="borderYtoX">API & PAGINATION</Link>
    
    <Link>{<BtnToggle/>}</Link>
    
  </div>
  <button className="toggle-button" onClick={() => setShowLinks(!showLinks)}>Afficher</button>

    </div>
  )
}
