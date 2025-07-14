const { madameMukuna } = require("../../03-operator-1/exercice_9/main.js");

test("Exercice 9f : madameMukuna reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const madameMukunaShare = (totalHeritage * 0.25) / 3;
  expect(madameMukuna).toBe(madameMukunaShare);
});
