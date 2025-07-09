const {
  salaireMensuel,
  loyer,
} = require("../../03-operator-1/exercice_8/main.js");

test("Exercice 8b : le calcul du loyer est correct", () => {
  expect(loyer).toBeCloseTo(salaireMensuel * 0.3);
});
