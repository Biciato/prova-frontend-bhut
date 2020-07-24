import styled from "styled-components"

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  background: #3498db;
  margin: 0 auto 0 auto;
  width: 100%;
  height: -webkit-fill-available;
  text-align: center;
  display: flex;
  align-items: center;
`
const Form = styled.div`
  width: 100%;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 300px;
  border-radius: 6px;
  margin: 0 auto 0 auto;
  padding: 0px 0px 70px 0px;
  border: #2980b9 4px solid;
`
const Header = styled.h1`
  font-size: 1.5em;
  color: #525252;
`

const Input = styled.input`
  background: #ecf0f1;
  border: #ccc 1px solid;
  border-bottom: #ccc 2px solid;
  padding: 8px;
  width: 250px;
  color: #aaaaaa;
  margin: 1em auto;
  font-size: 1em;
  border-radius: 4px;
`

const Button = styled.button`
  background: #2ecc71;
  width: 125px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  border-radius: 4px;
  border: #27ae60 1px solid;
  margin: auto;
  font-weight: 800;
  font-size: 0.8em;
`

const Error = styled.div`
  background-color: red;
`

export { Box, Form, Header, Container, Input, Button, Error }
