import React, { useContext } from 'react';
import { authContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(authContext);
    const location = useLocation();
    console.log(location);
    if(loader){
        return <div><p>loading.....</p></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>;
};

export default PrivateRoute;