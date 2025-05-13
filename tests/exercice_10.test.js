const {
  isPositiveNumber,
} = require("../04-condition-if-clause/exercice_10/main");

test("devrait retourner true pour les nombres positifs", () => {
  expect(isPositiveNumber(5)).toBe(true);
});

test("devrait retourner false pour zéro", () => {
  expect(isPositiveNumber(0)).toBe(false);
});

test("devrait retourner false pour les nombres négatifs", () => {
  expect(isPositiveNumber(-3)).toBe(false);
});

test("devrait retourner false pour les valeurs non numériques", () => {
  expect(isPositiveNumber("abc")).toBe(false);
  expect(isPositiveNumber(null)).toBe(false);
  expect(isPositiveNumber(undefined)).toBe(false);
  expect(isPositiveNumber([])).toBe(false);
  expect(isPositiveNumber({})).toBe(false);
});
