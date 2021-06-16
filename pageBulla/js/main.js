var transitionSound = new Audio("content/transition-1.mp3");
transitionSound.volume = 0.5;
var pageFlipSound = new Audio("content/page-flip-3.mp3");
pageFlipSound.volume = 0.5;
var backgroundSound = new Audio("content/background.mp3");
backgroundSound.volume = 0.5;

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

  // Hover

  $(".bulla-button-panel__item").mouseenter(function () {
    clickSoundThree.play();
  });

  $(".bulla-button-panel__item").click(function () {
    pageFlipSound.play();
  });

  $(".bulla-content__music-btn").click(function () {
    // $(".bulla-content__music-btn").
    $(".bulla-content__music-btn").toggleClass("--sound-on");
    if ($(".bulla-content__music-btn").hasClass("--sound-on")) {
      backgroundSound.play();
    } else {
      backgroundSound.pause();
    }
  });

  // Sticky header

  window.addEventListener("scroll", function () {
    // Get the header
    var header = document.getElementById("main-header");

    scroll = $(window).scrollTop();
    const intViewportHeight = 1.45 * window.innerHeight; // 100vh
    // alert(intViewportHeight, scroll)
    // alert(scroll)
    if (scroll >= intViewportHeight) {
      // window.pageYOffset
      header.classList.add("sticky");
      // mainWrapper.setAttribute("margin-top","35vh"); // fuck up bro - pos abs
    } else {
      header.classList.remove("sticky");
      // mainWrapper.setAttribute("margin-top","15vh");
    }
  });

  const numberOfSections = 3;
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
      var currentSection = document.querySelector(
        ".\\3" + checkCurrentSection.toString(10)
      );
      if (checkCurrentSection == 1) {
        currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
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
      if (checkCurrentSection == 1) {
        currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
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
    document.getElementById("about-1").textContent = "О разделе:";
    document.getElementById("about-2").textContent =
      "В данном разделе содержится информация о биографии, жизни и творчестве Карла Буллы и его сыновей.";
    // document.getElementById("tip-data").src = "img/tip-content.png";
    $("img#tip-data").attr("src", "img/tip-content.jpg");
    document.getElementById("header-image").style.backgroundImage =
      "url('img/head.png')";
    $("img#music-title").attr("src", "img/music-title.png");
    $("img#button-1").attr("src", "img/button-1.png");
    $("img#button-2").attr("src", "img/button-2.png");
    $("img#button-3").attr("src", "img/button-3.png");

    // Translate a book
    for (let i = 0; i < bookImageArray.length; i++) {
      bookImageArray[i].src = `content/book/${i + 1}.jpg`;
    }
    document.getElementById("frame-video-frame").style.backgroundImage =
      "url('img/video-frame.png')";
  } else if (translated) {
    document.getElementById("about-1").textContent = "About:";
    document.getElementById("about-2").textContent =
      "This section contains information about the biography, life and work of Karl Bulla and his sons.";
    // document.getElementById("tip-data").src = "img/tip-content-eng.png";
    $("img#tip-data").attr("src", "img/tip-content-eng.png");
    document.getElementById("header-image").style.backgroundImage =
      "url('img/head-eng.png')";
    $("img#music-title").attr("src", "img/music-title-eng.png");
    $("img#button-1").attr("src", "img/button-1-eng.png");
    $("img#button-2").attr("src", "img/button-2-eng.png");
    $("img#button-3").attr("src", "img/button-3-eng.png");

    // Translate a book
    for (let i = 0; i < bookImageArray.length; i++) {
      bookImageArray[i].src = `content/book-eng/${i + 1}.jpg`;
      // alert(`content/book-eng/${i + 1}.jpg`);
    }

    document.getElementById("frame-video-frame").style.backgroundImage =
      "url('img/video-frame-eng.png')";
  }
}
