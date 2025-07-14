const { nom } = require("../../02-type-donnes/exercice_6/main.js");

test("Exercice 6b : la variable nom est une chaîne de caractères", () => {
  expect(typeof nom).toBe("string");
});
