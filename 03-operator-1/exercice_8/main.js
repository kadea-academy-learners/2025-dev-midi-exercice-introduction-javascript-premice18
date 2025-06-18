let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
// Ecrivez votre code ici
salaireMensuel = 500;
loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
transport = salaireMensuel * 0.1;
autresDepenses = 50;
autresDepenses += 25;
totalDepenses = loyer + nourriture + transport + autresDepenses;
reste = salaireMensuel - totalDepenses;

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
