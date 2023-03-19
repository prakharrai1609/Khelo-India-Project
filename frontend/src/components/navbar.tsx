import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between nav-item">
        <img src={require("../images/kheloBharatLogo.png")} alt="" width={34} style={{ marginRight: 10 }} />
        <Link className="navbar-brand h1" to={'/'}>Khelo Bharat <img src={require("../images/india-flag.jpg")} alt="" style={{ marginLeft: 10, marginBottom: 5 }} width={25} /></Link>
        <Link className='nav-link' to={'/about'}>About 📄</Link>
      </div>
    </nav >
  )
}
