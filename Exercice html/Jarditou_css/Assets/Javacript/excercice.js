/*
var n = 1;
var text = "Saisir un prénom N°"
var i = prompt(text + n);
do {
    console.log(i);
    console.log(text + n);
    n++
    prompt(text+n);
    console.log(i);
    console.log(text + n);
} while (i == "d");
*/

let i;
let cont = true;
while (cont == true) {
    i = prompt("Saisir un prénom");
    if (i === "") {
        cont = false;
    }
    else {
        console.log(i);
    }
console.log(cont);

}

/*
var i=
do
{

}while (i=="")*/