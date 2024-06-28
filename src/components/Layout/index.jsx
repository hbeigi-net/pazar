import React, { useState } from 'react'
import TopBar from '../TopBar'
import Main from '../Main'
function Layout({children}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <>
    <TopBar 
    title={'لیست ثابت ها '} 
    toggleMenu={toggleMenu} 
    />
    <Main 
     isOpen={isOpen} 
    >
        {children}
    </Main>
    </>
  )
}

export default Layout