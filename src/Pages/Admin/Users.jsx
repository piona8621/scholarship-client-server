// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import UseAxiosSecure from '../../hooks/UseAxsiosSecure';

// const Users = () => {
// const axiosSecure = UseAxiosSecure();
//   const {data : users = []} = useQuery({
//     queryKey: ["users"],
//     queryFn: async() => {
//           const res = await axiosSecure.get('/users')
//           return res.data;
//     }


//   });

//   return (
//     <div>
//   <div className='flex justify-evenly'>
//     <h2>All Users</h2>
//     <h2>Total users:{users.length} </h2>

//     <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Favorite Color</th>
//         <th></th>
//       </tr>
//     </thead>
//     <tbody>
//       {users.map (user => <tr key={user._id}>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <td>
//           <div className="flex items-center gap-3">
//             <div className="avatar">
//               <div className="mask mask-squircle h-12 w-12">
//                 <img
//                   src="https://img.daisyui.com/images/profile/demo/2@94.webp"
//                   alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//             <div>
//               <div className="font-bold">Hart Hagerty</div>
//               <div className="text-sm opacity-50">United States</div>
//             </div>
//           </div>
//         </td>
//         <td>
//           Zemlak, Daniel and Leannon
//           <br />
//           <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//         </td>
//         <td>Purple</td>
//         <th>
//           <button className="btn btn-ghost btn-xs">details</button>
//         </th>
//       </tr>    )}
  
      
      
//     </tbody>
    
//   </table>
// </div>


//     </div> 
//     </div>
//   );
// };

// export default Users; 



































