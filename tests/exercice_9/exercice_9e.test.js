const { clair } = require("../../03-operator-1/exercice_9/main.js");

test("Exercice 9e : clair reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const clairShare = (totalHeritage * 0.75) / 3 / 2;
  expect(clair).toBe(clairShare);
});
