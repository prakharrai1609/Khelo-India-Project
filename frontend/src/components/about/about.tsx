import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom'
import '../../styles/styles.css'
import NavbarAbout from './navbar-about'


export const About = () => {
  return (
    <div>
      <NavbarAbout />
      <Outlet />
    </div>
  )
}
