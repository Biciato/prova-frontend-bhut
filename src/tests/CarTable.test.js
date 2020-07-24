import React from "react"

import { unmountComponentAtNode } from "react-dom"

import { render } from "@testing-library/react"
import CarTable from "../components/CarTable"

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

test("Car Table should show car data", () => {
  const data = [
    {
      title: 'Car 1',
      brand: 'Car Brand 1',
      price: 'Car Price 1',
      age: 'Car Age 1' 
    },
    {
      title: 'Car 2',
      brand: 'Car Brand 2',
      price: 'Car Price 2',
      age: 'Car Age 2' 
    }
  ]

  const { getByText } = render(
    <CarTable data={data}/>, container
  )
  expect(getByText('Car 1')).toBeTruthy()
  expect(getByText('Car 2')).toBeTruthy()
})
