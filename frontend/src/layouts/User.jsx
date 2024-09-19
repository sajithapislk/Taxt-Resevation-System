import { useEffect } from 'react'
import Footer from './components/user/Footer'
import Header from './components/user/Header'
import { Outlet } from "react-router-dom"

import './../styles/css/style.css'

const UserLayout = () => {
  useEffect(() => {
    document.body.classList.add('theme-2');
    document.body.classList.add('vsc-initialized');

    return () => {
      document.body.classList.remove('theme-2');
      document.body.classList.remove('vsc-initialized');
    };
  }, [])

  
  return (
    <div className='theme-2'>
      <Header />
        <Outlet /> {/* Renders the nested route components */}
      <Footer />
    </div>
  )
}

export default UserLayout
