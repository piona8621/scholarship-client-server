




// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import icon from "../assets/image/icons8-scholarship-32.png";

// import { useContext } from "react";

// const MySwal = withReactContent(Swal);

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   // Handle Logout
//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         MySwal.fire({
//           icon: "success",
//           title: "Logout successful!",
//           timer: 2000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         MySwal.fire({
//           icon: "error",
//           title: "Logout failed!",
//           text: "Please try again.",
//         });
//       });
//   };

//   return (
//     <nav className="navbar bg-blue-800 bg-opacity-15 px-4 py-2">
//       {/* Navbar Start */}
//       <div className="navbar-start flex items-center">
//         {/* Mobile Menu Button */}
//         <div className="dropdown lg:hidden">
//           <button tabIndex={0} className="btn text-white btn-ghost">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
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
//             className="menu dropdown-content bg-blue-500 bg-opacity-80 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
//           >
//             {/* Navigation Links */}
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-400 font-bold" : "text-white"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/all-scholarship"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-400 font-bold" : "text-white"
//               }
//             >
//               All Scholarship
//             </NavLink>

//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-400 font-bold" : "text-white"
//               }
//             >
//               Contact us
//             </NavLink>
           




//             {user && (
//               <>
//                 <NavLink
//                   to="/dashboard/admin-profile"
//                   className={({ isActive }) =>
//                     isActive ? "text-blue-400 font-bold" : "text-white"
//                   }
//                 >
//                   Admin Dashboard
//                 </NavLink>
//                 <NavLink
//                   to="/user-dashboard/profile"
//                   className={({ isActive }) =>
//                     isActive ? "text-blue-400 font-bold" : "text-white"
//                   }
//                 >
//                   My Dashboard
//                 </NavLink>
//                 <NavLink
//                   to="/moderator-dashboard/moderator-profile"
//                   className={({ isActive }) =>
//                     isActive ? "text-blue-400 font-bold" : "text-white"
//                   }
//                 >
//                   Moderator Dashboard
//                 </NavLink>
//               </>
//             )}
//             {/* Login/Logout Button */}
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-outline w-full text-white"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login" className="btn btn-outline w-full text-white">
//                 Login
//               </Link>
//             )}
//           </ul>
//         </div>

//         {/* Logo */}
//         <Link to="/" className="btn btn-ghost text-green-500 text-xl flex items-center">
//           <img src={icon} alt="ProFellow Logo" className="h-6 w-6 mr-2" />
//           ProFellow
//         </Link>
//       </div>

//       {/* Navbar Center (Desktop Only) */}
//       <div className="navbar-center hidden lg:flex">
//         <div className="menu menu-horizontal text-lg space-x-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-green-500 font-bold" : "text-white"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/all-scholarship"
//             className={({ isActive }) =>
//               isActive ? "text-green-500 font-bold" : "text-white"
//             }
//           >
//             All Scholarship
//           </NavLink>

//           {user && (
//             <>
//               <NavLink
//                 to="/dashboard/admin-profile"
//                 className={({ isActive }) =>
//                   isActive ? "text-green-500 font-bold" : "text-white"
//                 }
//               >
//                 Admin Dashboard
//               </NavLink>
//               <NavLink
//                 to="/user-dashboard/profile"
//                 className={({ isActive }) =>
//                   isActive ? "text-green-500 font-bold" : "text-white"
//                 }
//               >
//                 My Dashboard
//               </NavLink>
//               <NavLink
//                 to="/moderator-dashboard/moderator-profile"
//                 className={({ isActive }) =>
//                   isActive ? "text-green-500 font-bold" : "text-white"
//                 }
//               >
//                 Moderator Dashboard
//               </NavLink>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end flex items-center space-x-4">
//         {user ? (
//           <>
//             <span className="text-white hidden sm:block">
//               {user.displayName || "User"}
//             </span>
//             <img
//               src={user.photoURL || "https://via.placeholder.com/40"}
//               alt={user.displayName || "User"}
//               className="w-10 h-10 rounded-full"
//             />
//             <button
//               onClick={handleLogout}
//               className="btn btn-ghost text-white border border-white hidden sm:inline-block"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/login" className="btn btn-outline text-white border border-white">
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


























// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import icon from "../assets/image/icons8-scholarship-32.png";

// const MySwal = withReactContent(Swal);

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   // Handle Logout
//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         MySwal.fire({
//           icon: "success",
//           title: "Logout successful!",
//           timer: 2000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         MySwal.fire({
//           icon: "error",
//           title: "Logout failed!",
//           text: "Please try again.",
//         });
//       });
//   };

//   return (
//     <nav className="navbar bg-blue-800 bg-opacity-15 px-4 py-2">
//       {/* Navbar Start */}
//       <div className="navbar-start flex items-center">
//         {/* Logo */}
//         <Link to="/" className="btn btn-ghost text-green-500 text-xl flex items-center">
//           <img src={icon} alt="ProFellow Logo" className="h-6 w-6 mr-2" />
//           ProFellow
//         </Link>
//       </div>

//       {/* Navbar Center (Desktop Only) */}
//       <div className="navbar-center hidden lg:flex">
//         <div className="menu menu-horizontal text-lg space-x-4">
//           <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             Home
//           </NavLink>
//           <NavLink to="/all-scholarship" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             All Scholarship
//           </NavLink>


//           <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             Contact Us 
//           </NavLink>


//           <NavLink to="/about" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             About Us 
//           </NavLink>

//           <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//   Testimonials
// </NavLink>


//         </div>

//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end flex items-center space-x-4">
//         {user ? (
//           <>
//             {/* Dashboard Dropdown */}
//             <div className="dropdown dropdown-end">
//               <button tabIndex={0} className="btn btn-ghost text-white">Dashboard ▾</button>
//               <ul
//                 tabIndex={0}
//                 className="dropdown-content menu p-2 shadow bg-blue-500 rounded-box w-52"
//               >
//                 <NavLink to="/dashboard/admin-profile" className="text-white">Admin Dashboard</NavLink>
//                 <NavLink to="/user-dashboard/profile" className="text-white">My Dashboard</NavLink>
//                 <NavLink to="/moderator-dashboard/moderator-profile" className="text-white">Moderator Dashboard</NavLink>
//               </ul>
//             </div>

//             {/* User Profile & Logout */}
//             <img
//               src={user.photoURL || "https://via.placeholder.com/40"}
//               alt={user.displayName || "User"}
//               className="w-10 h-10 rounded-full"
//             />
//             <button onClick={handleLogout} className="btn btn-ghost text-white border border-white hidden sm:inline-block">
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/login" className="btn btn-outline text-white border border-white">
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












































// 234456

// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// // import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import icon from "../assets/image/icons8-scholarship-32.png";

// const MySwal = withReactContent(Swal);

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   // Handle Logout
//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         MySwal.fire({
//           icon: "success",
//           title: "Logout successful!",
//           timer: 2000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         MySwal.fire({
//           icon: "error",
//           title: "Logout failed!",
//           text: "Please try again.",
//         });
//       });
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-blue-500 bg-opacity-20 shadow-lg z-50">
//       <div className="container mx-auto px-4 flex justify-between items-center py-2">
//         {/* Navbar Start */}
//         <div className="flex items-center">
//           <Link to="/" className="btn btn-ghost text-green-500 text-xl flex items-center">
//             <img src={icon} alt="ProFellow Logo" className="h-6 w-6 mr-2" />
//             ProFellow
//           </Link>
//         </div>

//         {/* Navbar Center (Desktop Only) */}
//         <div className="hidden lg:flex space-x-6">
//           <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             Home
//           </NavLink>
//           <NavLink to="/all-scholarship" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             All Scholarship
//           </NavLink>
//           <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             Contact Us
//           </NavLink>
//           <NavLink to="/about" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             About Us
//           </NavLink>
//           <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             Testimonials
//           </NavLink>
//         </div>

