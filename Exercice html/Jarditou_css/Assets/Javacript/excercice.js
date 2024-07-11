/*
//Exercice Boucle
let n=0
let i;
let cont = true;
while (cont == true) {
    i = prompt("Saisir un prénom" + n);
    if (i == "") {
        cont = false;
    }
    n++
    console.log(i);
    console.log("Saisir un prénom" + n);
}


//Exerccie 2 Boucle

let i = 100;
do {
    i - 1;
    console.log(i);
    i--;
} while (i >= 0);


//Exercice 4
let n = prompt("Saisir un nombre");
let x = prompt("Saisir un nombre");
do {
    result = n * x;
    console.log(n + "x" + x + "=" + result);
    n++;
} while (n <= 10);

//Exercice 3
let somme=0;
let moyenne=0;
let nbsaisis=0;

let saisie=-1;

while (saisie !=0){
    saisie=parseInt(prompt("saisir un nombre"));

    if (saisie !=0){
        somme += saisie;
        nbsaisis++;
    }

}

//Moyenne
moyenne=somme/nbsaisis;
console.log("Somme: " + somme);
console.log("Nb saisis: " + nbsaisis);
console.log("Moyenne: " + moyenne);



//______________________________________________________________________________________//

//Exercice Tableau
*/
