import React from "react"

// React Router imports
import { Redirect } from "react-router-dom";

function NoRouteMatch() {
  return (
    <Redirect to="/" />
  )
}

export default NoRouteMatch