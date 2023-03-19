import React from 'react'
import { Navbar } from './navbar'
import { Link } from "react-router-dom"
import '../styles/styles.css'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Link className="link homepagelinks" to='/admin'>Login as Admin</Link>
      <Link className="link homepagelinks" to='/user'>Login as User</Link>
    </div>
  )
}
