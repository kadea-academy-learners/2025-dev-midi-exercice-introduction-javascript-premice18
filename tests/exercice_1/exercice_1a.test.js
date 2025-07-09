const fs = require("fs");
const path = require("path");

test("Exercice 1a : le fichier doit contenir au moins un commentaire", () => {
  const content = fs.readFileSync(
    path.join(__dirname, "../../01-variables/exercice_1/main.js"),
    "utf-8"
  );

  const containsComment = /\/\/.+|\/\*[\s\S]*?\*\//.test(content);

  expect(containsComment).toBe(true);
});
