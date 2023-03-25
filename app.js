// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// one dollar is:
let oneDollarIs = {
    "JPY": 130.75, // japan yen
    "EUR": 0.93, // euro euros
    "GBP": 0.82, // british pound
}

// one yen is:
let oneYenIs = {
    "EUR": 0.0071, // euro euro
    "USD": 0.0076, // us dollar
    "GBP": 0.0063, // british pound
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (usd) => {
    return usd * oneDollarIs.JPY;
}

const fromEuroToDollar = (eu) => {
    return eu * oneEuroIs.USD;
}

const fromYenToPound = (yen) => {
    return yen * oneYenIs.GBP;
}

// just a console log for ourselves.
console.log(sum(7,3))
console.log("Dollar to Yen " + fromDollarToYen(5))
console.log("Euro to Dollar " + fromEuroToDollar(3.5))
console.log("Yen to Pound " + fromYenToPound(3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen };