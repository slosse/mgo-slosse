import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, user, ...rest }) => {
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