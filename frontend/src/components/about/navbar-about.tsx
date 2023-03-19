import React from 'react'
import { Link } from "react-router-dom"

function NavbarAbout() {
  return (
    <div>
      <nav style={{ padding: 15 }} className="navbar navbar-expand-lg navbar-light bg-light">
        <ul style={{ marginBottom: 0 }} className="container d-flex justify-content-between nav-item">
          {/* <a className="nav-link" href="#">Home</a> */}
          <Link className='goto' to="/">Home 🏠</Link>
          {/* <a className="nav-link" href="#">Our Team</a> */}
          <Link className='goto' to="team">Our Team 🧑‍🤝‍🧑</Link>
          {/* <a className="nav-link" href="#">About the project</a> */}
          <Link className='goto' to="">About The Project 📄</Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarAbout