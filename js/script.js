
function onLoad() {
    console.log('Processus de chargement du document terminé…');
    const titleDoc = document.title;
    navMenu(titleDoc);

    if (titleDoc === "Competences") {
        //afficherCompetences();
        afficherCompetencesJQuery();

    }


}


function afficherCompetencesJQuery() {
    const $langages = $(".langage");

    $langages.each(function (index) {
        setTimeout(() => {
            const $nomLangage = $(this).find(".nomLangage");
            const $progressBar = $(this).find(".progressBar");  //$(this) element courant 
            const $pourcentageElem = $(this).find(".pourcentage");

            $nomLangage.css("display", "block");
            $progressBar.css("display", "flex");
            $pourcentageElem.css("display", "block");

            const valeurFinale = parseInt($pourcentageElem.text());
            let valeurActuelle = 0;

            $pourcentageElem.text("0%");

            const interval = setInterval(() => {
                valeurActuelle++;
                $pourcentageElem.text(valeurActuelle + "%");

                if (valeurActuelle >= valeurFinale) {
                    clearInterval(interval);
                }
            }, 20);
        }, 200 * index);
    });


}

function afficherCompetences() {
    const langages = document.getElementsByClassName("langage");

    for (let i = 0; i < langages.length; i++) {
        setTimeout(() => {
            const progressBar = langages[i].getElementsByClassName("progressBar")[0];
            const pourcentageElem = langages[i].getElementsByClassName("pourcentage")[0];

            progressBar.style.display = "flex";
            pourcentageElem.style.display = "block";

            const valeurFinale = parseInt(pourcentageElem.textContent);
            let valeurActuelle = 0;

            pourcentageElem.textContent = "0%";

            const interval = setInterval(() => {
                valeurActuelle++;
                pourcentageElem.textContent = valeurActuelle + "%";

                if (valeurActuelle >= valeurFinale) {
                    clearInterval(interval);
                }
            }, 20);
        }, 200 * i);
    }
}


function goToApropos() {
    //Faire animation defillement jusqua a propos
    //GSAP

}

function navMenu(titreDoc) {
    switch (titreDoc) {
        case "Competences":
            $("#navCompetences").css("text-decoration", "underline");
            $("#navAccueil").css("text-decoration", "none");
            break;
        case "Accueil":
            $("#navAccueil").css("text-decoration", "underline");
            break;
        case "Expériences":
            $("#navExperiences").css("text-decoration", "underline");
            $("#navAccueil").css("text-decoration", "none");
            break;
        case "Contact":
            $("#navContact").css("text-decoration", "underline");
            $("#navAccueil").css("text-decoration", "none");
            break;

        default:
            break;
    }
}





window.onload = onLoad;
