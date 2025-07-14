const {
  ageEnfant,
  agePere,
} = require("../../03-operator-1/exercice_7/main.js");

test("Exercice 7b : la variable agePere est double de l'enfant", () => {
  expect(agePere).toBe(ageEnfant * 2);
});
