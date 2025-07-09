const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../01-variables/exercice_3/main.js");

test("Exercice 3 : la constante 'VILLE' est déclarée avec const", () => {
  const content = fs.readFileSync(filePath, "utf-8");
  const hasConstVille = /\bconst\s+VILLE\s*=/.test(content);
  expect(hasConstVille).toBe(true);
});
