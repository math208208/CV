
function onLoad() {
    console.log('Processus de chargement du document terminé…');
    const titleDoc = document.title;
    navMenu(titleDoc);

    $(".imgMenu").on("click",function(){
        if ($(".navDiva").hasClass("menu-ouvert")) {
            $(".navDiva").removeClass("menu-ouvert");
        } else {
            $(".navDiva").addClass("menu-ouvert");
        }
    })

    $("section").on("click",function(){
        if ($(".navDiva").hasClass("menu-ouvert")) {
            $(".navDiva").removeClass("menu-ouvert");
        } 
    })

}


function navMenu(titreDoc) {
    switch (titreDoc) {
        case "Competences":
            competences();
            break;
        case "Accueil":
            accueil();
            break;
        case "Expériences":
            experiences();
            break;
        case "Contact":
            contact();
            break;
        default:
            break;
    }
}



function competences() {
    $("#navCompetences").css("text-decoration", "underline");
    $("#navAccueil").css("text-decoration", "none");

    //afficherCompetences();
    afficherCompetencesJQuery();

    gsap.to(".outilImage", {
        duration: 1,
        ease: "power2.out",
        rotation: 360,
        yoyo: true,
        scrollTrigger: {
            trigger: ".css-sectionComp2",
            toggleActions: "play pause reverse pause",
            start: "center center"
        }
    });



}





function accueil() {
    $("#navAccueil").css("text-decoration", "underline");

    //rotation photo moi
    gsap.set("#imgmoi", { x: -75 });
    gsap.to("#imgmoi", {
        rotation: 360,
        duration: 1,
        x: 0
    })
    //rotation info moi
    gsap.set(".divInfo", { x: 75 });
    gsap.to(".divInfo", {
        rotation: 360,
        x: 0,
        duration: 1,
    });

    //descend jusqua a propos
    const $bunttonApropos = $("#aBoutton");

    $bunttonApropos.on("click", function () {

        gsap.to(window, {
            duration: 1,
            scrollTo: "#a-propos"


        });
    });

    // ecarte puis remet imgparcours
    gsap.set(".imgParcours", { y: 600 });
    gsap.to(".imgParcours", {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#a-propos",
            toggleActions: "play pause none none",
            start: "top bottom",

        }
    });


    //ecarte puis remet a propos blabla
    gsap.set("#a-propos-div", { y: 400 });
    gsap.to("#a-propos-div", {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#a-propos",
            toggleActions: "play none none none",
            start: "top bottom",

        }
    });

    //ecarte puis remet a loisirs blabla
    gsap.set(".divLoisirs", { y: 100 });
    gsap.to(".divLoisirs", {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".css-sectionIndex3",
            toggleActions: "play none none none",
            start: "top bottom",

        }
    });

    //pouvoir bouger img loisirs
    Draggable.create(".imgLoisirs", {
        type: "x",
        bounds: ".css-sectionIndex3"
    });

    //ecarte puis place img loisirs
    gsap.set(".imgLoisirs:nth-child(1)", { x: -50 });
    gsap.set(".imgLoisirs:nth-child(2)", { x: -450 });
    gsap.set(".imgLoisirs:nth-child(3)", { x: -650 });
    gsap.to(".imgLoisirs", {
        x: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".css-sectionIndex3",
            toggleActions: "play none none none",
            start: "top bottom",

        }
    });

    //opacité section 1 
    gsap.to(".css-sectionIndex1", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#a-propos",
            toggleActions: "play none reverse none",
            start: "top center",
            end: "+=0px"
        }
    });

}




function experiences() {
    $("#navExperiences").css("text-decoration", "underline");
    $("#navAccueil").css("text-decoration", "none");
}

function contact() {
    $("#navContact").css("text-decoration", "underline");
    $("#navAccueil").css("text-decoration", "none");
}








function afficherCompetencesJQuery() {
    const $langages = $(".langage");

    $langages.each(function (index) {
        setTimeout(() => {
            const $nomLangage = $(this).find(".nomLangage");
            const $progressBar = $(this).find(".progressBar");  //$(this) element courant 
            const $pourcentageElem = $(this).find(".pourcentage");

            $nomLangage.css("visibility", "visible");
            $progressBar.css("visibility", "visible");
            $pourcentageElem.css("visibility", "visible");

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

            gsap.set($(this), { opacity: 0 });

            gsap.to($(this), {
                opacity: 1,
                duration: 1,
            });

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








window.onload = onLoad;
