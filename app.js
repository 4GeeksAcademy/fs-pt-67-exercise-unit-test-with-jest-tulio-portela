console.log("Hello World");

// función que suma dos números
const sum = (a, b) => {
    return a + b;
};

// Función para convertir euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};

// convertir dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * (156.5 / 1.07);
    return valueInYen;
};

// convertir yenes a libras esterlinas
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * (0.87 / 156.5);
    return valueInPound;
};
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
