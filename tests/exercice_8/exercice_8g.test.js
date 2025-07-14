const {
  salaireMensuel,
  totalDepenses,
  reste,
} = require("../../03-operator-1/exercice_8/main.js");

test("Exercice 8g : le calcul du reste est correct", () => {
  expect(reste).toBeCloseTo(salaireMensuel - totalDepenses);
});
