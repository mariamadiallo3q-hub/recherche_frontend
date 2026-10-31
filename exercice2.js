const etudiant = {
    prenom : "Fatou",
    nom : "Diop",
    filiere : "Genie Logiciel",
    niveau : "Licence 2"
};
const notes = [13, 10, 17, 14]
// Question 1
const {nom, prenom, filiere} = etudiant;
console.log(nom);
console.log(prenom);
console.log(filiere);
// Question 2
const {niveau : classe} = etudiant;
console.log(classe);
// Question 3
const [premier, deuxieme, , dernier] = notes;
console.log(premier);
console.log(deuxieme);
console.log(dernier);
// Question 4
const [note1, , note3] = notes;
console.log(note1);
console.log(note3);
// Question 5
const {email = "Non renseigne"} = etudiant;
console.log(email);
// Question 6
console.log(`Je mappelle ${prenom} ${nom} , Je suis en ${filiere} classe de ${classe}`);
