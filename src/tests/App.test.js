import React from "react"
import App from "../App"

import { unmountComponentAtNode } from "react-dom"

import { render } from "@testing-library/react"
import AuthProvider from "../context/auth"

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test("App should render MainAppBar if user is logged in", () => {
  const { getByText } = render(
    <AuthProvider value={{ data: 'token' }}>
      <App />
    </AuthProvider>
  , container)
  expect(getByText('Dashboard')).toBeTruthy()
})
