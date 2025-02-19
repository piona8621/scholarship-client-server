


// import React, { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import { Helmet } from 'react-helmet-async';

// const AdminProfile = () => {
//   const { user } = useContext(AuthContext);

//   // Mock role determination logic (replace with your backend role logic if needed)
//   const role = user?.email === "admin@example.com" ? "Admin" : null;

//   return (
//     <div className="p-6 bg-blue-800 bg-opacity-15 shadow-md rounded-md max-w-md mx-auto">
//       <Helmet>
//         <title> ProFellow | Admin Dashboard | Admin Profile</title>
//       </Helmet>
//       <h1 className="text-2xl font-semibold mb-4 text-green-500 text-center">My Profile</h1>

//       {user ? (
//         <div>
//           <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mb-6">
//             <img
//               src={user.photoURL || "https://via.placeholder.com/150"} // Placeholder if no photoURL
//               alt={`${user.displayName || "User"}'s profile`}
//               className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
//             />
//             <div>
//               <h2 className="text-xl font-medium text-white mt-4">{user.displayName || "Anonymous User"}</h2>
//               {role && <p className="text-gray-500 text-sm">{role}</p>}
//             </div>
//           </div>

//           <div className="space-y-4 text-white">
//             <div>
//               <h3 className="font-medium">Email:</h3>
//               <p className="text-white">{user.email}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center">No user is logged in.</p>
//       )}
//     </div>
//   );
// };

// export default AdminProfile;












































import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  const role = user?.email === "admin@example.com" ? "Admin" : "User";

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <Helmet>
        <title>ProFellow | Admin Dashboard | Admin Profile</title>
      </Helmet>

      <div className="relative bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-2xl p-6 max-w-lg w-full text-white">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-green-400 shadow-lg"
            />
            <span className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-gray-900"></span>
          </div>

          <h2 className="mt-4 text-2xl font-semibold">{user?.displayName || "Anonymous User"}</h2>
          <p className="text-gray-300 text-sm">Admin</p>
        </div>

        {/* User Info */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Email:</span>
            <span>{user?.email || "Not Provided"}</span>
          </div>

          <div className="flex items-center justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Phone:  </span>
            <span>{user?.phoneNumber || "01576716416"}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Address:</span>
            <span>{user?.address || "Noakhali,Bnagladesh"}</span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AdminProfile;















