// import React, { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import { Helmet } from 'react-helmet-async';
// // import { AuthContext } from '../context/AuthProvider';

// const AdminProfile = () => {
//   const { user } = useContext(AuthContext);

//   // Mock role determination logic (replace with your backend role logic if needed)
//   const role = user?.email === "admin@example.com" ? "Admin" : null;

//   return (
//     <div className="p-6 bg-blue-800 bg-opacity-15 shadow-md rounded-md max-w-md mx-auto">
//       <Helmet>
//               <title> ProFellow | Admin DasBoard | Admin Profile</title>
//             </Helmet>
//       <h1 className="text-2xl font-semibold mb-4 text-green-500">My Profile</h1>

//       {user ? (
//         <div>
//           <div className="flex justify-center gap-4 mb-6">
//             <img
//               src={user.photoURL || "https://via.placeholder.com/150"} // Placeholder if no photoURL
//               alt={`${user.displayName || "User"}'s profile`}
//               className="w-16 h-16 rounded-full object-cover"
//             />
//             <div className=''>
//               <h2 className="text-xl font-medium text-white mt-4">{user.displayName || "Anonymous User"}</h2>
//               {role && <p className="text-gray-500 text-sm">{role}</p>}
//             </div>
//           </div>

//           <div className="space-y-4 text-white ">
//             <div>
//               <h3 className="font-medium -ml-20">Email:</h3>
//               <p className="text-white -mr-32 -mt-6 mb-4">{user.email}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500">No user is logged in.</p>
//       )}
//     </div>
//   );
// };

// export default AdminProfile;













import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  // Mock role determination logic (replace with your backend role logic if needed)
  const role = user?.email === "admin@example.com" ? "Admin" : null;

  return (
    <div className="p-6 bg-blue-800 bg-opacity-15 shadow-md rounded-md max-w-md mx-auto">
      <Helmet>
        <title> ProFellow | Admin Dashboard | Admin Profile</title>
      </Helmet>
      <h1 className="text-2xl font-semibold mb-4 text-green-500 text-center">My Profile</h1>

      {user ? (
        <div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mb-6">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"} // Placeholder if no photoURL
              alt={`${user.displayName || "User"}'s profile`}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-medium text-white mt-4">{user.displayName || "Anonymous User"}</h2>
              {role && <p className="text-gray-500 text-sm">{role}</p>}
            </div>
          </div>

          <div className="space-y-4 text-white">
            <div>
              <h3 className="font-medium">Email:</h3>
              <p className="text-white">{user.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No user is logged in.</p>
      )}
    </div>
  );
};

export default AdminProfile;



















