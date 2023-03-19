import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Navbar } from '../navbar'
import AuthenticationPage from './userAuthenticationPage'
import CreateUser from './createUser'

function userLoginPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<AuthenticationPage />} />
      </Routes>
      <Outlet />
    </>
  )
}

export default userLoginPage