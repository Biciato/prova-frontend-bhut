import React, { useState } from "react"

// Material imports
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"

// Style Components
import {
  AddAutoSection,
  FormFooter,
  SaveBtn,
  Set,
  Header,
  HeaderIcon,
  RightContainer,
  ImgDiv,
  LeftImg,
  Header1,
  LeftContainer,
  FormContainer,
  SetInputContainer,
  ErrorSpan,
} from "../styles/AddAutoStyle"

// Custom Components
import InformativeDialog from "../components/InformativeDialog"

// Assets imports
import cars from "../assets/cars.jpg"

// Axios
import axios from "axios"

// Helper imports
import { formatReal } from "../helpers/index"

function AddAuto() {
  const [brandError, setBrandError] = useState(false)
  const [brand, setBrand] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [title, setTitle] = useState("")
  const [priceError, setPriceError] = useState(false)
  const [price, setPrice] = useState("")
  const [ageError, setAgeError] = useState(false)
  const [age, setAge] = useState("")
  const [openInformativeDialog, setOpenInformativeDialog] = useState(false)
  const [informativeDialogMessage, setInformativeDialogMessage] = useState("")

  function handleCloseInformativeDialog() {
    setOpenInformativeDialog(false)
  }

  function saveNewCar() {
    if (brand === "") setBrandError(true)
    if (title === "") setTitleError(true)
    if (price === "") setPriceError(true)
    if (age === "") setAgeError(true)
    if (![brand, title, price, age].includes("")) {
      axios
        .post("http://157.230.213.199:3000/api/cars", {
          brand,
          title,
          price: price.split(".").join("").replace(",", "."),
          age,
        })
        .then(() => {
          setInformativeDialogMessage(`Automóvel ${title} salvo com sucesso!!!`)
        })
        .catch(() => {
          setInformativeDialogMessage(`Não foi possível carregar os dados nesse momento !!!`)
        })

      setOpenInformativeDialog(true)
    }
  }

  return (
    <Container maxWidth={false} disableGutters={true}>
      <AddAutoSection>
        <FormContainer>
          <LeftContainer>
            <Header1>
              <HeaderIcon className="material-icons">directions_car</HeaderIcon>AUTOMÓVEIS
            </Header1>
            <ImgDiv>
              <LeftImg src={cars} alt="Cars"></LeftImg>
            </ImgDiv>
          </LeftContainer>
          <RightContainer>
            <Header>
              <Header1>Adicionar Carro</Header1>
              <Set>
                <SetInputContainer>
                  <TextField
                    label="Marca"
                    value={brand}
                    onChange={(e) => {
                      setBrand(e.target.value)
                      setBrandError(false)
                    }}
                    fullWidth
                    error={brandError}
                  />
                  {brandError && <ErrorSpan>Campo Obrigatório</ErrorSpan>}
                </SetInputContainer>
                <SetInputContainer>
                  <TextField
                    label="Modelo"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value)
                      setTitleError(false)
                    }}
                    fullWidth
                    error={titleError}
                  />
                  {titleError && <ErrorSpan>Campo Obrigatório</ErrorSpan>}
                </SetInputContainer>
                <SetInputContainer>
                  <TextField
                    label="Preço"
                    value={price}
                    onChange={(e) => {
                      setPrice(formatReal(e.target.value))
                      setPriceError(false)
                    }}
                    fullWidth
                    error={priceError}
                  />
                  {priceError && <ErrorSpan>Campo Obrigatório</ErrorSpan>}
                </SetInputContainer>
                <SetInputContainer>
                  <TextField
                    label="Ano"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value)
                      setAgeError(false)
                    }}
                    fullWidth
                    error={ageError}
                  />
                  {ageError && <ErrorSpan>Campo Obrigatório</ErrorSpan>}
                </SetInputContainer>
              </Set>
            </Header>
            <FormFooter>
              <Set>
                <SaveBtn onClick={saveNewCar}>Salvar</SaveBtn>
              </Set>
            </FormFooter>
          </RightContainer>
        </FormContainer>
      </AddAutoSection>
      <InformativeDialog
        open={openInformativeDialog}
        message={informativeDialogMessage}
        onClose={handleCloseInformativeDialog}
      />
    </Container>
  )
}

export default AddAuto
