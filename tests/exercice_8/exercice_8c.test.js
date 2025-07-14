const {
  salaireMensuel,
  nourriture
} = require("../../03-operator-1/exercice_8/main.js");

test("Exercice 8c : le calcul de la nourriture est correct", () => {
  expect(nourriture).toBeCloseTo(salaireMensuel * 0.2);
});
