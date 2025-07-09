const {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
} = require("../../03-operator-1/exercice_8/main.js");

test("Exercice 8a : salaireMensuel est de type number", () => {
  expect(typeof salaireMensuel).toBe("number");
});

test("Exercice 8a : loyer est de type number", () => {
  expect(typeof loyer).toBe("number");
});

test("Exercice 8a : nourriture est de type number", () => {
  expect(typeof nourriture).toBe("number");
});

test("Exercice 8a : transport est de type number", () => {
  expect(typeof transport).toBe("number");
});

test("Exercice 8a : autresDepenses est de type number", () => {
  expect(typeof autresDepenses).toBe("number");
});

test("Exercice 8a : totalDepenses est de type number", () => {
  expect(typeof totalDepenses).toBe("number");
});

test("Exercice 8a : reste est de type number", () => {
  expect(typeof reste).toBe("number");
});
