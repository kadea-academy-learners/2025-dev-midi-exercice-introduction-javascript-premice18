const {
  ageEnfant,
  agePere,
  ageMere,
  ageGrandPere,
  ageOncle,
} = require("../../03-operator-1/exercice_7/main.js");

test("Exercice 7a : la variable ageEnfant est un nombre", () => {
  expect(typeof ageEnfant).toBe("number");
});
test("Exercice 7a : la variable agePere est un nombre", () => {
  expect(typeof agePere).toBe("number");
});
test("Exercice 7a : la variable ageMere est un nombre", () => {
  expect(typeof ageMere).toBe("number");
});
test("Exercice 7a : la variable ageGrandPere est un nombre", () => {
  expect(typeof ageGrandPere).toBe("number");
});

test("Exercice 7a : la variable ageOncle est un nombre", () => {
  expect(typeof ageOncle).toBe("number");
});