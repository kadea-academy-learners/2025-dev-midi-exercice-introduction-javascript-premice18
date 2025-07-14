const fs = require("fs");
const path = require("path");

test("Exercice 1c : le commentaire est sur la première ligne", () => {
  const content = fs.readFileSync(
    path.join(__dirname, "../../01-variables/exercice_1/main.js"),
    "utf-8"
  );

  const firstLine = content.split("\n")[0];

  const containsComment = /\/\/.+|\/\*[\s\S]*?\*\//.test(firstLine);

  expect(containsComment).toBe(true);
});
