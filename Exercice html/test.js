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
Boolean(d);
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
    console.log("Vous êtes majeur");
} 
else
{
 console.log("Vous êtes mineur");
}
*/

//Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.
//Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
//Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.

var n1 = prompt("Entrer un nombre");
var operateurs = prompt("Entrez un opérateurs +,-,*,/");
var n2 = prompt("Entrez un nombre");
var result = n1, operateurs, n2
switch (operateurs) {
    case "+":
        alert(n1 + n2);
        break;
    case "-":
        alert(n1 - n2);
        break;
    case ("*"):
        alert(n1 * n2);
        break;
    case ("/"):
        alert(n1 / n2);
        break;
    default:
        alert("mauvais opérateur");
}