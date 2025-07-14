const { age } = require("../../02-type-donnes/exercice_6/main.js");

test("Exercice 6 : la variable age est un nombre", () => {
  expect(typeof age).toBe("number");
});
