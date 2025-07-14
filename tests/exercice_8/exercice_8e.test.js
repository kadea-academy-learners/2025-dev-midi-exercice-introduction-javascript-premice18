const { autresDepenses } = require("../../03-operator-1/exercice_8/main.js");

test("Exercice 8e : le calcul des autres dépenses est correct", () => {
  expect(autresDepenses).toBe(50 + 25);
});
