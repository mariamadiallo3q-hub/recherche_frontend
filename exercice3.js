const groupeA = ["Awa", "Moussa", "Fatou"]; 
const groupeB = ["Ibra", "Mariama"]; 
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };
const coordonnees = {ville : "Dakar", telephone : 770984562};
const contact = {telephone : 7735620978, email : "makdhris56@gmail.com"}
// Question 1
const tousLesEtudiants = [... groupeA, ... groupeB];
console.log(tousLesEtudiants);
// Question 2
const copieA = [... groupeA];
copieA.push("Cheick");
console.log(copieA);
console.log(groupeA);
// Question 3
const etudiantComplet = {... etudiantBase, age : 22, ville : "Dakar"}
console.log(etudiantComplet);
// Question 4
const etudiantL3 = {... etudiantBase , niveau : "L3"}
console.log(etudiantL3);
console.log(etudiantBase);
// Question 5
const profil = {... coordonnees, ... contact};
console.log(profil);
