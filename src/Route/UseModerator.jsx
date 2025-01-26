// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosSecure from "../hooks/UseAxsiosSecure";

// const UseModerator = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = UseAxiosSecure();

//   const { data: isModerator, isLoading, error } = useQuery({
//     queryKey: [user?.email, 'isModerator'],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/moderator/${user.email}`);
//       console.log(res.data);
//       return res.data?.moderator;
//     },
//     enabled: !!user?.email, // Ensure query runs only when user email is available
//   });

//   return [isModerator, isLoading, error];
// };

// export default UseModerator;







































import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "../hooks/UseAxsiosSecure";

const UseModerator = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data: isModerator, isLoading, error } = useQuery({
    queryKey: [user?.email, 'isModerator'],
    queryFn: async () => {
      const res = await axiosSecure.get(`users/moderator/${user.email}`);
      return res.data?.moderator;
    },
    enabled: !!user?.email, // Ensure query runs only when user email is available
  });

  return [isModerator, isLoading, error];
};

export default UseModerator;













