import React, { useEffect } from 'react'
import { Outlet, Navigate,  useSearchParams, useLocation} from 'react-router-dom'

function AuthRoute() {
  const[search, setSearch] = useSearchParams()
  const pathName= useLocation().pathname
  
  
    const isLoad= true
    if(!isLoad){
       return <Navigate to="/login"  state={{message:"You must Login First!", path:pathName}}/>
    }
    return <Outlet />
    
}

export default AuthRoute
