














// update profile

// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import PrivateRoute from '../Route/PrivateRoute';

// const MySwal = withReactContent(Swal);

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         MySwal.fire({
//           icon: 'success',
//           title: 'Logout successful!',
//           timer: 2000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       })
//       .catch(error => {
//         console.error(error);
//         MySwal.fire({
//           icon: 'error',
//           title: 'Logout failed!',
//           text: 'Please try again.',
//         });
//       });
//   };

//   return (
//     <div className="navbar bg-base-200">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-blue-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//             <li><NavLink to={'/'}>Home</NavLink></li>
//             <li><NavLink to={'/all-scholarship'}>All Scholarship</NavLink></li>

//             {user && (
//               <>
//                 <li><Link to={'/dashboard/admin-profile'}>Admin DashBoard</Link></li>
//               </>
//             )}

// {user &&  (
//               <li><Link to={"/user-dashboard/profile"}>User Dashboard</Link></li>
//             )}

// {user &&  (
//               <li><Link to="/moderator-dashboard/moderator-profile">Moderator Dashboard</Link></li>
//             )}




//             {/* Conditional Rendering for User Role */}

//             {/* {user && user.role === "user" &&(
//               <li><Link to="/user-dashboard">User Dashboard</Link></li>
//             )} */}

//             {/* {user && user.role === 'admin' && (
//               <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
//             )} */}

//             {/* {user && user.role === 'moderator' && (
//               <li><Link to="/moderator-dashboard">Moderator Dashboard</Link></li>
//             )} */}

//             <li>
//               {user ? (
//                 <button onClick={handleLogout} className="btn btn-ghost">
//                   LogOut
//                 </button>
//               ) : (
//                 <Link to="/login" className="btn btn-ghost">LogIn</Link>
//               )}
//             </li>
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-xl">Logo</Link>
//       </div>
      
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//         <li>
//   <NavLink
//     to="/"
//     className={({ isActive }) =>
//       isActive ? "text-green-700 font-bold" : "text-gray-600"
//     }
//   >
//     Home
//   </NavLink>
// </li>

//           <li>
//   <NavLink
//     to="/all-scholarship"
//     className={({ isActive }) =>
//       isActive ? "text-green-700 font-bold" : "text-blue-600 font-bold"
//     }
//   >
//     All Scholarship
//   </NavLink>
// </li>

//           { user && (
//             <>
//               <li><Link to={'/dashboard/admin-profile'}>Admin DashBoard</Link></li>
//             </>
//           )}

// {user &&  (
//             <li><Link to="/user-dashboard/profile"> My Dashboard</Link></li>
//           )}

// {user &&  (
//             <li><Link to="/moderator-dashboard/moderator-profile">Moderator Dashboard</Link></li>
//           )}



//           {/* Conditional Rendering for User Role */}
//           {/* {user &&  (
//             <li><Link to="/user-dashboard">User Dashboard</Link></li>
//           )} */}
//           {user && user.role === 'admin' && (
//             <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
//           )}
//           {user && user.role === 'moderator' && (
//             <li><Link to="/moderator-dashboard">Moderator Dashboard</Link></li>
//           )}

//           <li>
//             {user ? (
//               <button onClick={handleLogout} className="btn btn-ghost">
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login" className="btn btn-ghost">Login</Link>
//             )}
//           </li>
//         </ul>
//       </div>

//       <div className="navbar-end">
//         {user && (
//           <div className="flex items-center space-x-3">
//              <span>{user.displayName || 'User'}</span>
//             <img
//               src={user.photoURL || 'https://via.placeholder.com/40'}
//               alt={user.displayName || 'User'}
//               className="w-16 h-16 rounded-full"
//             />
           
//           </div>
//         )}
      
//       </div>
//     </div>
//   );
// };

// export default Navbar;










































































// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   // Handle Logout
//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         MySwal.fire({
//           icon: 'success',
//           title: 'Logout successful!',
//           timer: 2000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       })
//       .catch(error => {
//         console.error(error);
//         MySwal.fire({
//           icon: 'error',
//           title: 'Logout failed!',
//           text: 'Please try again.',
//         });
//       });
//   };

//   return (
//     <div className="navbar bg-blue-800 bg-opacity-15">
//       {/* Navbar Start */}
//       <div className="navbar-start">
//         {/* Dropdown for mobile view */}
//         <div className="dropdown">
//           <button tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </button>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-blue-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             {/* Navigation Links */}
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? 'text-green-700 font-bold' : 'text-gray-600'
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/all-scholarship"
//                 className={({ isActive }) =>
//                   isActive ? 'text-green-700 font-bold' : 'text-blue-600 font-bold'
//                 }
//               >
//                 All Scholarship
//               </NavLink>
//             </li>
//             {user && (
//               <>
//                 <li>
//                   <Link to="/dashboard/admin-profile">Admin DashBoard</Link>
//                 </li>
//                 <li>
//                   <Link to="/user-dashboard/profile">User Dashboard</Link>
//                 </li>
//                 <li>
//                   <Link to="/moderator-dashboard/moderator-profile">
//                     Moderator Dashboard
//                   </Link>
//                 </li>
//               </>
//             )}
//             {/* Login/Logout Button */}
//             <li>
//               {user ? (
//                 <button onClick={handleLogout} className="btn btn-ghost">
//                   Logout
//                 </button>
//               ) : (
//                 <Link to="/login" className="btn btn-ghost">
//                   Login
//                 </Link>
//               )}
//             </li>
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-white text-xl">
//           Logo
//         </Link>
//       </div>

//       {/* Navbar Center */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal  text-white">
//           {/* Navigation Links */}
          
//             <NavLink
//               to="/"
//               className= "text-green-500"
//             >
//               Home
//             </NavLink>
          
          
          
//             <NavLink
//               to="/all-scholarship"
//               className="text-white"
//             >
//               All Scholarship
//             </NavLink>
          
          

//           {user && (
//             <>
//               <li>
//                 <Link to="/dashboard/admin-profile">Admin DashBoard</Link>
//               </li>
//               <li>
//                 <Link to="/user-dashboard/profile">My Dashboard</Link>
//               </li>
//               <li>
//                 <Link to="/moderator-dashboard/moderator-profile">
//                   Moderator Dashboard
//                 </Link>
//               </li>
//             </>
//           )}
//           {/* Conditional Rendering for Roles */}
//           {user && user.role === 'admin' && (
//             <li>
//               <Link to="/admin-dashboard">Admin Dashboard</Link>
//             </li>
//           )}
//           {user && user.role === 'moderator' && (
//             <li>
//               <Link to="/moderator-dashboard">Moderator Dashboard</Link>
//             </li>
//           )}
//           {/* Login/Logout Button */}
//           <li>
//             {user ? (
//               <button onClick={handleLogout} className="btn btn-ghost">
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login" className="btn btn-ghost">
//                 Login
//               </Link>
//             )}
//           </li>
//         </ul>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end">
//         {user && (
//           <div className="flex items-center space-x-3">
//             <span>{user.displayName || 'User'}</span>
//             <img
//               src={user.photoURL || 'https://via.placeholder.com/40'}
//               alt={user.displayName || 'User'}
//               className="w-10 h-10 rounded-full"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



















































// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import icon from '../assets/image/icons8-scholarship-32.png'
// // import UseAdmin from '../Route/UseAdmin';
// const MySwal = withReactContent(Swal);

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
   
//   // Handle Logout
//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         MySwal.fire({
//           icon: 'success',
//           title: 'Logout successful!',
//           timer: 2000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       })
//       .catch(error => {
//         console.error(error);
//         MySwal.fire({
//           icon: 'error',
//           title: 'Logout failed!',
//           text: 'Please try again.',
//         });
//       });
//   };

//   return (
//     <div className="navbar bg-blue-800 bg-opacity-15">
//       {/* Navbar Start */}
//       <div className="navbar-start">
//         {/* Dropdown for mobile view */}
//         <div className="dropdown">
//           <button tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </button>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-blue-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             {/* Navigation Links */}
//             <div>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? 'text-green-700 font-bold' : 'text-gray-600'
//                 }
//               >
//                 Home
//               </NavLink>
//             </div>
//             <div>
//               <NavLink
//                 to="/all-scholarship"
//                 className={({ isActive }) =>
//                   isActive ? 'text-green-700 font-bold' : 'text-blue-600 font-bold'
//                 }
//               >
//                 All Scholarship
//               </NavLink>
//             </div>
//             {user && (
//               <>
//                 <div>
//                   <Link to="/dashboard/admin-profile">Admin DashBoard</Link>
//                 </div>
//                 <div>
//                   <Link to="/user-dashboard/profile">User Dashboard</Link>
//                 </div>
//                 <div>
//                   {/* <Link to="/moderator-dashboard/moderator-profile">
//                     Moderator Dashboard
//                   </Link> */}

// <Link
//                 to="/moderator-dashboard/moderator-profile"
//                 className={({ isActive }) =>
//                   isActive ? 'text-green-700 font-bold' : 'text-blue-600 font-bold'
//                 }
//               >
//                 Moderator Dashboard
//               </Link>



//                 </div>
//               </>
//             )}
//             {/* Login/Logout Button */}
//             <div>
//               {user ? (
//                 <button onClick={handleLogout} className="btn btn-ghost">
//                   Logout
//                 </button>
//               ) : (
//                 <Link to="/login" className="btn btn-ghost">
//                   Login
//                 </Link>
//               )}
//             </div>
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-green-500 text-xl">
//           <img src={icon} alt="" />ProFellow
//         </Link>
//       </div>

//       {/* Navbar Center */}
//       <div className="navbar-center hidden  lg:flex">
//         <div className="menu menu-horizontal text-lg text-white">
//           {/* Navigation Links */}
//           <div className='mx-2 mt-3 '>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? 'text-green-500 font-bold' : 'text-white'
//               }
//             >
//               Home
//             </NavLink>
//           </div>
//           <div className='mx-2 mt-3'>
//             <NavLink
//               to="/all-scholarship"
//               className={({ isActive }) =>
//                 isActive ? 'text-green-500 font-bold' : 'text-white'
//               }
//             >
//               All Scholarship
//             </NavLink>
//           </div>

//           {user && (
//             <>
//               <div className='mx-2 mt-3'>
//                 <Link to="/dashboard/admin-profile">Admin DashBoard</Link>
//               </div>
//               <div className='mx-2 mt-3'>
//                 <NavLink className={({ isActive }) =>
//                 isActive ? 'text-green-500 font-bold' : 'text-white'
//               }
//                  to="/user-dashboard/profile">My Dashboard</NavLink>
//               </div>
//               <div className='mx-2 mt-3'>
//                 <NavLink className={({ isActive }) =>
//                 isActive ? 'text-green-500 font-bold' : 'text-white'
//               }
//                 to="/moderator-dashboard/moderator-profile">
//                   Moderator Dashboard
//                 </NavLink>
//               </div>
//             </>
//           )}
//           {/* Conditional Rendering for Roles */}
//           {user && user.role === 'admin' && (
//             <div>
//               <Link to="/admin-dashboard">Admin Dashboard</Link>
//             </div>
//           )}
//           {user && user.role === 'moderator' && (
//             <div>
//               <Link to="/moderator-dashboard">Moderator Dashboard</Link>
//             </div>
//           )}
//           {/* Login/Logout Button */}
//           <div>
//             {user ? (
//               <button onClick={handleLogout} className="btn btn-ghost text-lg">
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login" className="btn btn-ghost">
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end">
//         {user && (
//           <div className="flex items-center text-xl text-green-500 space-x-3">
//             <span>{user.displayName || 'User'}</span>
//             <img
//               src={user.photoURL || 'https://via.placeholder.com/40'}
//               alt={user.displayName || 'User'}
//               className="w-10 h-10 rounded-full"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



























































import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import icon from "../assets/image/icons8-scholarship-32.png";

const MySwal = withReactContent(Swal);

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  // Handle Logout
  const handleLogout = () => {
    logout()
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "Logout successful!",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error(error);
        MySwal.fire({
          icon: "error",
          title: "Logout failed!",
          text: "Please try again.",
        });
      });
  };

  return (
    <nav className="navbar bg-blue-800 bg-opacity-15 px-4 py-2">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn text-white btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-blue-500 bg-opacity-80 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
          >
            {/* Navigation Links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-scholarship"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-bold" : "text-white"
              }
            >
              All Scholarship
            </NavLink>
            {user && (
              <>
                <NavLink
                  to="/dashboard/admin-profile"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-bold" : "text-white"
                  }
                >
                  Admin Dashboard
                </NavLink>
                <NavLink
                  to="/user-dashboard/profile"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-bold" : "text-white"
                  }
                >
                  My Dashboard
                </NavLink>
                <NavLink
                  to="/moderator-dashboard/moderator-profile"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-bold" : "text-white"
                  }
                >
                  Moderator Dashboard
                </NavLink>
              </>
            )}
            {/* Login/Logout Button */}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-outline w-full text-white"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-outline w-full text-white">
                Login
              </Link>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-green-500 text-xl flex items-center">
          <img src={icon} alt="ProFellow Logo" className="h-6 w-6 mr-2" />
          ProFellow
        </Link>
      </div>

      {/* Navbar Center (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal text-lg space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-scholarship"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "text-white"
            }
          >
            All Scholarship
          </NavLink>

          {user && (
            <>
              <NavLink
                to="/dashboard/admin-profile"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-white"
                }
              >
                Admin Dashboard
              </NavLink>
              <NavLink
                to="/user-dashboard/profile"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-white"
                }
              >
                My Dashboard
              </NavLink>
              <NavLink
                to="/moderator-dashboard/moderator-profile"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-white"
                }
              >
                Moderator Dashboard
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-white hidden sm:block">
              {user.displayName || "User"}
            </span>
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={handleLogout}
              className="btn btn-ghost text-white border border-white hidden sm:inline-block"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline text-white border border-white">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



















































































































































































































































































