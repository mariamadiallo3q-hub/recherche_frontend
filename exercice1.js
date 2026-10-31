// Question 1
function calculerMoyenne(note1, note2, note3) {
    return (note1 + note2 + note3) / 3;
}
// Question 2
function estAdmis(moyenne) {
    return moyenne >= 10;
}
// question 3
function calculerPrixTTC(prixHT, tauxTVA = 0.18) {
    return prixHT * (1 + tauxTVA);
}
// question 4
const convertirEnMinutes = (heures) => heures * 60;
// queston 5 : Tests
// test question 1
console.log(calculerMoyenne(14, 10, 11));
console.log(calculerMoyenne(0, 0, 0));
// Test question 2
console.log(estAdmis(10));
console.log(estAdmis(9.99));
// Test question 3
console.log(calculerPrixTTC(100, 0));
console.log(calculerPrixTTC(100));
// Test question 4
console.log(convertirEnMinutes(3));
console.log(convertirEnMinutes(0));