document.addEventListener('DOMContentLoaded', function () {
    const formulaire = document.getElementById("formulaire");

    formulaire.addEventListener('submit', function (e) {
        e.preventDefault();

        let verif = true;
        verif += validechamp(/^[a-zA-Z-]+$/, document.getElementById("nom"), "Veuillez saisir un caractère valide");
        verif += validechamp(/^[a-aA-Z-]+$/, document.getElementById("prenom"), 'Veuillez saisir un caractere valide');
        verif += validechamp(/.*/, document.getElementById("sexe"), "");
        verif += validechamp(/^[a-zA-Z-0-9-]+$/, document.getElementById("poste"), 'Saisir une adresse postale valide');
        verif += validechamp(/^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/, document.getElementById("Email"), 'Saisir une adresse mail valide');
    });
});
function validechamp(regex, champ, messageErreur) {
    if (!regex.test(champ.value)) {
        alert(messageErreur);
        champ.focus();
        return false;
    }
    return true;
}
