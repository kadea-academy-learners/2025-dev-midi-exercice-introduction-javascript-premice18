const { sarah } = require("../../03-operator-1/exercice_9/main.js");

test("Exercice 9h : sarah reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const sarahShare = (totalHeritage * 0.25) / 3;
  expect(sarah).toBe(sarahShare);
});
