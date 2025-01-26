// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({children}) => {
//   const {user, loading} = useContext(AuthContext);
//    if(loading){
//       return <span className="loading loading-dots loading-sm"></span>
//    }
//   if(user){
//      return children;
//   }
//   return <Navigate to={'/login'}>

//   </Navigate>
// };

// export default PrivateRoute;






























// hi

import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-dots loading-sm"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;




































































