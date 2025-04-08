
function onLoad() {
    console.log('Processus de chargement du document terminé…');
    const titleDoc = document.title;
    navMenu(titleDoc);
}

function goToApropos() {
    //Faire animation defillement jusqua a propos

}

function navMenu(titreDoc) {
    switch (titreDoc) {
        case "Competences":
            document.getElementById("navCompetences").style.textDecoration = "underline";
            document.getElementById("navAccueil").style.textDecoration = "none";
            break;
        case "Accueil":
            document.getElementById("navAccueil").style.textDecoration = "underline";
            break;
        case "Expériences":
            document.getElementById("navExperiences").style.textDecoration = "underline";
            document.getElementById("navAccueil").style.textDecoration = "none";
            break;
        case "Contact":
            document.getElementById("navContact").style.textDecoration = "underline";
            document.getElementById("navAccueil").style.textDecoration = "none";
            break;

        default:
            break;
    }
}


window.onload = onLoad;
