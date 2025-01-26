// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosSecure from "../hooks/UseAxsiosSecure";

import { useContext } from "react";
import UseAxiosSecure from "../hooks/UseAxsiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


// const UseAdmin = () => {
//   const {user} = useContext(AuthContext);
//   const axiosSecure = UseAxiosSecure();
//   const {data} = useQuery({
//     queryKey: [user?.email, 'isAdmin'],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/admin/${user.email}`)
//       console.log(res.data)
//       return res.data?.admin;

//     }
//   })
//   return [isAdmin]
// };

// export default UseAdmin;























// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosSecure from "../hooks/UseAxsiosSecure";

// const UseAdmin = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = UseAxiosSecure();

//   const { data: isAdmin, isAdminLoading, error } = useQuery({
//     queryKey: [user?.email, 'isAdmin'],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/admin/${user.email}`);
//       console.log(res.data);
//       return res.data?.Admin;
//     },
//     enabled: !!user?.email, // Ensure query runs only when user email is available
//   });

//   return [isAdmin, isAdminLoading, error];
// };

// export default UseAdmin;





















// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosSecure from "../hooks/UseAxsiosSecure";

// const UseAdmin = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = UseAxiosSecure();

//   const { data: isAdmin, isLoading, error } = useQuery({
//     queryKey: [user?.email, 'isAdmin'],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/admin/${user.email}`);
//       console.log(res.data);
//       return res.data?.admin;
//     },
//     enabled: !!user?.email, // Ensure query runs only when user email is available
//   });

//   return [isAdmin, isLoading, error];
// };

// export default UseAdmin;






























































const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data, isLoading, error, isAdmin } = useQuery({
    queryKey: [user?.email, 'userRoles'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);  // Make sure to check the response data
      return res.data; // Return both admin and moderator statuses
    },
    enabled: !!user?.email, // Ensure query runs only when user email is available
  });

  return [data, isLoading, error, isAdmin]; // Return the full data
};

export default UseAdmin;














