// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (usd) => {
    let euros = usd / oneEuroIs.USD;
    let yen = euros * oneEuroIs.JPY;
    return yen;
}

const fromEuroToDollar = (eu) => {
    return eu * oneEuroIs.USD;
}

const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

// just a console log for ourselves.
console.log(sum(7,3))
console.log("Dollar to Yen " + fromDollarToYen(2.3))
console.log("Euro to Dollar " + fromEuroToDollar(3.5))
console.log("Yen to Pound " + fromYenToPound(20000.1))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen };