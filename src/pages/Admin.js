import React from "react"

// React Router imports
import { NavLink } from "react-router-dom"

// Material Imports
import Container from "@material-ui/core/Container"

// Styled Components imports
import { Button, Section } from "../styles/AdminStyle"

// Custom Components imports
import CarList from "../containers/CarList"

function Admin() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Section>
        <CarList />
        <Button>
          <i className="material-icons">add</i>
          <NavLink to="/add" style={{ textDecoration: "none", color: "white" }}>
            Automóvel
          </NavLink>
        </Button>
      </Section>
    </Container>
  )
}

export default Admin
