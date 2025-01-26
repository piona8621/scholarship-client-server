import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';

const UserDashBoard = () => {
  return (
    <div className="flex min-h-screen">
      <Helmet>
              <title> ProFellow | My DahBoard </title>
            </Helmet>
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-xl bg-opacity-15 text-white p-4">
        <ul className="space-y-4">
        
                        <NavLink
                            to="profile"
                            className={({ isActive }) => (isActive ? 'text-green-500 font-bold' : 'text-white-500')}
                          >
                            My Profile
                          </NavLink>
                      
                      
                        <div className='mb-4'>
                        <NavLink to="application" className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
                          My Applications
                        </NavLink>
                      
                        </div>
                      
                       <div className='mb-4'>
                       <NavLink to="reviews" className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
                          My Reviews
                        </NavLink>
                       </div>
                      
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashBoard;
