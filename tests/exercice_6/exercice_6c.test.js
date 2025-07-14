const { estConnecte } = require("../../02-type-donnes/exercice_6/main.js");

test("Exercice 6c : la variable estConnecte est un booléen", () => {
  expect(typeof estConnecte).toBe("boolean");
});
