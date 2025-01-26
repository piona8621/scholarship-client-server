// import React, { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// // import { AuthContext } from '../context/AuthProvider';

// const ModeratorProfile = () => {
//   const { user } = useContext(AuthContext);

//   // Mock role determination logic (replace with your backend role logic if needed)
//   const role = user?.email === "admin@example.com" ? "Admin" : null;

//   return (
//     <div className="p-6  shadow-md rounded-md max-w-md mx-auto">
//       <h1 className="text-2xl font-semibold mb-4">My Profile</h1>

//       {user ? (
//         <div>
//           <div className="flex items-center gap-4 mb-6">
//             <img
//               src={user.photoURL || "https://via.placeholder.com/150"} // Placeholder if no photoURL
//               alt={`${user.displayName || "User"}'s profile`}
//               className="w-16 h-16 rounded-full object-cover"
//             />
//             <div>
//               <h2 className="text-xl font-medium">{user.displayName || "Anonymous User"}</h2>
//               {role && <p className="text-gray-500 text-sm">{role}</p>}
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div>
//               <h3 className="font-medium">Email:</h3>
//               <p className="text-gray-700">{user.email}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500">No user is logged in.</p>
//       )}
//     </div>
//   );
// };

// export default ModeratorProfile;























import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
// import { AuthContext } from '../context/AuthProvider';

const ModeratorProfile = () => {
  const { user } = useContext(AuthContext);

  // Mock role determination logic (replace with your backend role logic if needed)
  const role = user?.email === "admin@example.com" ? "Admin" : null;

  return (
    <div className="p-6 bg-blue-800 bg-opacity-15 shadow-md rounded-md max-w-md mx-auto">
      <Helmet>
              <title> ProFellow | Moderator DasBoard | Moderator Profile </title>
            </Helmet>
      <h1 className="text-2xl font-semibold mb-4 text-green-500">My Profile</h1>

      {user ? (
        <div>
          <div className="flex justify-center gap-4 mb-6">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"} // Placeholder if no photoURL
              alt={`${user.displayName || "User"}'s profile`}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className=''>
              <h2 className="text-xl font-medium text-white mt-4">{user.displayName || "Anonymous User"}</h2>
              {role && <p className="text-gray-500 text-sm">{role}</p>}
            </div>
          </div>

          <div className="space-y-4 text-white ">
            <div>
              <h3 className="font-medium -ml-28"> Email :  </h3>
              <p className="text-white -mr-28 -mt-6 mb-4"> {user.email} </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No user is logged in.</p>
      )}
    </div>
  );
};

export default ModeratorProfile;
























