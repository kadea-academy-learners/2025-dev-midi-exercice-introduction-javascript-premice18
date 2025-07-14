const {
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
} = require("../../03-operator-1/exercice_8/main.js");

test("Exercice 8f : le calcul du total des dépenses est correct", () => {
  expect(totalDepenses).toBeCloseTo(
    loyer + nourriture + transport + autresDepenses
  );
});
