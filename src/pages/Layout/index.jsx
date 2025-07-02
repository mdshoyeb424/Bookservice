import React from 'react'
import Navbar from '../../common/header'
import Footer from '../../common/footer'

const Layout = ({children}) => {
  return (
   <>
   <Navbar/>
   <main>
    {children}
   </main>
   <Footer/>
   </>
  )
}

export default Layout