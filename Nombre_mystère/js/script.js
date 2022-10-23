document.querySelector(".resultat").classList.add("reponse");
document.querySelector(".resultat").innerText = "Choisissez un nombre.";

const mystere = 68;

function jouer() {

    let nombre = document.querySelector("#nombre").value;

    if ((nombre >= 1) && (nombre < 100)) {

        if ((nombre < mystere)) {
            document.querySelector(".resultat").classList.add("reponse");
            document.querySelector(".resultat").innerText = "Le nombre choisi est trop petit";
            document.querySelector("resultat").classList.remove("erreur");

        }

        else if ((nombre > mystere)) {
            document.querySelector(".resultat").classList.add("reponse");
            document.querySelector(".resultat").innerText = "Le nombre choisi est trop grand";
            document.querySelector("resultat").classList.remove("erreur");

        }

        else {
            document.querySelector(".resultat").classList.add("trouver");
            document.querySelector(".resultat").innerText = "Bravo vous avez trouvé le nombre mystère !";
            document.querySelector(".resultat").classList.remove("erreur");
            new Audio("/music/correct_answer.mp3").play;

        }


    }

    else {
        document.querySelector(".resultat").classList.add("erreur");
        document.querySelector(".resultat").innerText = "Ce nombre n'existe pas, veuillez saisir un nombre ente 1 et 100";
    }
}