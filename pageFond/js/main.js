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
      if (checkCurrentSection == 1 || checkCurrentSection == 7) {
        currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
      } else if (checkCurrentSection == 8) {
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
      if (checkCurrentSection == 1 || checkCurrentSection == 7) {
        currentSection.scrollIntoView({ block: "start", behavior: "smooth" });
      } else if (checkCurrentSection == 8) {
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
    // document.querySelector(".main-city__title-text").textContent = "Галерея";

    document.getElementById("header-title").textContent =
      "ФОНД ИСТОРИЧЕСКОЙ ФОТОГРАФИИ ИМЕНИ КАРЛА БУЛЛЫ";
    document.getElementById("about-1").textContent = "О разделе";
    document.getElementById("about-2").textContent =
      "В данном разделе содержится информация о Фонде Исторической Фотографии имени Карла Буллы, а также о его создателях.";

    document.getElementById("content-1").textContent =
      "К концу 1990-х годов помещения, где располагалась «Фотография № 1», стали приходить в упадок, перекрытия здания находились в аварийном состоянии и нуждались в срочном ремонте. По инициативе и на средства генерального директора ЗАО «Невский, 54» Валентина Евгеньевича Эльбека была проведена капитальная реконструкция, позволившая сохранить для потомков мемориальное пространство фотоателье К. К. Буллы.";
    document.getElementById("content-1-title").textContent =
      "Музей-фотосалон имени Карла Буллы";

    document.getElementById("content-2").textContent =
      "До середины ХХ века дом 54 по Невскому проспекту имел и второй адрес: дом 3 по Малой Садовой улице. Возле этого входа в дом в 2001 году при активном участии В. Е. Эльбека установлена скульптура «Фотограф» (скульптор Б. А. Петров, архитекторы О. А. Харченко и Л. В. Канунникова). Сейчас она входит в десятку самых популярных петербургских памятников.";
    document.getElementById("content-2-title").textContent =
      "Памятник фотографу.";

    document.getElementById("content-3").textContent =
      "В 2005 году в Санкт-Петербурге создан Фонд исторической фотографии имени Карла Буллы для изучения, сохранения и популяризации отечественной фотографии. Учредитель и президент Валентин Евгеньевич Эльбек с 1991 года формирует частную коллекцию снимков российских и зарубежных фотографов. Открытие воссозданного фотосалона имени Карла Буллы состоялось в мае 2003 года, во время празднования 300-летия Санкт-Петербурга.";
    document.getElementById("content-3-title").textContent =
      "Валентин Евгеньевич Эльбек";

    document.getElementById("map-text").textContent =
      "Санкт-Петербург, Невский проспект 54.";
    document.getElementById("add-1").textContent = "Музеи Фонда";
    $("img#button-1").attr("src", "img/button-one.jpg");
    $("img#button-2").attr("src", "img/button-two.jpg");
    $("img#button-3").attr("src", "img/button-three.jpg");
  } else if (translated) {
    // document.querySelector(".main-city__title-text").textContent = "Gallery";

    document.getElementById("header-title").textContent =
      "Karl Bulla Foundation for Historical Photography";
    document.getElementById("about-1").textContent = "About";
    document.getElementById("about-2").textContent =
      "This section contains information about the Karl Bulla Foundation for Historical Photography, as well as the information about it's founders.";

    document.getElementById("content-1").textContent =
      "By the end of the 1990s, the premises where 'Photography No. 1' was located began to decline, the floors of the building were in disrepair and needed urgent repairs. At the initiative and at the expense of Valentin Evgenievich Elbek, General Director of ZAO 'Nevsky 54', a major reconstruction was carried out, which made it possible to preserve the memorial space of KK Bulla's photo studio for posterity.";
    document.getElementById("content-1-title").textContent =
      "Karl Bulla Museum-Photo Salon";

    document.getElementById("content-2").textContent =
      "Until the middle of the twentieth century, house 54 on Nevsky Prospekt had a second address: house 3 on Malaya Sadovaya Street. In the yearly 2001 near the entrance to this building, with the active participation of V. E. Elbek, a sculpture 'Photographer' was installed (sculptor B. A. Petrov, architects O. Kharchenko and L. V. Kanunnikova). Now it is one of the ten most popular St. Petersburg monuments.";
    document.getElementById("content-2-title").textContent =
      "Monument to the photographer.";

    document.getElementById("content-3").textContent =
      "In 2005, the Karl Bulla Foundation for Historical Photography was established in St. Petersburg in order to study, preserve and popularize Russian photography. The founder and the president of the foundation Valentin Evgenievich Elbek had been forming a private collection of photographs by Russian and foreign photographers since 1991. The opening of the recreated Karl Bulla photo studio took place in May 2003, during the celebration of the 300th anniversary of St. Petersburg.";
    document.getElementById("content-3-title").textContent =
      "Valentin Evgenievich Elbek";

    document.getElementById("map-text").textContent =
      "Saint-Petersburg, Nevsky prospect 54.";
    document.getElementById("add-1").textContent = "Foundation Museums";
    $("img#button-1").attr("src", "img/button-one-eng.jpg");
    $("img#button-2").attr("src", "img/button-two-eng.jpg");
    $("img#button-3").attr("src", "img/button-three-eng.jpg");
  }
}
