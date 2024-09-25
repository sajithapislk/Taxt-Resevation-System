import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/adminDashboard/components/Sidebar';
import TopNavBar from '../pages/adminDashboard/components/TopNavBar';
import Header from './components/adminDashboard/Header';
import Footer from './components/adminDashboard/Footer';
import './../styles/css/style.css'


const AdminLayout = () => {
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
      <Header/>
    <div className="d-flex p-2 sidebar" id="wrapper">
    <Sidebar /> {/* Sidebar on the left */}
    <div id="page-content-wrapper">
      <TopNavBar /> {/* Top Navigation */}
       </div>
      <div className="container-fluid mt-4">
        <Outlet /> {/* Render the child routes here */}
        
      </div>
    </div>
 
  <Footer/>
  </div>
  )
}

export default AdminLayout