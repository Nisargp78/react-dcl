import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { userContext } from '../context/UserContext'

const ProtectedRoute = ({ children }) => {
  let { user } = useContext(userContext);
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" replace />
  }
}

export default ProtectedRoute