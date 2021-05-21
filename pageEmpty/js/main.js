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


    // Sticky header

    window.addEventListener('scroll', function() {
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

    var checkCurrentSection = 1;
    //  N E X T  S E C T I O N  A R R O W
    //  https://learn.javascript.ru/keyboard-events
    //  && (event.ctrlKey || event.metaKey)
    document.addEventListener('keydown', function(event) {
        
        if (event.code == 'ArrowDown') {
            event.preventDefault(); // Disable default action
            if (checkCurrentSection < 6){checkCurrentSection += 1;};
            // Escape UNICODE symbol
            // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
            // var currentSection = document.getElementsById(checkCurrentSection.toString(10));
            var currentSection = document.querySelector(".\\3"+checkCurrentSection.toString(10));
            if (checkCurrentSection == 1){
                currentSection.scrollIntoView({block: "start", behavior: "smooth"});
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
            if (checkCurrentSection == 1){
                currentSection.scrollIntoView({block: "start", behavior: "smooth"});
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