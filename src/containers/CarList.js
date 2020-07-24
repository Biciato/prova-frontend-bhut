import React, { useEffect, useState } from "react"

// Axios
import axios from "axios"

// Custom Component imports
import CarTable from "../components/CarTable"
import ConfirmDialog from "../components/ConfirmDialog"
import InformativeDialog from "../components/InformativeDialog"

function CarList() {
  const [carList, setCarList] = useState([])
  const [openInformativeDialog, setOpenInformativeDialog] = useState(false)
  const [informativeDialogMessage, setInformativeDialogMessage] = useState("")
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)
  const [confirmDialogMessage, setConfirmDialogMessage] = useState("")
  const [autoSelected, setAutoSelected] = useState("")

  useEffect(() => {
    axios("http://157.230.213.199:3000/api/cars")
      .then((result) => setCarList(result.data))
      .catch(() => {
        setInformativeDialogMessage(`Não foi possível carregar os dados nesse momento !!!`)
        setOpenInformativeDialog(true)
      })
  }, [])

  function confirmDelete(auto) {
    setAutoSelected(auto)
    setConfirmDialogMessage(`Tem certeza que deseja remover o automóvel ${auto} ?`)
    setOpenConfirmDialog(true)
  }

  function handleCloseInformativeDialog() {
    setOpenInformativeDialog(false)
  }

  function getAuto() {
    return carList.find((auto) => auto.title === autoSelected)
  }

  function handleCloseConfirmDialog() {
    setOpenConfirmDialog(false)
  }

  function handleAcceptDelete() {
    setOpenConfirmDialog(false)

    const auto = getAuto()

    removeAuto(auto._id)
  }

  function removeAuto(id) {
    axios
      .delete(`http://157.230.213.199:3000/api/cars/${id}`)
      .then(() => {
        setInformativeDialogMessage(`Automóvel ${autoSelected} removido com sucesso !!!`)
        const newCarList = [...carList].filter((auto) => auto._id !== id)
        setCarList(newCarList)
      })
      .catch(() => {
        setInformativeDialogMessage("Não foi possível remover o automóvel no momento!!!")
      })
    setOpenInformativeDialog(true)
  }

  async function updateAuto(newData, oldData) {
    axios
      .put(`http://157.230.213.199:3000/api/cars/${newData._id}`, newData)
      .then(() => {
        updateTable(newData, oldData)
      })
      .catch(() => {
        setInformativeDialogMessage("Não foi possível editar o automóvel no momento!!!")
        setOpenInformativeDialog(true)
        updateTable(oldData, oldData)
      })
  }

  function updateTable(newData, oldData) {
    const dataUpdate = [...carList]
    const index = oldData.tableData.id
    dataUpdate[index] = newData
    setCarList([...dataUpdate])
  }

  return (
    <>
      <CarTable data={carList} onDelete={confirmDelete} onRowUpdate={updateAuto} />
      <InformativeDialog
        open={openInformativeDialog}
        message={informativeDialogMessage}
        onClose={handleCloseInformativeDialog}
      />
      <ConfirmDialog
        open={openConfirmDialog}
        message={confirmDialogMessage}
        onHandleAccept={handleAcceptDelete}
        onHandleClose={handleCloseConfirmDialog}
      />
    </>
  )
}

export default CarList
