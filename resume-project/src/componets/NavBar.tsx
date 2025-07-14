import { useState } from 'react';
import './componetStyles/Navbar.css';
import { Link } from 'react-router-dom'; 

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Toggle collapse state
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Left section: Logo and toggler */}
        <div className="navbar-left">
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleToggle} 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded={!isCollapsed} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* 
          <div className="backdrop">  
                <img width="25" height="25" src="./command-line.png" alt="Logo" />
                <a>Joaquin R. Trujillo</a>
            </div>
          */}
        </div>

        {/* Right section: Social Media links */}
        <div className="navbar-right">
          <div className="backdrop">
            <a href="https://www.youtube.com/@isolatte3739" target="_blank" rel="noopener noreferrer">
              <img src="./yt_icon_rgb.png" alt="YouTube" width="28" height="25" />
            </a>
            <a href="https://github.com/Iso-latte" target="_blank" rel="noopener noreferrer">
              <img src="./github-mark.png" alt="GitHub" width="25" height="25" />
            </a>
            <a href="https://www.linkedin.com/in/joaquin-trujillo-6476641a1/" target="_blank" rel="noopener noreferrer">
              <img src="./LI-In-Bug.png" alt="LinkedIn" width="28" height="25" />
            </a>
          </div>
        </div>

        {/* Collapsible menu */}
        <div 
          className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} 
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">

            <a href="/" className="nav-link" onClick={() => window.location.href = '/'}>
              <img src="./Home.png" alt="House_photo" />
              Home
            </a>
            {/*
            <Link to="/projects/" className='nav-link'>
              <img src="./Projects.png" alt="Pile_of_papers" />
              Projects
            </Link>  

            <Link to="/timeline/" className='nav-link'>
              <img src="./Timeline.png" alt="Linked-list" />
              Timeline
            </Link>  

            <Link to="/connect/" className='nav-link'>
              <img src="./Email.png" alt="Mail-letter" />
              Connect
            </Link>  
            */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
