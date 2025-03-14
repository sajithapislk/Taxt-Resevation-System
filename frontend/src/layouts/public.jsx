import { useEffect } from 'react'
import Footer from './components/public/Footer'
import Header from './components/public/Header'
import { Outlet } from "react-router-dom"

import './../styles/css/style.css'

const PublicLayout = () => {
  useEffect(() => {
    document.body.classList.add('theme-1');
    document.body.classList.add('vsc-initialized');

    return () => {
      document.body.classList.remove('theme-1');
      document.body.classList.remove('vsc-initialized');
    };
  }, [])

  
  return (
    <div className='theme-1'>
      <Header />
        <Outlet /> {/* Renders the nested route components */}
      <Footer />
    </div>
  )
}

export default PublicLayout
