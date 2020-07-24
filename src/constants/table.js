import { normalizePrice } from "../helpers/index"

export const carColumns = [
  { title: "Modelo", field: "title" },
  { title: "Marca", field: "brand" },
  {
    title: "Preço",
    field: "price",
    type: "numeric",
    render: function (rowData) {
      return normalizePrice(rowData.price)
    },
  },
  {
    title: "Ano",
    field: "age",
  },
]

export const tableLocalizationOptions = {
  body: {
    emptyDataSourceMessage: "Nenhum registro para exibir",
  },
  toolbar: {
    searchPlaceholder: "Pesquisar",
    searchTooltip: "Pesquisar",
  },
  pagination: {
    labelRowsSelect: "linhas",
    labelDisplayedRows: "{count} de {from}-{to}",
    firstTooltip: "Primeira página",
    previousTooltip: "Página anterior",
    nextTooltip: "Próxima página",
    lastTooltip: "Última página",
  },
  header: {
    actions: "",
  },
}
