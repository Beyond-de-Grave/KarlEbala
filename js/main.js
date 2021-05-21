// 
var spinningFilmSound = new Audio('/content/projector-on.mp3');

var clickSoundOne = new Audio('/content/click-sound-1.mp3');
var clickSoundTwo = new Audio('/content/click-sound-2.mp3');
var clickSoundThree = new Audio('/content/click-sound-3.mp3');

var menuBarSound = new Audio("/content/menubar-sound.mp3");
menuBarSound.volume = 0.5;

var menuContentItemSound = new Audio("/content/main-content-item.mp3");
menuContentItemSound.volume = 0.5;

var transitionSound = new Audio("/content/transition-1.mp3");
transitionSound.volume = 0.5;
var transitionLightSound = new Audio("/content/transition-2.mp3");
transitionLightSound.volume = 0.5;

// https://developer.mozilla.org/ru/docs/Web/API/Element/classList

// Show Navigation Panel On button Click

function ShowNavigation() {

    var menuBar = document.getElementById('menu-bar');
    var menuNavigation = document.getElementById("menu-navigation");
    // var menuNavigationImg = document.querySelector(".main-city__navigation-img");

    menuNavigation.classList.add('animate__animated');

    menuBar.classList.toggle("menu-bar--on");
    menuBar.classList.toggle("menu-bar--off");
    // toggle ( String [, Boolean])
    // Если класс у элемента отсутствует - добавляет,
    //  иначе - убирает. Когда вторым параметром передано false
    //  - удаляет указанный класс, а если true - добавляет.
    if (menuBar.classList.contains("menu-bar--on")){
        // menuNavigation.style.display = "";
        menuNavigation.hidden = false;
        // animate__backInRight animate__bounceInRight
        // menuNavigation.classList.add('animate__slideInLeft');
        // menuNavigation.classList.remove('animate__slideOutLeft');
        menuNavigation.classList.add('animate__slideInRight');
        menuNavigation.classList.remove('animate__slideOutRight');
        menuBarSound.play();
        menuNavigation.style.setProperty('width', '100%');

        // menuNavigationImg.style.setProperty('--blend-mode', 'multiply');
    } else if (menuBar.classList.contains("menu-bar--off") ){
        // menuNavigation.style.display = "none";
        // menuNavigation.classList.add('animate__slideOutLeft');
        // menuNavigation.classList.remove('animate__slideInLeft');
        menuNavigation.classList.add('animate__slideOutRight');
        menuNavigation.classList.remove('animate__slideInRight');
        menuBarSound.play();
        menuNavigation.style.setProperty('width', '130%');
        // menuNavigationImg.style.setProperty('--blend-mode', 'multiply');
    }

    menuNavigation.addEventListener('animationend', () => {
        if (menuBar.classList.contains("menu-bar--on")){
            menuNavigation.hidden = false;
            menuNavigation.style.setProperty('width', '100%');
            // window.location.reload();
        } else if (menuBar.classList.contains("menu-bar--off") ){
            menuNavigation.hidden = true;
            menuNavigation.style.setProperty('width', '100%');
        }
    });

};

// Play Audio on button click
// https://html5css.ru/jsref/dom_obj_audio.php

var audioclicked = false;
var audio = new Audio('content/background.mp3');

function changeSoundImage() {
    
    audioclicked = !audioclicked;
    document.getElementById('sound-button').classList.toggle("sound-button--on");
    document.getElementById('sound-button').classList.toggle("sound-button--off");
    if (document.getElementById("sound-button").classList.contains("sound-button--on")) 
    {
        document.getElementById("sound-img").src = "img/soundon.png";
        audio.volume = 0.4;
        audio.loop = 1;
        audio.play();
        // audio.addEventListener("canplaythrough", event => {
        //     audio.play();
        // });
    }
    else if (document.getElementById('sound-button').classList.contains("sound-button--off") )
    {
        document.getElementById("sound-img").src = "img/soundoff.png";
        audio.pause();
        // audio.addEventListener("canplaythrough", event => {
        //     audio.pause();
        // });
    };
};

// function simulateClick() {
//     var evt = document.createEvent("MouseEvents");
//     evt.initMouseEvent("click", true, true, window,
//       0, 0, 0, 0, 0, false, false, false, false, 0, null);
//     var a = document.getElementById("video-frame"); 
//     a.dispatchEvent(evt);      
// };

// https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
// var h1 = document.querySelector('h1');
// if (isInViewport(h1)) {
//     // Do something...
// }

//  Watch for 0.5 of the vieport Height
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    // const topVariation = 100;
    // const topVariation = 0.5*window.innerHeight;
    const topVariation = 0.3*window.innerHeight;
    return (
        bounding.top <= topVariation && bounding.top >= -topVariation &&
        bounding.left >= 0 
 
        // bounding.top >= 0 &&
        // bounding.left >= 0 &&
        // bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// i = 4
// isInViewport(document.querySelector(".\\3"+i));
// document.querySelector(".\\3"+i).getBoundingClientRect();

function findSection(numberOfSections){
    for (let i = 1; i <= numberOfSections; i++){
        var approveCurrentSection = document.querySelector(".\\3"+i);
        if (isInViewport(approveCurrentSection) == true){
            return i;
        };
    };
};