const { celsiusToFahrenheit } = require("../../01-variables/exercice_5/main.js");

test("Exercice 5 : la conversion en Fahrenheit est correctement calculée", () => {
  expect(celsiusToFahrenheit(25)).toBe(77);
});
