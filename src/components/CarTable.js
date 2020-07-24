import React from "react"

// Material Imports
import MaterialTable from "material-table"

// Constant imports
import { carColumns, tableLocalizationOptions } from "../constants/table"

function CarTable({ data, onRowUpdate, onDelete }) {
  function handleRowUpdate(newData, oldData) {
    onRowUpdate(newData, oldData)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  function handleDeleteCar(title) {
    onDelete(title)
  }

  return (
    <MaterialTable
      columns={carColumns}
      data={data}
      title="Automóveis"
      localization={tableLocalizationOptions}
      actions={[
        {
          icon: "delete",
          tooltip: "Remover Automóvel",
          onClick: (event, rowData) => handleDeleteCar(rowData.title),
        },
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
      editable={{
        onRowUpdate: handleRowUpdate,
      }}
    />
  )
}

export default CarTable
