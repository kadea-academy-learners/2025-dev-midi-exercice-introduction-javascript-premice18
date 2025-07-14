const { marie } = require("../../03-operator-1/exercice_9/main.js");

test("Exercice 9c : marie reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const marieShare = (totalHeritage * 0.75) / 3;
  expect(marie).toBe(marieShare);
});
