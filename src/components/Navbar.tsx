  interface Alert {
    type: string;
    location: string;
    time: string;
  }

  interface LeftSidebarProps {
    onSearch: (searchTerm: string) => void;
    onFilter: (type: string) => void;
    onAlertClick: (alert: Alert) => void;
  }

  const Navbar: React.FC<LeftSidebarProps> = ({
    onSearch,
    onFilter,
    onAlertClick,
  }) => {
    return (
      <nav className="navbar navbar-expand-lg fixed-top px-4 my-3 mx-3 rounded-pill" style={{ backgroundColor: '#1a2639', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-danger fw-bold" href="#">Disalert</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Alerts</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Disaster Types
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: '#1a2639' }}>
                  <li><a className="dropdown-item text-light" href="#">Earthquake</a></li>
                  <li><a className="dropdown-item text-light" href="#">Flood</a></li>
                  <li><a className="dropdown-item text-light" href="#">Hurricane</a></li>
                  <li><a className="dropdown-item text-light" href="#">Wildfire</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item text-light" href="#">All Disasters</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="https://www.redcross.org/get-help.html" target="_blank" rel="noopener noreferrer">Emergency Resources</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 bg-light text-dark border-0 rounded-pill" type="search" placeholder="Search alerts..." aria-label="Search" />
              <button className="btn rounded-pill" type="submit" onClick={() => onSearch} style={{ backgroundColor: '#ff1493', color: '#ffffff' }}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }

  export default Navbar