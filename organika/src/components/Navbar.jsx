import { useContext } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/DataContext';

function Navbar() {

  const { user, cart } = useContext(DataContext);

  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Organika
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/catalog" style={{ color: 'white' }}>
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about" style={{ color: 'white' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin" style={{ color: 'white' }}>
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact" style={{ color: 'white' }}>
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <label className='btn btn-light btn-user'>{user.name}</label>
            <Link className="btn btn-outline-success ms-2" to="/cart">
              <span class="badge text-bg-light">{cart.length}</span>

              <i class="fa-solid fa-cart-shopping ms-2"></i>
            </Link>
          </form>
        </div>
      </div>
    </nav >
  );

}

export default Navbar;