//         {/* Navbar End */}
//         <div className="flex items-center space-x-4">
//           {user ? (
//             <>
//               {/* Dashboard Dropdown */}
//               <div className="dropdown dropdown-end">
//                 <button tabIndex={0} className="btn btn-ghost text-white">Dashboard ▾</button>
//                 <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-blue-500 rounded-box w-52">
//                   <NavLink to="/dashboard/admin-profile" className="text-white">Admin Dashboard</NavLink>
//                   <NavLink to="/user-dashboard/profile" className="text-white">My Dashboard</NavLink>
//                   <NavLink to="/moderator-dashboard/moderator-profile" className="text-white">Moderator Dashboard</NavLink>
//                 </ul>
//               </div>

// {/* Dashboard Dropdown */}
// <div className="dropdown dropdown-end">
//                 <button tabIndex={0} className="btn btn-ghost text-white">  ▾</button>
//                 <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-blue-500 rounded-box w-52">
//                 <div className="hidden lg:flex space-x-6">
//           <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             Home
//           </NavLink>
//           <NavLink to="/all-scholarship" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             All Scholarship
//           </NavLink>
//           <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             Contact Us
//           </NavLink>
//           <NavLink to="/about" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             About Us
//           </NavLink>
//           <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
//             Testimonials
//           </NavLink>
//         </div>

//                 </ul>
//               </div>




//               {/* User Profile & Logout */}
//               <img
//                 src={user.photoURL || "https://via.placeholder.com/40"}
//                 alt={user.displayName || "User"}
//                 className="w-10 h-10 rounded-full"
//               />
//               <button onClick={handleLogout} className="btn btn-ghost text-white border border-white hidden sm:inline-block">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" className="btn btn-outline text-white border border-white">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












































import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import icon from "../assets/image/icons8-scholarship-32.png";

const MySwal = withReactContent(Swal);

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full bg-blue-500 bg-opacity-20 shadow-lg z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        {/* Navbar Start */}
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost text-green-500 text-xl flex items-center">
            <img src={icon} alt="ProFellow Logo" className="h-6 w-6 mr-2" />
            ProFellow
          </Link>
        </div>

        {/* Navbar Center (Desktop Only) */}
        <div className="hidden lg:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
            Home
          </NavLink>
          <NavLink to="/all-scholarship" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
            All Scholarship
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
            Contact Us
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
            About Us
          </NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "text-white")}>
            Testimonials
          </NavLink>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Navbar End */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* Dashboard Dropdown */}
              <div className="dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-ghost text-white">
                  Dashboard ▾
                </button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-blue-800 bg-opacity-20 rounded-box w-52">
                  <NavLink to="/dashboard/admin-profile" className="text-white">
                    Admin Dashboard
                  </NavLink>
                  <NavLink to="/user-dashboard/profile" className="text-white">
                    My Dashboard
                  </NavLink>
                  <NavLink to="/moderator-dashboard/moderator-profile" className="text-white">
                    Moderator Dashboard
                  </NavLink>
                </ul>
              </div>

              {/* User Profile & Logout */}
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full"
              />
              <button onClick={handleLogout} className="btn btn-ghost text-white border border-white hidden sm:inline-block">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-outline text-white border border-white">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden  shadow-lg p-4 space-y-4">
          <NavLink to="/" className="block text-white">
            Home
          </NavLink>
          <NavLink to="/all-scholarship" className="block text-white">
            All Scholarship
          </NavLink>
          <NavLink to="/contact" className="block text-white">
            Contact Us
          </NavLink>
          <NavLink to="/about" className="block text-white">
            About Us
          </NavLink>
          <NavLink to="/testimonials" className="block text-white">
            Testimonials
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
























































































































































