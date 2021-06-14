var transitionSound = new Audio("content/transition-1.mp3");
transitionSound.volume = 0.5;

var clickSoundThree = new Audio("content/click-sound-3.mp3");
// Browser BACK button
function goBack() {
  clickSoundThree.play();
  setTimeout(Back, 500);
  // window.history.back();
}

function Back() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
  //   L A N G U A G E

  var translated = false;

  // var selectedLanguage = "ru";
  window.selectedLanguage = "ru";
  // var selectedLanguage = "eng";

  $("#lang-button").click(function () {
    // if (translated === undefined) {
    //   translated = false;
    // }
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

  // backButton
  const startSection = document.querySelector(".\\32");
  var upStartButton = document.getElementById("footer-btn-left");
  upStartButton.addEventListener("click", function () {
    startSection.scrollIntoView({ block: "start", behavior: "smooth" });
    // startSection.scrollIntoView({block: "center", behavior: "smooth"});
    transitionSound.play();
  });

  const mainSection = document.getElementById("main");

  // Sticky header

  window.addEventListener("scroll", function () {
    // Get the header
    const header = document.getElementById("main-header");
    header.classList.add("animate__animated");
    header.classList.add("animate__backInDown");

    scroll = $(window).scrollTop();

    const intViewportHeight = window.innerHeight; // 100vh
    // alert(intViewportHeight, scroll)
    // alert(scroll)
    if (scroll >= intViewportHeight && scroll <= 8.2 * intViewportHeight) {
      // window.pageYOffset
      header.classList.add("sticky");
      mainSection.style.paddingTop = "27.5vh";

      header.classList.remove("animate__backOutUp");
      header.classList.add("animate__backInDown");
    } else if (scroll > 8.2 * intViewportHeight) {
      // header.style.display = '';

      header.classList.remove("animate__backInDown");
      header.classList.add("animate__backOutUp");

      // header.classList.remove("sticky");
      // mainSection.style.paddingTop = "0vh";
    } else {
      header.classList.remove("sticky");
      mainSection.style.paddingTop = "0vh";
    }
  });

  const numberOfSections = 10;
  var checkCurrentSection = 1;
  checkCurrentSection = findSection(numberOfSections);

  //  N E X T  S E C T I O N  A R R O W
  //  https://learn.javascript.ru/keyboard-events
  //  && (event.ctrlKey || event.metaKey)
  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowDown") {
      event.preventDefault(); // Disable default action
      if (checkCurrentSection < numberOfSections) {
        checkCurrentSection += 1;
      }
      // Escape UNICODE symbol
      // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
      // var currentSection = document.getElementsById(checkCurrentSection.toString(10));

      // var currentSectionUNICODE = '';
      // for (let j = 0; j <= checkCurrentSection.length; j++){
      //     var temp = "".fromCharCode(checkCurrentSection[j]);
      //     currentSectionUNICODE.append(temp);
      // };

      var currentSection = document.querySelector(
        ".\\3" + checkCurrentSection.toString(10)
      );

      if (checkCurrentSection == 1 || checkCurrentSection == 2) {
        currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
      } else if (checkCurrentSection == 10) {
        currentSection = document.querySelector(".\\31\\30");
        currentSection.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } else {
        currentSection.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      transitionSound.play();
      // window.location.hash = checkCurrentSection.toString(10);
      // alert(window.location.pathname);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowUp") {
      event.preventDefault(); // Disable default action
      if (checkCurrentSection > 1) {
        checkCurrentSection -= 1;
      }
      // var currentSection = document.getElementById(checkCurrentSection.toString(10));
      var currentSection = document.querySelector(
        ".\\3" + checkCurrentSection.toString(10)
      );
      if (checkCurrentSection == 1 || checkCurrentSection == 2) {
        currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
      } else if (checkCurrentSection == 10) {
        currentSection = document.querySelector(".\\31\\30");
        currentSection.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } else {
        currentSection.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      transitionSound.play();
      // window.location.hash = checkCurrentSection.toString(10);
      // alert(window.location.pathname);
    }
  });
});

function translatePage(translated) {
  if (!translated) {
    document.getElementById("header-title").textContent =
      "Путешествие в прошлое";
    document.getElementById("about-1").textContent = "О разделе";
    document.getElementById("about-2").textContent =
      "В данном разделе пользователь может отправиться в путешествие по следам Великого фотографа.";

    document.getElementById("content-1").textContent =
      "Невский проспект возле Большого Гостиного двора";
    document.getElementById("content-2").textContent =
      "Собор Воскресения Христова (Спас на Крови)";
    document.getElementById("content-3").textContent =
      "Петропавловская крепость";
    document.getElementById("content-4").textContent = "Медный всадник";
    document.getElementById("content-5").textContent = "Внутренний вид Пассажа";
    document.getElementById("content-6").textContent =
      "Невский проспект возле Большого Гостиного двора";

    // document.getElementById("modal-info").style.backgroundImage =
    //   "url('img/tip-info.png')";
    // document.getElementById("modal-start").style.backgroundImage =
    //   "url('img/tip-start.png')";

    // document.getElementById("button-1").src = "img/karl-bulla-title.png";
    // document.getElementById("button-2").src = "img/gallery-title.png";
    // document.getElementById("button-3").src = "img/time-travel-title.png";
    // document.getElementById("button-4").src = "img/museum-title.png";
    // document.getElementById("button-5").src = "img/photo-art-title.png";
    // document.getElementById("button-6").src = "img/fond-title.png";
  } else if (translated) {
    document.getElementById("header-title").textContent = "Travel to the Past";
    document.getElementById("about-1").textContent = "About";
    document.getElementById("about-2").textContent =
      "In this section, one can go on an inspiring journey in the footsteps of the Great Photographer.";

    document.getElementById("content-1").textContent =
      "Nevsky Prospect near Bolshoy Gostiny Dvor";
    document.getElementById("content-2").textContent =
      "Cathedral of the Resurrection of Christ (Savior on Blood)";
    document.getElementById("content-3").textContent = "Peter-Pavel's Fortress";
    document.getElementById("content-4").textContent = "Bronze Horseman";
    document.getElementById("content-5").textContent =
      "Interior view of the Passage";
    document.getElementById("content-6").textContent =
      "Nevsky Prospect near Bolshoy Gostiny Dvor";

    // document.getElementById("modal-info").style.backgroundImage =
    //   "url('img/tip-info-eng.png')";
    // document.getElementById("modal-start").style.backgroundImage =
    //   "url('img/tip-start-eng.png')";

    // document.getElementById("button-1").src = "img/karl-bulla-title-eng.png";
    // document.getElementById("button-2").src = "img/gallery-title-eng.png";
    // document.getElementById("button-3").src = "img/time-travel-title-eng.png";
    // document.getElementById("button-4").src = "img/museum-title-eng.png";
    // document.getElementById("button-5").src = "img/photo-art-title-eng.png";
    // document.getElementById("button-6").src = "img/fond-title-eng.png";
  }
}
