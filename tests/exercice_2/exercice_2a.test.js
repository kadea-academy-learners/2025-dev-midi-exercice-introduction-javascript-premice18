const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../01-variables/exercice_2/main.js");

test("Exercice 2 : la variable 'nom' est déclarée avec let", () => {
  const content = fs.readFileSync(filePath, "utf-8");
  const hasLetNom = /\blet\s+nom\s*=/.test(content);
  expect(hasLetNom).toBe(true);
});
