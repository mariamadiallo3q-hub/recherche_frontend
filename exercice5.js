const etudiantL2 = {  
    id: 104,  
    prenom: "Aminata",  
    nom: "Fall",  
    notes: [13, 16, 12],  
    filiere: "IAGE" 
};
// Question 1
const extraireIdentite = ({prenom, nom, filiere}) => ({prenom, nom, filiere})
console.log(extraireIdentite(etudiantL2));
// Question 2
const calculerMoyenneNotes = (notes) => {
    if (notes.length === 0){
        return 0;
    }
    let somme = 0;
    for (const note in notes){
        somme += note;
    }
    return somme / notes.length;
};
console.log(calculerMoyenneNotes([12, 17, 10]));
console.log(calculerMoyenneNotes([]));
// Question 3
const ajouterNote = (etudiantL2, nouvelleNote) => ({
    ... etudiantL2,
    notes : [... etudiantL2.notes, nouvelleNote]
})
console.log(ajouterNote(etudiantL2));
console.log(ajouterNote(etudiantL2, 18));
// Question 4