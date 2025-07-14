const fs = require("fs");
const path = require("path");
const vm = require("vm");

const filePath = path.join(__dirname, "../../01-variables/exercice_4/main.js");

test("Exercice 4 : la somme de a et b est affichée avec console.log", () => {
  const content = fs.readFileSync(filePath, "utf-8");

  let output = "";
  const sandbox = {
    console: {
      log: (msg) => {
        output += msg;
      },
    },
  };

  vm.createContext(sandbox);
  vm.runInContext(content, sandbox);

  expect(Number(output)).toBe(13);
});
