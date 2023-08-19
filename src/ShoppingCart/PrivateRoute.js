import React, { useContext } from 'react'
// import { navigate } from 'gatsby'
// import { AuthContext } from '../../api/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, location, ...rest }) => {

    console.log('component..',Component);
    console.log('location..',location)

//   if (!auth.isUserSignedIn) {
//     navigate(`/signIn`, { state: { from: location.pathname } })
//     return null
//   }
//   return <Component {...rest} />
}

export default PrivateRoute
