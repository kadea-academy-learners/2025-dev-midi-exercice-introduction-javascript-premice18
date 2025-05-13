const {
  displayDayType,
} = require("../04-condition-if-clause/exercice_12/main");

describe("afficherTypeDeJour", () => {
  test("devrait retourner 'Jour ouvrable' pour les jours de semaine", () => {
    expect(displayDayType("lundi")).toBe("Jour ouvrable");
    expect(displayDayType("mardi")).toBe("Jour ouvrable");
    expect(displayDayType("mercredi")).toBe("Jour ouvrable");
    expect(displayDayType("jeudi")).toBe("Jour ouvrable");
    expect(displayDayType("vendredi")).toBe("Jour ouvrable");
  });

  test("devrait retourner 'Week-end' pour les jours de week-end", () => {
    expect(displayDayType("samedi")).toBe("Week-end");
    expect(displayDayType("dimanche")).toBe("Week-end");
  });

  test("devrait gérer les entrées invalides correctement", () => {
    expect(displayDayType("invalid")).toBeUndefined();
    expect(displayDayType("")).toBeUndefined();
    expect(displayDayType(null)).toBeUndefined();
    expect(displayDayType(undefined)).toBeUndefined();
  });
});
