import React from "react";
import { useEffect } from "react";
import  {useLocation, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

export function ProtectedRoute({ children}) {
    const location = useLocation();
    
    const { currentUser} = useSelector((s) => s.loginReducer)
    const auth = currentUser;
    console.log(auth)


    if(!auth){
        return <Navigate to='/login' state={{from:location}} />
    }
  return children
    
}
