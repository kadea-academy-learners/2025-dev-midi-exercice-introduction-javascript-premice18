const {
  salaireMensuel,
  transport
} = require("../../03-operator-1/exercice_8/main.js");

test("Exercice 8d : le calcul du transport est correct", () => {
  expect(transport).toBeCloseTo(salaireMensuel * 0.1);
});
