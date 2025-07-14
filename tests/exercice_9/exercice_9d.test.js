const { eric } = require("../../03-operator-1/exercice_9/main.js");

test("Exercice 9d : eric reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const ericShare = (totalHeritage * 0.75) / 3 / 2;
  expect(eric).toBe(ericShare);
});
