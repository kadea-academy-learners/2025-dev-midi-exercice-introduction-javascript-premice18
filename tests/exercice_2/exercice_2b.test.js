const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../01-variables/exercice_2/main.js");

test("Exercice 2 : la variable 'nom' a la valeur 'Kadea'", () => {
  const content = fs.readFileSync(filePath, "utf-8");
  const hasKadeaValue = /\bnom\s*=\s*["']Kadea["']/.test(content);
  expect(hasKadeaValue).toBe(true);
});
