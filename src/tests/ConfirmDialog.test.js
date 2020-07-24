import React from "react"

import { unmountComponentAtNode } from "react-dom"

import { render } from "@testing-library/react"
import ConfirmDialog from "../components/ConfirmDialog"

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

test("Confirm dialog should have text passed", () => {
  const message = "Message test"
  const openDialog = true

  const { getByText } = render(
    <ConfirmDialog open={openDialog} message={message} />, container
  )
  expect(getByText('Message test')).toBeTruthy()
})
