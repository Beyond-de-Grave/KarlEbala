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
  // // backButton
  // const startSection = document.querySelector(".\\31");
  // var upStartButton = document.getElementById("footer-btn-left");
  // upStartButton.addEventListener('click', function(){
  //     startSection.scrollIntoView({block: "start", behavior: "smooth"});
  //     // startSection.scrollIntoView({block: "center", behavior: "smooth"});
  //     transitionSound.play();
  // });

  //   L A N G U A G E

  var translated = false;

  // var selectedLanguage = "ru";
  window.selectedLanguage = "ru";
  // var selectedLanguage = "eng";

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

  var checkCurrentSection = 1;
  //  N E X T  S E C T I O N  A R R O W
  //  https://learn.javascript.ru/keyboard-events
  //  && (event.ctrlKey || event.metaKey)
  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowDown") {
      event.preventDefault(); // Disable default action
      if (checkCurrentSection < 4) {
        checkCurrentSection += 1;
      }
      // Escape UNICODE symbol
      // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
      // var currentSection = document.getElementsById(checkCurrentSection.toString(10));
      var currentSection = document.querySelector(
        ".\\3" + checkCurrentSection.toString(10)
      );
      if (checkCurrentSection == 1 || checkCurrentSection == 2) {
        currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
      }
      // else if (checkCurrentSection == 10) {
      //     currentSection.scrollIntoView({block: "nearest", behavior: "smooth"});
      // }
      else {
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
      }
      // else if (checkCurrentSection == 10) {
      //     currentSection.scrollIntoView({block: "nearest", behavior: "smooth"});
      // }
      else {
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
      "Виртуальная экскурсия";

    // document.getElementById("about-2").textContent =
    //   "В данном разделе содержится информация о биографии, жизни и творчестве Карла Буллы и его сыновей.";
    // // document.getElementById("tip-data").src = "img/tip-content.png";
    // $("img#tip-data").attr("src", "img/tip-content.jpg");
    // document.getElementById("header-image").style.backgroundImage =
    //   "url('img/head.png')";
    // $("img#music-title").attr("src", "img/music-title.png");
    // $("img#button-1").attr("src", "img/button-1.png");
    // $("img#button-2").attr("src", "img/button-1.png");
    // $("img#button-3").attr("src", "img/button-1.png");
    // bookImageArray[0].src = "content/book/1.jpg";
    // bookImageArray[1].src = "content/book/2.jpg";
    // bookImageArray[14].src = "content/book/15.jpg";
    // bookImageArray[15].src = "content/book/16.jpg";
    // bookImageArray[46].src = "content/book/47.jpg";
    // bookImageArray[47].src = "content/book/48.jpg";
    // document.getElementById("frame-video-frame").style.backgroundImage =
    //   "url('img/video-frame.png')";
  } else if (translated) {
    document.getElementById("header-title").textContent = "Virtual tour";
    // document.getElementById("about-2").textContent =
    //   "This section contains information about the biography, life and work of Karl Bulla and his sons.";
    // // document.getElementById("tip-data").src = "img/tip-content-eng.png";
    // $("img#tip-data").attr("src", "img/tip-content-eng.png");
    // document.getElementById("header-image").style.backgroundImage =
    //   "url('img/head-eng.png')";
    // $("img#music-title").attr("src", "img/music-title-eng.png");
    // $("img#button-1").attr("src", "img/button-1-eng.png");
    // $("img#button-2").attr("src", "img/button-1-eng.png");
    // $("img#button-3").attr("src", "img/button-1-eng.png");
    // bookImageArray[0].src = "content/book-eng/1.jpg";
    // bookImageArray[1].src = "content/book-eng/2.jpg";
    // bookImageArray[14].src = "content/book-eng/15.jpg";
    // bookImageArray[15].src = "content/book-eng/16.jpg";
    // bookImageArray[46].src = "content/book-eng/47.jpg";
    // bookImageArray[47].src = "content/book-eng/48.jpg";
    // document.getElementById("frame-video-frame").style.backgroundImage =
    //   "url('img/video-frame-eng.png')";
  }
}
