// import axios from "axios";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// // import AuthProvider from "../Provider/AuthProvider";


// const AxiosSecure = axios.create({
//   baseURL: 'http://:5000'
// })

// const UseAxiosSecure = () => {
//   const navigate = useNavigate();
//   const {logout} = useContext(AuthContext);
//   AxiosSecure.interceptors.request.use(function(config){
//     const token = localStorage.getItem("access-token")
//     console.log('request interceptor', token)
//     config.headers.authorization = `Bearer ${token}`
//     return config
//   }, function(error){
//     return Promise.reject(error)
//   }
// )

//    AxiosSecure.interceptors.response(function(response){
//     return response;
//    }, async(error) => {
//         const status = error.response.status
//         if(status === 401 || status === 403 ){
//           await logout()
//           navigate('/login')
//         }
//          return Promise.reject(error)
//    })


//   return AxiosSecure
// };

// export default UseAxiosSecure; 













import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AxiosSecure = axios.create({
  // baseURL: 'http://:5000'
  baseURL: 'https://scholarship-server-project.vercel.app'
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  AxiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    console.log('request interceptor', token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  AxiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        await logout();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );

  return AxiosSecure;
};

export default UseAxiosSecure;




