import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseAxiosSecure from '../../hooks/UseAxsiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Users = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  

  const [filterRole, setFilterRole] = useState('');
  




  // const handleRoleChange = async (userId, newRole) => {
  //   await axiosSecure.patch(`/users/${userId}`, { role: newRole });
  //   refetch();
  // };

  




  // const handleRoleChange = async (userId, newRole) => {
  //   try {
  //     const endpoint = newRole === "admin" ? `/users/admin/${userId}` : `/users/${userId}`;
  //     const response = await axiosSecure.patch(endpoint, { role: newRole });
  
  //     if (response.data.modifiedCount > 0) {
  //       Swal.fire("Success!", "User role updated successfully.", "success");
  //       refetch();
  //     } else {
  //       Swal.fire("Error!", "Failed to update user role. Please try again.", "error");
  //     }
  //   } catch (error) {
  //     console.error("Error updating role:", error);
  //     Swal.fire("Error!", "Something went wrong while updating the role.", "error");
  //   }
  // };
  

  
  // const handleRoleChange = (user) => {
  //   if (!user._id) {
  //     console.error("User ID is undefined!");
  //     return;
  //   }
  
  //   axiosSecure.patch(`/users/admin/${user._id}`)
  //     .then(res => {
  //       console.log(res.data);
  //       if (res.data.modifiedCount > 0) {
  //         Swal.fire({
  //           title: 'Success!',
  //           text: 'User role updated successfully.',
  //           icon: 'success',
  //           confirmButtonText: 'OK'
  //         });
  //       } else {
  //         Swal.fire({
  //           title: 'Info',
  //           text: 'No changes were made.',
  //           icon: 'info',
  //           confirmButtonText: 'OK'
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       Swal.fire({
  //         title: 'Error!',
  //         text: 'An error occurred while updating the user role.',
  //         icon: 'error',
  //         confirmButtonText: 'OK'
  //       });
  //       console.error(error);
  //     });
  // };
  
  





  const handleRoleChange = async (userId, newRole) => {
    try {
      const response = await axiosSecure.patch(`/users/${userId}`, { role: newRole });
      if (response.data.modifiedCount > 0) {
        Swal.fire("Success!", `User role updated to ${newRole} successfully.`, "success");
        refetch();
      } else {
        Swal.fire("Error!", "Failed to update user role. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      Swal.fire("Error!", "Something went wrong while updating the role.", "error");
    }
  };
  


  
 
  
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://scholarship-server-project.vercel.app/users/${_id}`, {  // Corrected URL with backticks
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.result?.deletedCount > 0) {  // Adjusted to access nested deletedCount
              Swal.fire("Deleted!", "User has been deleted.", "success");
              refetch();  // Refresh the data using refetch from useQuery
            } else {
              Swal.fire("Error!", "Failed to delete user. Please try again.", "error");
            }
          })
          .catch(error => {
            console.error("Error deleting user:", error);
            Swal.fire("Error!", "Failed to delete user. Please try again.", "error");
          });
      }
    });
  };
  






  const filteredUsers = filterRole
    ? users.filter(user => user.role === filterRole)
    : users;

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <Helmet>
                <title> ProFellow | All Users</title>
              </Helmet>
        <h2>All Users</h2>
        <h2 className='text-green-500 text-4xl'>Total users: {users.length}</h2>
        <div>
          <label>Filter by Role:</label>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="select select-bordered ml-2 bg-green-200 text-green-600"
          >
            <option value=''>All</option>
            <option value='user'>User</option>
            <option value='moderator'>Moderator</option>
            <option value='admin'>Admin</option>
            
          </select>
        </div>
      </div>
      <div className="overflow-x-auto  ">
        <table className="table text-blue-200 text-lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className=''>
            {filteredUsers.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="select selected-bordered bg-green-100 text-green-500"
                  >
                    <option value='user'>User</option>
                    <option value='moderator'>Moderator</option>
                    <option value='admin'>Admin</option>
                  
                  </select>
                </td>


                <td>
                <button
  className="btn btn-error btn-xl btn-outline"
  onClick={() => handleDelete(user._id)}
>
  Delete
</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;







{
  headers:{
    authorization: `Bearer ${localStorage.getItem('access-token')}`
  }
}


























// import { useQuery } from '@tanstack/react-query';
// import React, { useState } from 'react';
// import UseAxiosSecure from '../../hooks/UseAxsiosSecure';
// import Swal from 'sweetalert2';

// const Users = () => {
//   const axiosSecure = UseAxiosSecure();
//   const { data: users = [], refetch } = useQuery({
//     queryKey: ['users'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/users');
//       return res.data;
//     },
//   });

//   const [filterRole, setFilterRole] = useState('');

//   const handleRoleChange = async (userId, newRole) => {
//     await axiosSecure.patch(`/users/${userId}`, { role: newRole });
//     refetch();
//   };

//   const makeAdminByEmail = async (email) => {
//     const user = users.find(u => u.email === email);
//     if (user) {
//       await handleRoleChange(user._id, "admin");
//       Swal.fire("Success", `${email} has been made an admin.`, "success");
//     } else {
//       Swal.fire("Error", `User with email ${email} not found.`, "error");
//     }
//   };

//   const handleDelete = (_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/users/${_id}`, {
//           method: "DELETE",
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.result?.deletedCount > 0) {
//               Swal.fire("Deleted!", "User has been deleted.", "success");
//               refetch();
//             } else {
//               Swal.fire("Error!", "Failed to delete user. Please try again.", "error");
//             }
//           })
//           .catch(error => {
//             Swal.fire("Error!", "Failed to delete user. Please try again.", "error");
//           });
//       }
//     });
//   };

//   const filteredUsers = filterRole
//     ? users.filter(user => user.role === filterRole)
//     : users;

//   return (
//     <div>
//       <div className='flex justify-between items-center mb-4'>
//         <h2>All Users</h2>
//         <h2>Total users: {users.length}</h2>
//         <div>
//           <label>Filter by Role:</label>
//           <select
//             value={filterRole}
//             onChange={(e) => setFilterRole(e.target.value)}
//             className="select select-bordered ml-2"
//           >
//             <option value=''>All</option>
//             <option value='user'>User</option>
//             <option value='moderator'>Moderator</option>
//             <option value='admin'>Admin</option>
//           </select>
//         </div>
//       </div>
//       <button onClick={() => makeAdminByEmail('pionara02@gmail.com')} className="btn btn-primary mb-4">
//         Make Admin (Effat Ara)
//       </button>
//       <div className="overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map(user => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <select
//                     value={user.role}
//                     onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                     className="select select-bordered"
//                   >
//                     <option value='user'>User</option>
//                     <option value='moderator'>Moderator</option>
//                     <option value='admin'>Admin</option>
//                   </select>
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-xs"
//                     onClick={() => handleDelete(user._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Users;




























