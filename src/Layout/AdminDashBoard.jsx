

































// import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import UseAdmin from "../Route/UseAdmin";
// // import useCart from "../hooks/useCart"; // Uncomment and use this if needed

// const Dashboard = () => {
//     // Assuming useCart hook is implemented correctly
//     // const [cart] = useCart();

//     // TODO: Replace this with actual admin value fetching logic
//     const [isAdmin] = UseAdmin();

//     return (
//         <div className="flex min-h-screen">
//             {/* Sidebar */}
//             <div className="w-64 bg-orange-400">
//                 <ul className="menu p-4">
//                     {isAdmin ? (
//                         <>
//                             <li>
//                                 <NavLink to="/dashboard/adminHome">
//                                     <FaHome /> Admin Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/addItems">
//                                     <FaUtensils /> Add Items
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/manageItems">
//                                     <FaList /> Manage Items
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/bookings">
//                                     <FaBook /> Manage Bookings
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/users">
//                                     <FaUsers /> All Users
//                                 </NavLink>
//                             </li>
//                         </>
//                     ) : (
//                         <>
//                             <li>
//                                 <NavLink to="/dashboard/userHome">
//                                     <FaHome /> User Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/reservation">
//                                     <FaCalendar /> Reservation
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/cart">
//                                     <FaShoppingCart /> My Cart {/* ({cart.length}) */}
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/review">
//                                     <FaAd /> Add a Review
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/bookings">
//                                     <FaList /> My Bookings
//                                 </NavLink>
//                             </li>
//                         </>
//                     )}
//                     {/* Shared links */}
//                     <div className="divider"></div>
//                     <li>
//                         <NavLink to="/">
//                             <FaHome /> Home
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/order/salad">
//                             <FaSearch /> Menu
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/order/contact">
//                             <FaEnvelope /> Contact
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 p-8">
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


















// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import UseAdmin from '../Route/UseAdmin';


// const AdminDashBoard = () => {
//   const [isAdmin] = UseAdmin();
//   // const [isModerator] = UseModerator();
//   // const isModerator = true;

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-orange-500 p-4">
//         <ul className="menu">
//           {isAdmin ? (
//             <>
//               <li>
//                 <NavLink to="admin-profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Admin Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="add-scholarship" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Add Scholarship
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="manage-scholarship" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Scholarships
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="manage-applied-applications" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Applied Applications
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="manage-reviews" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Reviews
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="users" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Users
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="analytics-chart" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                 AnalyticsChart
//                 </NavLink>
//               </li>
              

//             </>
//           ) (
//             <>
//               <li>
//                 <NavLink to="moderator-profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Moderator Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="add-scholarship" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Add Scholarship
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="manage-scholarship" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Scholarships
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="applied-application" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Applied Applications
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="all-reviews" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Reviews
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink to="profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   My Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="application" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   My Applications
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="reviews" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   My Reviews
//                 </NavLink>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* Shared links */}
//         <div className="divider"></div>
//         <ul>
//           <li>
//             <NavLink to="/">Home</NavLink>
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













import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UseAdmin from '../Route/UseAdmin';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AdminDashBoard = () => {
  const [isAdmin] = UseAdmin();
  const { user } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen">
      <Helmet>
              <title> ProFellow | Admin DashBoard </title>
            </Helmet>
      {/* Sidebar */}
      <div className=" w-64 bg-blue-800 bg-opacity-15 text-white">
        <ul className="menu">
          {isAdmin ? (
            <>
              <div className="mb-4 text-base">
                <NavLink
                  to="admin-profile"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Admin Profile
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="add-scholarship"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Add Scholarship
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="manage-scholarship"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Manage Scholarships
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="manage-applied-applications"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Manage Applied Applications
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="manage-reviews"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Manage Reviews
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="users"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Manage Users
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="analytics-chart"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Analytics Chart
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 text-base">
                <NavLink
                  to="moderator-profile"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Moderator Profile
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="add-scholarship"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Add Scholarship
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="manage-scholarship"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Manage Scholarships
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="applied-application"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Applied Applications
                </NavLink>
              </div>

              <div className="mb-4 text-base">
                <NavLink
                  to="all-reviews"
                  className={({ isActive }) =>
                    isActive ? 'text-green-500 font-bold' : 'text-white'
                  }
                >
                  Reviews
                </NavLink>
              </div>
            </>
          )}
        </ul>

        {/* Shared links */}
        <div className="divider divider-success"></div>
        <ul>
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














// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import UseAdmin from '../Route/UseAdmin';

// const DashBoard = () => {
//   const [isAdmin] = UseAdmin();
//   // const [isModerator] = UseModerator(); // Removed for simplicity
//   const isModerator = true; // Example value, can be removed if not used

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-orange-500 p-4">
//         <ul className="menu">
//           {isAdmin ? (
//             <>
//               <li>
//                 <NavLink to="admin-profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Admin Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="add-scholarship" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Add Scholarship
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="manage-scholarship" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Scholarships
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="manage-applied-applications" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Applied Applications
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="manage-reviews" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Reviews
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="users" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   Manage Users
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink to="profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   My Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="application" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   My Applications
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="reviews" className={({ isActive }) => (isActive ? 'active-link' : '')}>
//                   My Reviews
//                 </NavLink>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* Shared links */}
//         <div className="divider"></div>
//         <ul>
//           <li>
//             <NavLink to="/">Home</NavLink>
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

// export default DashBoard;














































































