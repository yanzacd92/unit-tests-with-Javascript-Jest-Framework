// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One yen should be 0.0063 pounds", function(){
    expect(fromYenToPound(3)).toBe(0.0189);
})

test("One dollar should be 130.75 yens", function(){
    expect(fromDollarToYen(5)).toBe(653.75);
})