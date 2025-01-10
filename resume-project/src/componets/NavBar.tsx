import { useState } from 'react';
import './componetStyles/Navbar.css';

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
        </div>

        {/* Right section: Social Media links */}
        <div className="navbar-right">
          <div className="backdrop">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="./yt_icon_rgb.png" alt="YouTube" width="28" height="25" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="./github-mark.png" alt="GitHub" width="25" height="25" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Projects</a>
            <a className="nav-link" href="#">Timeline</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
