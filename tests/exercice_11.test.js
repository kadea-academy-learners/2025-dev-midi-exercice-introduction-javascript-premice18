const { checkMajority } = require("../04-condition-if-clause/exercice_11/main");
test("devrait retourner 'Majeur' si l'âge est 18 ou plus", () => {
  expect(checkMajority(18).toLowerCase()).toBe("majeur");
  expect(checkMajority(25).toLowerCase()).toBe("majeur");
  expect(checkMajority(100).toLowerCase()).toBe("majeur");
});

test("devrait retourner 'Mineur' si l'âge est inférieur à 18", () => {
  expect(checkMajority(17).toLowerCase()).toBe("mineur");
  expect(checkMajority(10).toLowerCase()).toBe("mineur");
  expect(checkMajority(0).toLowerCase()).toBe("mineur");
});

test("devrait retourner 'non prise en compte' pour un âge négatif", () => {
  expect(checkMajority(-1).toLowerCase()).toBe("non prise en compte");
});

test("devrait retourner 'non prise en compte' pour un âge décimal", () => {
  expect(checkMajority(18.5).toLowerCase()).toBe("non prise en compte");
});

test("devrait retourner 'non prise en compte' pour un âge sous forme de chaîne", () => {
  expect(checkMajority("18").toLowerCase()).toBe("non prise en compte");
});

test("devrait retourner 'non prise en compte' pour une entrée nulle", () => {
  expect(checkMajority(null).toLowerCase()).toBe("non prise en compte");
});

test("devrait retourner 'non prise en compte' pour une entrée indéfinie", () => {
  expect(checkMajority(undefined).toLowerCase()).toBe("non prise en compte");
});
