function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="brand">
          <div className="logo-box">MA</div>

          <div className="brand-text">
            <h2>Mohammed Asif</h2>
            <p>DATA ANALYST</p>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="connect-btn">
          Let's Connect <span>→</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;