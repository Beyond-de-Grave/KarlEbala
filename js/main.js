//
var spinningFilmSound = new Audio("/content/projector-on.mp3");

var clickSoundOne = new Audio("/content/click-sound-1.mp3");
var clickSoundTwo = new Audio("/content/click-sound-2.mp3");
var clickSoundThree = new Audio("/content/click-sound-3.mp3");

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
  var menuBar = document.getElementById("menu-bar");
  var menuNavigation = document.getElementById("menu-navigation");
  // var menuNavigationImg = document.querySelector(".main-city__navigation-img");

  menuNavigation.classList.add("animate__animated");

  menuBar.classList.toggle("menu-bar--on");
  menuBar.classList.toggle("menu-bar--off");
  // toggle ( String [, Boolean])
  // Если класс у элемента отсутствует - добавляет,
  //  иначе - убирает. Когда вторым параметром передано false
  //  - удаляет указанный класс, а если true - добавляет.
  if (menuBar.classList.contains("menu-bar--on")) {
    // menuNavigation.style.display = "";
    menuNavigation.hidden = false;
    // animate__backInRight animate__bounceInRight
    // menuNavigation.classList.add('animate__slideInLeft');
    // menuNavigation.classList.remove('animate__slideOutLeft');
    menuNavigation.classList.add("animate__slideInRight");
    menuNavigation.classList.remove("animate__slideOutRight");
    menuBarSound.play();
    menuNavigation.style.setProperty("width", "100%");

    // menuNavigationImg.style.setProperty('--blend-mode', 'multiply');
  } else if (menuBar.classList.contains("menu-bar--off")) {
    // menuNavigation.style.display = "none";
    // menuNavigation.classList.add('animate__slideOutLeft');
    // menuNavigation.classList.remove('animate__slideInLeft');
    menuNavigation.classList.add("animate__slideOutRight");
    menuNavigation.classList.remove("animate__slideInRight");
    menuBarSound.play();
    menuNavigation.style.setProperty("width", "130%");
    // menuNavigationImg.style.setProperty('--blend-mode', 'multiply');
  }

  menuNavigation.addEventListener("animationend", () => {
    if (menuBar.classList.contains("menu-bar--on")) {
      menuNavigation.hidden = false;
      menuNavigation.style.setProperty("width", "100%");
      // window.location.reload();
    } else if (menuBar.classList.contains("menu-bar--off")) {
      menuNavigation.hidden = true;
      menuNavigation.style.setProperty("width", "100%");
    }
  });
}

// Play Audio on button click
// https://html5css.ru/jsref/dom_obj_audio.php

var audioClicked = false;
var audio = new Audio("content/background.mp3");

function changeSoundImage() {
  audioClicked = !audioClicked;
  document.getElementById("sound-button").classList.toggle("sound-button--on");
  document.getElementById("sound-button").classList.toggle("sound-button--off");
  if (
    document
      .getElementById("sound-button")
      .classList.contains("sound-button--on")
  ) {
    document.getElementById("sound-img").src = "img/soundon.png";
    audio.volume = 0.4;
    audio.loop = 1;
    audio.play();
    // audio.addEventListener("canplaythrough", event => {
    //     audio.play();
    // });
  } else if (
    document
      .getElementById("sound-button")
      .classList.contains("sound-button--off")
  ) {
    document.getElementById("sound-img").src = "img/soundoff.png";
    audio.pause();
    // audio.addEventListener("canplaythrough", event => {
    //     audio.pause();
    // });
  }
}

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
  const topVariation = 0.3 * window.innerHeight;
  return (
    bounding.top <= topVariation &&
    bounding.top >= -topVariation &&
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

function findSection(numberOfSections) {
  for (let i = 1; i <= numberOfSections; i++) {
    var approveCurrentSection = document.querySelector(".\\3" + i);
    if (isInViewport(approveCurrentSection) == true) {
      return i;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  //   L A N G U A G E
  var translated = false;
  window.selectedLanguage = "ru";
  // var selectedLanguage = "eng";
  $("#ru-lang-button").click(function (event) {
    event.preventDefault();
    translated = false;
    clickSoundThree.play();
    window.selectedLanguage = "ru";
    translatePage(translated);
  });
  $("#eng-lang-button").click(function (event) {
    event.preventDefault();
    translated = true;
    clickSoundThree.play();
    window.selectedLanguage = "eng";
    translatePage(translated);
  });
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
    }
  });
});

