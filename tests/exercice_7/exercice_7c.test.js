const {
  agePere,
  ageMere,
} = require("../../03-operator-1/exercice_7/main.js");

test("Exercice 7c : la variable ageMere corresponds à l'age du père moins 5", () => {
  expect(ageMere).toBe(agePere - 5);
});
