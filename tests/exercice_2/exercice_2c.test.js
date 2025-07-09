const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../01-variables/exercice_2/main.js");

test("Exercice 2 : le nom est affiché avec console.log", () => {
  const content = fs.readFileSync(filePath, "utf-8");
  const logsNom = /console\.log\s*\(\s*nom\s*\)/.test(content);
  expect(logsNom).toBe(true);
});
