const fs = require("fs");
const path = require("path");

test("Exercice 1b : le commentaire dit Hello World", () => {
  const content = fs.readFileSync(
    path.join(__dirname, "../../01-variables/exercice_1/main.js"),
    "utf-8"
  );

  const containsHelloWorld =
    /\/\/\s*Ce programme affiche un message Hello World/.test(content);

  expect(containsHelloWorld).toBe(true);
});
