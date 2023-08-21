import React from 'react';
import NavB from './NavB';
import Footer from './footer'

const Layout = (props) => {
  return (
    <>
    <NavB />
   <main style={{minHeight:"90vh"}}>
   {props.children}
   </main>
   <Footer/>
    </>
  )
}

export default Layout
