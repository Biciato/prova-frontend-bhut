import React, { useState, useContext } from "react"
import { Redirect } from "react-router-dom"
import { Container, Form, Input, Button, Error, Box, Header } from "../styles/LoginStyle"
import { authContext } from "../context/auth"

function fakeAuth(data) {
  const { username, password } = data
  if (username === "admin" && password === "pass123") {
    return Promise.resolve({ data: "faketoken" })
  } else {
    return Promise.reject()
  }
}

function Login() {
  const [isError, setIsError] = useState(false)
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { auth, setAuthData } = useContext(authContext)

  function postLogin() {
    fakeAuth({
      username,
      password,
    })
      .then((result) => {
        setAuthData(result.data)
      })
      .catch(() => {
        setIsError(true)
      })
  }

  if (auth.data) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <Form>
        <Box>
          <Header>Dashboard</Header>
          <Input
            type="username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            placeholder="email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            placeholder="password"
          />
          <Button onClick={postLogin}>Login</Button>
        </Box>
      </Form>
      {isError && <Error>The username or password provided were incorrect!</Error>}
    </Container>
  )
}

export default Login
