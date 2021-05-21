var transitionSound = new Audio("content/transition-1.mp3");
transitionSound.volume = 0.5;

var clickSoundThree = new Audio('content/click-sound-3.mp3');
// Browser BACK button
function goBack() {
    clickSoundThree.play();
    setTimeout(Back, 500);
    // window.history.back();
};

function Back(){
    window.history.back();
};


document.addEventListener('DOMContentLoaded', function() {

    // // backButton
    // const startSection = document.querySelector(".\\31");
    // var upStartButton = document.getElementById("footer-btn-left");
    // upStartButton.addEventListener('click', function(){
    //     startSection.scrollIntoView({block: "start", behavior: "smooth"});
    //     // startSection.scrollIntoView({block: "center", behavior: "smooth"});
    //     transitionSound.play();
    // });
    


    const mainSection = document.getElementById("main");

    // // Sticky header

    // window.addEventListener('scroll', function() {
    //     // Get the header
    //     const header = document.getElementById("main-header");
        
        
    //     scroll = $(window).scrollTop();

    //     const intViewportHeight = window.innerHeight; // 100vh
    //     // alert(intViewportHeight, scroll)
    //     // alert(scroll)
    //     if (scroll >= intViewportHeight && scroll <=  8.2*intViewportHeight) {  
    //         // window.pageYOffset
    //         header.classList.add("sticky");
    //         mainSection.style.paddingTop = "25vh";
    //     }else if (scroll > 8.2*intViewportHeight){
    //         header.style.display = '';
    //         header.classList.remove("sticky");
    //         mainSection.style.paddingTop = "0vh";
    //     } else {
    //         header.classList.remove("sticky");
    //         mainSection.style.paddingTop = "0vh";
    //     };

    // });


    const numberOfSections = 8;
    var checkCurrentSection = 1;
    checkCurrentSection = findSection(numberOfSections);

    //  N E X T  S E C T I O N  A R R O W
    //  https://learn.javascript.ru/keyboard-events
    //  && (event.ctrlKey || event.metaKey)
    document.addEventListener('keydown', function(event) {
        
        if (event.code == 'ArrowDown') {
            event.preventDefault(); // Disable default action
            if (checkCurrentSection < numberOfSections){checkCurrentSection += 1;};
            // Escape UNICODE symbol
            // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
            // var currentSection = document.getElementsById(checkCurrentSection.toString(10));
            var currentSection = document.querySelector(".\\3"+checkCurrentSection.toString(10));
            if (checkCurrentSection == 1 || checkCurrentSection == 7){
                currentSection.scrollIntoView({block: "start", behavior: "smooth"});
            }
            else if (checkCurrentSection == 8) {
                currentSection.scrollIntoView({block: "nearest", behavior: "smooth"});
            }
            else {
                currentSection.scrollIntoView({block: "center", behavior: "smooth"});
            };
            transitionSound.play();
            // window.location.hash = checkCurrentSection.toString(10);
            // alert(window.location.pathname);
        };
    });

    document.addEventListener('keydown', function(event) {
        
        if (event.code == 'ArrowUp') {
            event.preventDefault(); // Disable default action
            if (checkCurrentSection > 1){checkCurrentSection -= 1;};
            // var currentSection = document.getElementById(checkCurrentSection.toString(10));
            var currentSection = document.querySelector(".\\3"+checkCurrentSection.toString(10));
            if (checkCurrentSection == 1 || checkCurrentSection == 7){
                currentSection.scrollIntoView({block: "start", behavior: "smooth"});
            }
            else if (checkCurrentSection == 8) {
                currentSection.scrollIntoView({block: "nearest", behavior: "smooth"});
            }
            else {
                currentSection.scrollIntoView({block: "center", behavior: "smooth"});
            };
            transitionSound.play();
            // window.location.hash = checkCurrentSection.toString(10);
            // alert(window.location.pathname);
        };
    });

});