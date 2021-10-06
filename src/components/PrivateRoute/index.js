import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const PrivateRoute = ({ children, ...rest }) => {
  
  const {user} = useContext(UserContext)
  console.log("user -> "+user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )}
    />
  )
}

export default PrivateRoute