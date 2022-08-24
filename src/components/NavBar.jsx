import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-bold" to="/">Jumia</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = '/products'>Prodact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contact'>Contact</Link>
            </li>
          </ul>

          <div className="button">
            <Link to='/login' className="btn btn-outline-dark me-2"><i className="fa-solid fa-right-to-bracket pe-1"></i> Login</Link>
            <Link to='/register' className="btn btn-outline-dark me-2"><i className="fa-solid fa-user-plus pe-1"></i> Register</Link>
            <Link to='/card' className="btn btn-outline-dark"><i className="fa-solid fa-cart-shopping pe-1"></i> Card (0)</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
