import React from 'react'
import NavBar from './navBar'
import Footer from './footer'

const Layout1 = ({ children }) => {
  return (
    <>
      <NavBar/>

      <main>
        {children}
      </main>

    <Footer/>
    </>
  )
}

export default Layout1