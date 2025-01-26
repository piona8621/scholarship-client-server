// import React from 'react';
// import { useContext } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
// import UseModerator from '../Route/UseModerator';

// const ModeratorDashBoard = () => {
//   const {user} = useContext(AuthContext);
//   const isModerator = UseModerator()
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-600 text-white p-4">
//         <ul className="space-y-4">
//         {
//           isModerator ? (<>
// <li>
//                         <NavLink to="moderator-profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                           Moderator Profile
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="add-scholarship" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                           Add Scholarship
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="manage-scholarship" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                           Manage Scholarships
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="applied-application" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                           Applied Applications
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="all-reviews" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                           Reviews
//                         </NavLink>
//                       </li>

//           </>)
//         }
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 bg-gray-100">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default ModeratorDashBoard;

























































import React from 'react';
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import UseModerator from '../Route/UseModerator';
import { Helmet } from 'react-helmet-async';

const ModeratorDashBoard = () => {
  const { user } = useContext(AuthContext);
  const isModerator = UseModerator();

  return (
    <div className="flex min-h-screen">
      <Helmet>
              <title> ProFellow | ModeratorDasBoard </title>
            </Helmet>
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 bg-opacity-15 text-white p-4">
        <ul className="space-y-4">
          {isModerator && (
            <>
              
               <div className='mb-2'>
               <NavLink to="moderator-profile" className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
                  Moderator Profile
                </NavLink>
               </div>
              
              
               <div className='mb-2'>
               <NavLink to="add-scholarship" className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
                  Add Scholarship
                </NavLink>
               </div>
              
              
                <div className='mb-2'>
                <NavLink to="manage-scholarship" className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
                  Manage Scholarships
                </NavLink>
                </div>
                
                <div className='mb-2'>
                <NavLink to="applied-application" className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
                  Applied Applications
                </NavLink>
                </div>
              
              
                <div className='mb-2'>
                <NavLink to="all-reviews" className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
                  Reviews
                </NavLink>
                </div>
              
            </>
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ModeratorDashBoard;
