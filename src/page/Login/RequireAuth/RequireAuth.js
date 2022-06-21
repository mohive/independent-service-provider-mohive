import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = () => {
    const [user, loading]=useAuthState(auth);
    const location=useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!auth){
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;