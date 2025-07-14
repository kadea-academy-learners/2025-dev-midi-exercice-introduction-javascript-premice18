const { paul } = require("../../03-operator-1/exercice_9/main.js");

test("Exercice 9b : paul reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const paulShare = (totalHeritage * 0.75) / 3;
  expect(paul).toBe(paulShare);
});
