import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../context/UserContext'

const PrivateRoute = ({ children }) => {
  let { user } = useContext(userContext);
  if (user?.role === 'admin') {
    return children;
  } else {
    return <Navigate to="/login" replace />
  }
}

export default PrivateRoute