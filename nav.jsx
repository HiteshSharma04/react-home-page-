import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


function Navbar({ isDarkMode, toggleDarkMode, toggleblack, black }) {
  function BrightnessToggle({ isDarkMode, black, toggleDarkMode, toggleblack }) {
    return (
      <button
        onClick={() => {
          if (typeof toggleblack === 'function') {
            toggleblack();
          }
          if (typeof toggleDarkMode === 'function') {
            toggleDarkMode();
          }
        }}
        style={{ color: 'aqua', border: '1px solid transparent', backgroundColor: 'transparent' }}
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
        {isDarkMode ? ' Light Mode' : ' Dark Mode'}
        
      </button>
    );
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${isDarkMode ? 'bg-dark' : 'bg-light'}`} >
      <Link to={'/'} className="navbar-brand"><img src={logo} className='App-logo' alt='logo' /></Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
   
      <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '110px', top: '49%', transform: 'translateY(-50%)', color: isDarkMode ? 'text-white' : 'text-black' }} />
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="       Search" 
            aria-label="Search" 
            style={{borderRadius : '20px',width:'700px', backgroundColor: isDarkMode ? 'gray' : 'lightgray'}}
          />
          
       
        <ul className="navbar-nav mr-auto" >
          <li className="nav-item">
            <Link to={'/learn'} className="nav-link" style={{color:'aqua'}}>Learn</Link>
          </li>
          <li className="nav-item">
            <Link to={'/reference'} className="nav-link" style={{color:'aqua'}}>Reference</Link>
          </li>
          <li className="nav-item">
            <Link to={'/community'} className="nav-link" style={{color:'aqua'}}>Community</Link>
          </li>
          <li className="nav-item" style={{color:'aqua'}}>
            <Link to={'/blog'} className="nav-link" style={{color:'aqua'}}>Blog</Link>
          </li>
          <li className="nav-item" >
            <Link to={'/crud'} className="nav-link" style={{color:'aqua'}}>Crud</Link>
          </li>
          
        </ul>
        <BrightnessToggle isDarkMode={isDarkMode} black={black} toggleDarkMode={toggleDarkMode} toggleblack={toggleblack} />
        
      </div>
    </nav>
  );
}

export default Navbar;
