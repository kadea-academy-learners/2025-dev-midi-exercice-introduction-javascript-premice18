const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../01-variables/exercice_5/main.js");

test("Exercice 5 : le résultat est affiché avec console.log", () => {
  const content = fs.readFileSync(filePath, "utf-8");
  const logsSomething = /console\.log\s*\(/.test(content);
  expect(logsSomething).toBe(true);
});
