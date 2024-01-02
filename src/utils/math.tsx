export function formatPrice(priceToFormat) {
    let price = priceToFormat

    if (!price) return "0,00 €"
    if (isNaN(price)) return "NaN €"
    price = replaceFrenchCommaWithDot(price)

    const formattedPrice = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
    }).format(price)
    return formattedPrice
}

export function replaceFrenchCommaWithDot(price: number | string) {
    if (typeof price === "string") price = parseFloat(price.replace(",", "."))
    return price
}