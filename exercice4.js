// Question 1
function additionner(... nombres) {
    let total = 0;
    for (const n of nombres){
        total += n;
    }
    return total;
}
console.log(additionner(2, 3));          
console.log(additionner(1, 2, 3, 4, 5)); 
// Question 2
const afficherPremierEtAutres = (premier, ...autres) => {
    console.log("premier: ", premier);
    console.log("Autres: ", autres);
}
afficherPremierEtAutres("a", "b", "c", "d", "e");
// Question 3
function creerFiche(nom, filiere, ...competences) {
    return {nom, filiere, competences}
}
console.log(creerFiche("Awa", "IAGE", "JavaScript", "SQL"));
// Question 4
// Le parametre rest doit etre placé a la fin de tous les parametres car il ramasse tout ce qui rest e