function translatePage(translated) {
  if (!translated) {
    document.getElementById("content-1").textContent = "Наследие Карла Буллы";
    document.getElementById("content-2").textContent = "Главная";
    document.getElementById("content-3").textContent = "Карл Булла";
    document.getElementById("content-4").textContent = "Галерея";
    document.getElementById("content-5").textContent = "Путешествие в прошлое";
    document.getElementById("content-6").textContent = "Искусство фотографии";
    document.getElementById("content-7").textContent = "Виртуальная экскурсия";
    document.getElementById("content-8").textContent = "Фонд Карла Буллы";
    document.getElementById("modal-info").style.backgroundImage =
      "url('img/tip-info.png')";
    document.getElementById("modal-start").style.backgroundImage =
      "url('img/tip-start.png')";

    document.getElementById("button-1").src = "img/karl-bulla-title.png";
    document.getElementById("button-2").src = "img/gallery-title.png";
    document.getElementById("button-3").src = "img/time-travel-title.png";
    document.getElementById("button-4").src = "img/museum-title.png";
    document.getElementById("button-5").src = "img/photo-art-title.png";
    document.getElementById("button-6").src = "img/fond-title.png";
  } else if (translated) {
    document.getElementById("content-1").textContent = "Legacy of Karl Bulla";
    document.getElementById("content-2").textContent = "Main";
    document.getElementById("content-3").textContent = "Karl Bulla";
    document.getElementById("content-4").textContent = "Gallery";
    document.getElementById("content-5").textContent = "Travel to the past";
    document.getElementById("content-6").textContent = "Photo Art";
    document.getElementById("content-7").textContent = "Virtual tour";
    document.getElementById("content-8").textContent = "Karl Bulla Foundation";
    document.getElementById("modal-info").style.backgroundImage =
      "url('img/tip-info-eng.png')";
    document.getElementById("modal-start").style.backgroundImage =
      "url('img/tip-start-eng.png')";

    document.getElementById("button-1").src = "img/karl-bulla-title-eng.png";
    document.getElementById("button-2").src = "img/gallery-title-eng.png";
    document.getElementById("button-3").src = "img/time-travel-title-eng.png";
    document.getElementById("button-4").src = "img/museum-title-eng.png";
    document.getElementById("button-5").src = "img/photo-art-title-eng.png";
    document.getElementById("button-6").src = "img/fond-title-eng.png";
  }
}

// //   L A N G U A G E
// var translated = false;
// window.selectedLanguage = "ru";
// // var selectedLanguage = "eng";
// document.addEventListener('DOMContentLoaded', function() {
//     $("#lang-button").click(function () {
//         translated = !translated;
//         clickSoundThree.play();
//         if (translated) {
//             window.selectedLanguage = "eng";
//             translatePage(translated);
//             // alert("Page translated!")
//         } else {
//             translatePage(translated);
//             window.selectedLanguage = "ru";
//         };
//     });
// });

// function translatePage(translated){
//     if(!translated){
//         // document.querySelector(".main-city__title-text").textContent = "Галерея";

//         document.getElementById("header-title").textContent = "ФОНД ИСТОРИЧЕСКОЙ ФОТОГРАФИИ ИМЕНИ КАРЛА БУЛЛЫ";

//     }else if(translated){

//         // document.querySelector(".main-city__title-text").textContent = "Gallery";

//         document.getElementById("header-title").textContent = "Karl Bulla Foundation for Historical Photography";

//     };
// };
