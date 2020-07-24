// receives price and normalizes to BRL currency
export function normalizePrice(price) {
  if (typeof price === "number") {
    return Number(price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  } else {
    return parseFloat(price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }
}

// Car price input mask
export function formatReal(val) {
  let tmp = val.replace(/[\D]+/g, "")
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1")
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
  if (tmp[0] === ",") tmp = `0${tmp}`
  if (tmp[0] === "0" && tmp.length > 4) tmp = tmp.replace("0", "")
  return tmp
}
