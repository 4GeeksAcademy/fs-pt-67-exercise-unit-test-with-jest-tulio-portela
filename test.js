
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba para la función fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Prueba para la función fromDollarToYen
test("One dollar should be 146.26 yenes", function() {
    const yenes = fromDollarToYen(1);
    const expected = 1 * (156.5 / 1.07);
    expect(yenes).toBeCloseTo(expected, 2);
});

// Prueba para la función fromYenToPound
test("One yen should be 0.0056 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = 1 * (0.87 / 156.5);
    expect(pounds).toBeCloseTo(expected, 4);
});
