var transitionSound = new Audio("content/transition-1.mp3");
transitionSound.volume = 0.5;

var clickSoundThree = new Audio('content/click-sound-3.mp3');
// Browser BACK button
function goBack() {
    clickSoundThree.play();
    setTimeout(Back, 500);
    // window.history.back();
};

function Back() {
    window.history.back();
};

//   L A N G U A G E

var translated = false;

// var selectedLanguage = "ru";
window.selectedLanguage = "ru";
// var selectedLanguage = "eng";

document.addEventListener('DOMContentLoaded', function () {

    // // Mouse pointer location
    // $( document ).ready(function(){
    //     $( "#bp_container img" ).mousemove(getMousePosition);
    //     function getMousePosition(event){
    //         let elementVisible = $('#bp_container img');
    //         let imageTop = elementVisible.offset().top;
    //         let imageLeft = elementVisible.offset().left;
    //         let imageBottom = imageTop + elementVisible.height();
    //         let imageRight = imageLeft + elementVisible.width();
    //         alert(imageTop)
    //         var mouseX = event.pageX;
    //         var mouseY = event.pageY;
    //         alert(mouseX)
    //     };
    // });


    
    //   L A N G U A G E

    $("#lang-button").click(function () {
        translated = !translated;
        clickSoundThree.play();
        if (translated) {
            window.selectedLanguage = "eng";
            translatePage(translated);
            // alert("Page translated!")
        } else {
            translatePage(translated);
            window.selectedLanguage = "ru";
        };
    });

    // Sticky header

    window.addEventListener('scroll', function () {
        // Get the header
        var header = document.getElementById("main-header");

        scroll = $(window).scrollTop();
        const intViewportHeight = window.innerHeight; // 100vh
        // alert(intViewportHeight, scroll)
        // alert(scroll)
        if (scroll >= intViewportHeight) {
            // window.pageYOffset
            header.classList.add("sticky");
            // mainWrapper.setAttribute("margin-top","35vh"); // fuck up bro - pos abs
        } else {
            header.classList.remove("sticky");
            // mainWrapper.setAttribute("margin-top","15vh");
        };

    });

    // //  Fullscreen

    // $("").click({

    // });


    const numberOfSections = 7;
    var checkCurrentSection = 1;
    checkCurrentSection = findSection(numberOfSections);

    //  N E X T  S E C T I O N  A R R O W
    //  https://learn.javascript.ru/keyboard-events
    //  && (event.ctrlKey || event.metaKey)
    document.addEventListener('keydown', function (event) {

        if (event.code == 'ArrowDown') {
            event.preventDefault(); // Disable default action
            if (checkCurrentSection < numberOfSections) { checkCurrentSection += 1; };
            // Escape UNICODE symbol
            // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
            // var currentSection = document.getElementsById(checkCurrentSection.toString(10));
            var currentSection = document.querySelector(".\\3" + checkCurrentSection.toString(10));
            if (checkCurrentSection == 1) {
                currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            else {
                currentSection.scrollIntoView({ block: "center", behavior: "smooth" });
            };
            transitionSound.play();
            // window.location.hash = checkCurrentSection.toString(10);
            // alert(window.location.pathname);
        };
    });

    document.addEventListener('keydown', function (event) {

        if (event.code == 'ArrowUp') {
            event.preventDefault(); // Disable default action
            if (checkCurrentSection > 1) { checkCurrentSection -= 1; };
            // var currentSection = document.getElementById(checkCurrentSection.toString(10));
            var currentSection = document.querySelector(".\\3" + checkCurrentSection.toString(10));
            if (checkCurrentSection == 1) {
                currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            else {
                currentSection.scrollIntoView({ block: "center", behavior: "smooth" });
            };
            transitionSound.play();
            // window.location.hash = checkCurrentSection.toString(10);
            // alert(window.location.pathname);
        };
    });

});


function translatePage(translated){
    if(!translated){
        document.querySelector(".main-city__title-text").textContent = "Галерея";
        document.getElementById("classic-text").textContent = "Ожившая классика";
        document.getElementById("spb-text").textContent = "Образ Санкт-Петербурга";
        document.getElementById("revolution-text").textContent = "Революция 1906-1907";
        document.getElementById("culture-text").textContent = "Деятели русской культуры";
        document.getElementById("tzar-text").textContent = "Царская семья";
        document.getElementById("photo-art-text").textContent = "Фоторепортаж";
        document.getElementById("sasha-text").textContent = "Александр Булла";
        document.getElementById("victor-text").textContent = "Виктор Булла";
        document.getElementById("about-1").textContent = "О разделе";
        document.getElementById("about-2").textContent = "Этот раздел содержит все фотографии, представленные на экспозиции в музее.";
        document.getElementById("about-3").textContent = "А также уникальную пост-обработку при помощи нейросетей.";
    }else if(translated){
        document.querySelector(".main-city__title-text").textContent = "Gallery";
        document.getElementById("classic-text").textContent = "Revived classics";
        document.getElementById("spb-text").textContent = "The image of St. Petersburg";
        document.getElementById("revolution-text").textContent = "Revolution 1906-1907";
        document.getElementById("culture-text").textContent = "Figures of Russian culture";
        document.getElementById("tzar-text").textContent = "Tzar family";
        document.getElementById("photo-art-text").textContent = "Photo report";
        document.getElementById("sasha-text").textContent = "Alexander Bulla";
        document.getElementById("victor-text").textContent = "Victor Bulla";
        document.getElementById("about-1").textContent = "About this section";
        document.getElementById("about-2").textContent = "This section contains all the photographs presented at the exhibition in the museum.";
        document.getElementById("about-3").textContent = "As well as unique post-processing using neural networks.";
    };
    
};