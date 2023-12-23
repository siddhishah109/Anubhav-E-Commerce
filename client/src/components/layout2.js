import React from 'react'
import NavBar from './navBar'


const Layout2 = ({ children }) => {
  return (
    <>
      <NavBar/>

      <main>
        {children}
      </main>


    </>
  )
}

export default Layout2