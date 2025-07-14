const {
  agePere,
  ageOncle,
} = require("../../03-operator-1/exercice_7/main.js");

test("Exercice 7e : la variable ageOncle corresponds à l'age du père plus 10", () => {
  expect(ageOncle).toBe(agePere + 10);
});