const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../01-variables/exercice_3/main.js");

test("Exercice 3 : la constante 'VILLE' a la valeur 'Kinshasa'", () => {
  const content = fs.readFileSync(filePath, "utf-8");
  const hasKinshasaValue = /\bconst\s+VILLE\s*=\s*["']Kinshasa["']/.test(
    content
  );
  expect(hasKinshasaValue).toBe(true);
});
