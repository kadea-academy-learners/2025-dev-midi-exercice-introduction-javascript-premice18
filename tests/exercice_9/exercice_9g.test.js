const { joseph } = require("../../03-operator-1/exercice_9/main.js");

test("Exercice 9g : joseph reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const josephShare = (totalHeritage * 0.25) / 3;
  expect(joseph).toBe(josephShare);
});
