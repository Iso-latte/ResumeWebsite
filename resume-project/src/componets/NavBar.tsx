import './componetStyles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        {/* Left section: Logo and name */}
        <div className="navbar-left">
            <div className="backdrop">  
                <img width="25" height="25" src="/command-line.png" alt="Logo" />
                <span>Joaquin R. Trujillo</span>
            </div>
        </div>

        {/* Right section: Links */}
        <div className="navbar-right">
           <div className="backdrop">
           <a href="https://www.youtube.com/channel/UCJ9e_cVQHkYrV3nhinpNKVw" target="_blank" rel="noopener noreferrer">
                <img width="28" height="25" src="/yt_icon_rgb.png" alt="Youtube" />
            </a>
            <a href="https://github.com/Iso-latte" target="_blank" rel="noopener noreferrer">
                <img width="25" height="25" src="/github-mark.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/joaquin-trujillo-6476641a1/" target="_blank" rel="noopener noreferrer">
                <img width="28" height="25" src="/LI-In-Bug.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
