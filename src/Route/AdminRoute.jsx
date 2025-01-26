import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import UseAdmin from './UseAdmin';

const AdminRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  const {isAdmin, isAdminLoading} = UseAdmin();
  const location = useLocation();
  

  if(loading || isAdminLoading){
    return <span className="loading loading-dots loading-sm"></span>;
  }

  if(user && isAdmin){
    return children
  }
  return <Navigate to={'/'} state={{from:  location}} replace></Navigate>
};

export default AdminRoute;



