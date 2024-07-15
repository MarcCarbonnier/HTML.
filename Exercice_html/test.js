/* exercice 1
var nom;
nom = prompt("Saisissez votre nom"); // Demande le nom de l'utilisateur//
alert(nom);//affihe les informations//


var prenom;
prenom = prompt("Saisissez votre prénom");// Demande le prénom de l'utilisateur//
alert(prenom);//affiche son prénom//

var i= prompt("saisir premier nombre");
var j=prompt("saisir deuxieme nombre");
alert(i*j);

var C=prompt("Saisir une température"); //affiche la température celcius en farenheit//
console.log(F = (C*9/5) + 32);

let a=100;
let b=100;
b--;
let c=1.00;
let d=b+c;
alert("Ceci est une chaine de caractère : " + a + " ou " + b);




//La console calcule si le resultat est pair ou impair
var nombre = prompt("Saisir un nombre");
if (nombre%2==0)
{
    console.log("Nombre pair");
} 
else
{
 console.log("Nombre impair");
}




//La console demande la date de naisance et calcule l'age de l'utilisateur
var age=prompt("Saisir votre année de naissance"); 
var x=2024 ;
alert(x-age);
if (x-age>=18)
{
alert("Vous êtes majeur");
} 
else
{
 alert("Vous êtes mineur");
}



//Faire une calculatrice
var n1 = prompt("Entrer un nombre");
var operateurs = prompt("Entrez un opérateurs +,-,*,/");
var n2 = prompt("Entrez un nombre");
var result = n1, operateurs, n2
switch (operateurs) {
    case "+":
        alert(parseInt(n1) + parseInt(n2));
        break;
    case "-":
        alert(n1 - n2);
        break;
    case ("*"):
        alert(n1 * n2);
        break;
    case ("/"):
        alert(n1 / n2);
        if (n2==0)
        alert("Impossible d'effectuer cette action")
        break;
    default:
        alert("mauvais opérateur");
}


//Exemple Boucle for
console.log("Table de multiication par 5")
console.log("===================")
for (i = 0; i <= 10; i++) {
    resultat = 5 * i;

    console.log("5 * " + i + "=" + resultat);
}
console.log("fin de boucle");


//Exemple boucle while
var i = 0
console.log("Table de multiplication par 5");
console.log("===========================");
while (i <= 10) {
    resultat = 5 * i;
    console.log(" le resultat de 5x"+ i + " est: " + resultat)
    i++
}
console.log("Fin de la boucle")


//Exemple for...in
var tableau = ["Paul", "Pierre", "Anne", "Sophie"];

for (var i in tableau) 
{
    console.log(tableau[i]);
}

*/

/*var i=0

console.log("Table de multiplication par 5");
console.log("=============================");

do 
{   
    resultat = 5 * i;

    console.log("5 * "+i+" = "+resultat);

    i++;
} while (i <= 10) ;*/
