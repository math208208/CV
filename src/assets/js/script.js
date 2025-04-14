import $ from 'jquery';
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import moi from "../images/moi.jpg";
import menu from "../images/menu.png";
import iut from "../images/iut.png";
import lycee from "../images/lycee.jpeg";
import ter from "../images/47ter.jpg";
import gym from "../images/gym.jpg";
import minecraft from "../images/minecraft.jpeg"
import android from "../images/android.png";
import eclipse from "../images/eclipse.jpg";
import git from "../images/git.png";
import intelliJ from "../images/intelliJ.jpg";
import phpmyadmin from "../images/phpmyadmin.png";
import vscode from "../images/vscode.png";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);



window.MyApp = {
    navMenu,
    competences,
    accueil,
    experiences,
    contact,
    afficherCompetencesJQuery
};


window.addEventListener('load', () => {
    console.log('Processus de chargement du document terminé…');
    const titleDoc = document.title;
    navMenu(titleDoc);

    $(".imgMenu").on("click", function () {
        if ($(".navDiva").hasClass("menu-ouvert")) {
            $(".navDiva").removeClass("menu-ouvert");
        } else {
            $(".navDiva").addClass("menu-ouvert");
        }
    })

    $("section").on("click", function () {
        if ($(".navDiva").hasClass("menu-ouvert")) {
            $(".navDiva").removeClass("menu-ouvert");
        }
    })
});


function navMenu(titreDoc) {
    switch (titreDoc) {
        case "Competences":
            chargerImgCompetences();
            competences();
            break;
        case "Accueil":
            chargerImgAccueil();
            accueil();
            break;
        case "Expériences":
            chargerImgExperiences();
            experiences();
            break;
        case "Contact":
            chargerImgContact();
            contact();
            break;
        default:
            break;
    }
}

function chargerImgAccueil() {
    document.getElementById("idmenu").src = menu;
    document.getElementById("imgmoi").src = moi;
    document.getElementById("idiut").src = iut;
    document.getElementById("idlycee").src = lycee;
    document.getElementById("idter").src = ter;
    document.getElementById("idgym").src = gym;
    document.getElementById("idminecraft").src = minecraft;
}

function chargerImgCompetences() {
    document.getElementById("idmenu").src = menu;
    document.getElementById("idandroid").src = android;
    document.getElementById("ideclipse").src = eclipse;
    document.getElementById("idgit").src = git;
    document.getElementById("idintelliJ").src = intelliJ;
    document.getElementById("idphpmyadmin").src = phpmyadmin;
    document.getElementById("idvscode").src = vscode;
}

function chargerImgExperiences() {
    document.getElementById("idmenu").src = menu;
}

function chargerImgContact() {
    document.getElementById("idmenu").src = menu;
}





function competences() {
    $("#navCompetences").css("text-decoration", "underline");
    $("#navAccueil").css("text-decoration", "none");

    afficherCompetencesJQuery();

    var widthIcon = $(".outilImage").width();
    gsap.set($(".outilImage"), { width: 0, opacity: 0 });

    gsap.to(".outilImage", {
        duration: 1,
        ease: "power2.out",
        rotation: 360,
        width: widthIcon,
        opacity: 1,
        scrollTrigger: {
            trigger: ".css-sectionComp2",
            toggleActions: "play none none none",
            start: "top center"
        }
    });


    gsap.set($(".css-sectionComp2"), { opacity: 0, height: 0 });
    gsap.to(".css-sectionComp2", {
        duration: 1,
        ease: "power2.out",
        opacity: 1,
        height: "100%",
        scrollTrigger: {
            trigger: ".css-sectionComp2",
            toggleActions: "play none none none",
            start: "top center",

        }
    });


    gsap.set($(".anglais"), { x: -200 });
    gsap.set($(".espagnol"), { x: 200 });

    gsap.to(".anglais,.espagnol", {
        duration: 1,
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: ".css-sectionComp3",
            toggleActions: "play none none none",
            start: "top center"
        }
    });


    gsap.set($(".css-sectionComp3"), { opacity: 0 });
    gsap.to(".css-sectionComp3", {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: ".css-sectionComp3",
            toggleActions: "play none none none",
            start: "top center"
        }
    });

}





function accueil() {
    $("#navAccueil").css("text-decoration", "underline");

    //rotation photo moi
    gsap.set("#imgmoi", { x: -200 });
    gsap.to("#imgmoi", {
        duration: 1,
        x: 0
    })
    //rotation info moi
    gsap.set(".divInfo", { x: 200 });
    gsap.to(".divInfo", {
        x: 0,
        duration: 1,
    });

    //descend jusqua a propos
    const $bunttonApropos = $("#aBoutton");

    $bunttonApropos.on("click", function () {

        gsap.to(window, {
            duration: 1,
            scrollTo: { y: "#a-propos", offsetY: 100 }, //va a a-propos avec un decallage de 100 en Y


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
            start: "top center",

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
            start: "top center",

        }
    });

    //ecarte puis remet a loisirs blabla
    gsap.set(".divLoisirs", { y: 100 });
    gsap.to(".divLoisirs", {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".sectionIndex3",
            toggleActions: "play none none none",
            start: "top center",

        }
    });

    //pouvoir bouger img loisirs
    Draggable.create(".imgLoisirs", {
        type: "x",
        bounds: ".sectionIndex3"
    });

    //ecarte puis place img loisirs
    gsap.set(".imgLoisirs:nth-child(1)", { x: -50 });
    gsap.set(".imgLoisirs:nth-child(2)", { x: -450 });
    gsap.set(".imgLoisirs:nth-child(3)", { x: -650 });
    gsap.to(".imgLoisirs", {
        x: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".sectionIndex3",
            toggleActions: "play none none none",
            start: "top center",

        }
    });

    //opacité section 1 
    gsap.set($(".sectionIndex1"), { opacity: 0 });

    gsap.to(".sectionIndex1", {
        opacity: 1,
        duration: 1,

    });

    gsap.set($(".sectionIndex2"), { opacity: 0 });

    gsap.to(".sectionIndex2", {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "#a-propos",
            toggleActions: "play pause none none",
            start: "top center",

        }

    });

}




function experiences() {
    $("#navExperiences").css("text-decoration", "underline");
    $("#navAccueil").css("text-decoration", "none");



    gsap.to(".divExp", {
        scrollTrigger: {
            scrub: true,
            trigger: ".sectionExperience",
            pin: true,
            start: "top top",
        },
        ease: "none"
    });

}

function contact() {
    $("#navContact").css("text-decoration", "underline");
    $("#navAccueil").css("text-decoration", "none");
}








function afficherCompetencesJQuery() {
    const $langages = $(".js-langage");

    $langages.each(function (index) {
        setTimeout(() => {
            const $nomLangage = $(this).find(".js-nomLangage");
            const $progressBar = $(this).find(".js-progressBar");  //$(this) element courant 
            const $pourcentageElem = $(this).find(".js-pourcentage");

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