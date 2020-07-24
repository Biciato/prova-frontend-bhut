import React, { useContext } from "react"

// React Router imports
import { Switch, BrowserRouter, Route } from "react-router-dom"

// Custom Components imports
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import AddAuto from "./pages/AddAuto"
import PrivateRoute from "./components/PrivateRoute"
import MainAppBar from "./components/MainAppBar"
import NoRouteMatch from "./components/NoRouteMatch"

// Auth context imports
import { authContext } from "./context/auth"

function App() {
  const { auth } = useContext(authContext)

  return (
    <>
      {auth.data && <MainAppBar />}
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Admin} />
          <PrivateRoute path="/add" component={AddAuto} />
          <Route path="*">
            <NoRouteMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
