import React from 'react'
import {Navigate , Outlet} from "react-router-dom"

const PrivateRouter = () => {
    const userAuthenticated = true; //! kullanıcı sifresini dogru girdi simülasyonu icin yazdık.
  return (
    <div>
        {userAuthenticated ? <Outlet/> : <Navigate to="/register"/> }
    </div>
  )
}

export default PrivateRouter