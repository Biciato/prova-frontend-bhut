import React, { useContext } from "react"

// React Router imports
import { Route, Redirect } from "react-router-dom"

// Context imports
import { authContext } from "../context/auth"

function PrivateRoute({ component: Component, ...rest }) {
  const { auth } = useContext(authContext)
  const { loading } = auth

  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>
        }}
      />
    )
  }

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return auth.data ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { referer: routeProps.location } }} />
        )
      }}
    />
  )
}

export default PrivateRoute
