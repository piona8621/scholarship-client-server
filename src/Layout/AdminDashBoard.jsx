









































// import React, { useContext } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import UseAdmin from '../Route/UseAdmin';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Helmet } from 'react-helmet-async';

// const AdminDashBoard = () => {
//   const [isAdmin] = UseAdmin();
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="flex min-h-screen">
//       <Helmet>
//               <title> ProFellow | Admin DashBoard </title>
//             </Helmet>
//       {/* Sidebar */}
//       <div className=" w-64 bg-blue-800 bg-opacity-15 text-white">
//         <ul className="menu">
//           {isAdmin ? (
//             <>
//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="admin-profile"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Admin Profile
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="add-scholarship"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Add Scholarship
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="manage-scholarship"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Manage Scholarships
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="manage-applied-applications"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Manage Applied Applications
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="manage-reviews"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Manage Reviews
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="users"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Manage Users
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="analytics-chart"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Analytics Chart
//                 </NavLink>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="moderator-profile"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Moderator Profile
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="add-scholarship"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Add Scholarship
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="manage-scholarship"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Manage Scholarships
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="applied-application"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Applied Applications
//                 </NavLink>
//               </div>

//               <div className="mb-4 text-base">
//                 <NavLink
//                   to="all-reviews"
//                   className={({ isActive }) =>
//                     isActive ? 'text-green-500 font-bold' : 'text-white'
//                   }
//                 >
//                   Reviews
//                 </NavLink>
//               </div>
//             </>
//           )}
//         </ul>

//         {/* Shared links */}
//         <div className="divider divider-success"></div>
//         <ul>
//           <li>
//             <NavLink to="/" className="text-base text-white">
//               Home
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminDashBoard;










import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Route/UseAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
// import Overview from "./Overview";

const AdminDashBoard = () => {
  const [isAdmin] = UseAdmin();
  const { user } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen">
      <Helmet>
        <title> ProFellow | Admin Dashboard </title>
      </Helmet>
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 bg-opacity-15 text-white p-4">
        <h2 className="text-xl font-bold text-green-500 mb-4">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <NavLink to="overview" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
              Overview
            </NavLink>
          </li>
          {isAdmin && (
            <>
              <li>
                <NavLink to="admin-profile" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="add-scholarship" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
                  Add Scholarship
                </NavLink>
              </li>
              <li>
                <NavLink to="manage-scholarship" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
                  Manage Scholarships
                </NavLink>
              </li>
              <li>
                <NavLink to="manage-applications" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
                  Manage Applications
                </NavLink>
              </li>
              <li>
                <NavLink to="analytics-chart" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
                  Analytics Chart
                </NavLink>
              </li>
            </>
          )}
          <div className="divider divider-success"></div>
          <li>
            <NavLink to="/" className="text-base text-white">
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashBoard;





































































