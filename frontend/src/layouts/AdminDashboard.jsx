import React from 'react'
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    // useEffect(() => {
    //     document.body.classList.add('theme-1');
    //     document.body.classList.add('vsc-initialized');
    
    //     return () => {
    //       document.body.classList.remove('theme-1');
    //       document.body.classList.remove('vsc-initialized');
    //     };
    //   }, [])
  return (
    <div>
    {/* <Header /> */}
      <Outlet /> {/* Renders the nested route components */}
    {/* <Footer /> */}
  </div>
  )
}

export default AdminLayout