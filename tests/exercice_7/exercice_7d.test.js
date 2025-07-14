const {
  ageEnfant,
  ageMere,
  ageGrandPere,
} = require("../../03-operator-1/exercice_7/main.js");

test("Exercice 7d : la variable ageGrandPere est le double de l'âge de la mère plus le moitié de l'age de l'enfant", () => {
  expect(ageGrandPere).toBe(ageMere * 2 + ageEnfant / 2);
});
