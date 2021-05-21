

// Need to be run when the whole document is parsed
// https://stackoverflow.com/questions/50198707/typeerror-button-is-null-but-working-fine-in-console
// Or script defer - Отложить
// https://learn.javascript.ru/script-async-defer
// Or to the end of html file
//  Scroll #1

document.addEventListener('DOMContentLoaded', function() {
    
    //

    var tipSound = new Audio("content/tip.mp3");
    tipSound.volume = 0.3;
    $(".start-info-link").click(function () {
        tipSound.play();
    });
    $(".main-city__menu-info-link").click(function () {
        tipSound.play();
    });

    const numberOfSections = 7;
    var checkCurrentSection = 1;
    checkCurrentSection = findSection(numberOfSections);
    
    // for (let i = 1; i <= numberOfSections; i++){
    //     var approveCurrentSection = document.querySelector(".\\3"+i);
    //     if (isInViewport(approveCurrentSection) == true){
    //         checkCurrentSection = i;
    //         break
    //     };
    // };

    // isInViewport(document.querySelector(".\\3"+i.toString(10)));

    // do {
    //     checkCurrentSection += 1;
    //     approveCurrentSection = document.querySelector(".\\3"+checkCurrentSection.toString(10));
    //  } while (!isInViewport(approveCurrentSection));
    // alert(checkCurrentSection)


    
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
            if (checkCurrentSection == 2){
                currentSection.scrollIntoView({block: "center", behavior: "smooth"});
            }
            else if (checkCurrentSection == 3){

                document.getElementById("video-item").scrollIntoView({block: "center", behavior: "smooth"});
                // Start background Filming sound
                spinningFilmSound.volume = 0.15;
                spinningFilmSound.loop = 1;
                spinningFilmSound.play();
                document.getElementById("video-item").style.setProperty('--animate-duration', '10s');
                animateCSS('#video-item', 'fadeIn');

            }
            else if (checkCurrentSection == 4){

                player.pauseVideo();
                spinningFilmSound.pause();

                if (audioclicked) {
                    audio.play();
                }

                // Slow Fade
                document.getElementById("video-item").style.setProperty('--animate-duration', '4s');
                animateCSS('#video-item', 'fadeOut').then((message) => {

                document.getElementById("video-frame").style.setProperty("transition", "opacity 2s");
                setTimeout(function () {
                    document.getElementById("video-frame").style.opacity = 0;
                }, 0);
                // Do something after the animation
                // Smooooooth & slow scroll into view
                $(document).ready(function(){
                    $('html, body').animate({
                      scrollTop: $("#main-city__title").offset().top
                    }, 10000);
                });
                // document.getElementById("main-city__title").scrollIntoView({block: "center", behavior: "smooth"});
                });
            }
            else {
                spinningFilmSound.pause();
                document.getElementById("video-frame").style.opacity = 1;
                currentSection.scrollIntoView({block: "start", behavior: "smooth"});
            };

            if (checkCurrentSection != 4){
                transitionSound.play();
            };
            
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
            if (checkCurrentSection == 2){
                spinningFilmSound.pause();
                currentSection.scrollIntoView({block: "center", behavior: "smooth"});
            }
            else if (checkCurrentSection == 3){

                document.getElementById("video-item").scrollIntoView({block: "center", behavior: "smooth"});
                // Start background Filming sound
                spinningFilmSound.volume = 0.15;
                spinningFilmSound.loop = 1;
                spinningFilmSound.play();
                document.getElementById("video-item").style.setProperty('--animate-duration', '10s');
                animateCSS('#video-item', 'fadeIn');

            }
            // else if (checkCurrentSection == 4){

            //     spinningFilmSound.pause();
            //     // Slow Fade
            //     document.getElementById("video-item").style.setProperty('--animate-duration', '4s');
            //     animateCSS('#video-item', 'fadeOut').then((message) => {

            //     document.getElementById("video-frame").style.setProperty("transition", "opacity 2s");
            //     setTimeout(function () {
            //         document.getElementById("video-frame").style.opacity = 0;
            //     }, 0);
            //     // Do something after the animation
            //     // Smooooooth & slow scroll into view
            //     $(document).ready(function(){
            //         $('html, body').animate({
            //           scrollTop: $("#main-city__title").offset().top
            //         }, 10000);
            //     });
            //     // document.getElementById("main-city__title").scrollIntoView({block: "center", behavior: "smooth"});
            //     });
            // }
            else {
                spinningFilmSound.pause();
                document.getElementById("video-frame").style.opacity = 1;
                currentSection.scrollIntoView({block: "start", behavior: "smooth"});
            };

            if (checkCurrentSection != 4){
                transitionSound.play();
            };
            // window.location.hash = checkCurrentSection.toString(10);
            // alert(window.location.pathname);
        };
    });

    //   S O U N D   O N    M E N U   H O V E R

    // Solution to multiple sounds
    // https://css-tricks.com/examples/SoundOnHover/
    $(".main-city__navigation-item").mouseenter(function() {
        clickSoundThree.play();
    });

    $(".main-content-img").mouseenter(function() {
        menuContentItemSound.play();
    });

    //     F U L L S C R E E N  

    // var f11Btn = document.getElementById('fullscreen-button');
    
    // f11Btn.addEventListener('click', function (event) {

	// // Ignore clicks that weren't on the toggle button
	//     if (!event.target.hasAttribute('start__item-fullscreen')) return;

	// // If there's an element in fullscreen, exit
	// // Otherwise, enter it
	//     if (document.fullscreenElement) {
	// 	    document.exitFullscreen();
	//     } else {
	// 	    document.documentElement.requestFullscreen();
	//     }

    // }, false);

    //  S T A R T   S C R O L L 
    // 
    var langBox = document.getElementById("lang-list");
    var btn1_0 = document.getElementById('scroll-button');

    function handleScrollButtonClick_0() {
        checkCurrentSection += 1;
        langBox.scrollIntoView({block: "center", behavior: "smooth"});
        transitionSound.play();
    }

    btn1_0.addEventListener('click', handleScrollButtonClick_0);
    btn1_0.addEventListener('dblclick', function (e) {
        checkCurrentSection = 4;
        document.querySelector('#main-city__title').scrollIntoView({block: "start", behavior: "smooth"});
        transitionSound.play();
    });
    // // 
    // // var videoFrameBox = document.getElementById("video-item");
    // var btn1_1 = document.getElementById('scroll-button-2');

    // function handleScrollButtonClick_1() {
    //     // document.getElementById("video-item").scrollIntoView({block: "center", behavior: "smooth"})
    //     document.getElementById("video-item").scrollIntoView({block: "center", behavior: "smooth"});
    //     // videoFrameBox.scrollIntoView({block: "center", behavior: "smooth"});
    //     transitionSound.play();
    //     // Start background Filming sound
    //     spinningFilmSound.volume = 0.15;
    //     spinningFilmSound.loop = 1;
    //     spinningFilmSound.play();
    //     document.getElementById("video-item").style.setProperty('--animate-duration', '10s');
    //     animateCSS('#video-item', 'fadeIn');
    // }

    // btn1_1.addEventListener('click', handleScrollButtonClick_1);

    // // 
    // var startBox = document.getElementById("start-box");
    // var btn1_2 = document.getElementById('scroll-button-3');

    // function handleScrollButtonClick_2() {
    //     startBox.scrollIntoView({block: "start", behavior: "smooth"});
    //     transitionSound.play();
    // }

    // btn1_2.addEventListener('click', handleScrollButtonClick_2);

    // M A I N    M E N U 

    var contentMain = document.getElementById("content-karl-bulla");
    var btn0 = document.getElementById('content-karl-bulla-btn');

    function handleMainButtonClick() {
        contentMain.scrollIntoView({block: "center", behavior: "smooth"});
        AOS.refresh();
        // AOS.refreshHard();
    }

    btn0.addEventListener('click', handleMainButtonClick);

    var contentKB = document.getElementById("content-karl-bulla");
    var btn2 = document.getElementById('content-karl-bulla-btn');

    function handleKBButtonClick() {
        contentKB.scrollIntoView({block: "center", behavior: "smooth"});
        transitionLightSound.play();
    }

    btn2.addEventListener('click', handleKBButtonClick);
    

    var contentGallery = document.getElementById("content-gallery");
    var btn3 = document.getElementById('content-gallery-btn');

    function handleGalleryButtonClick() {
        contentGallery.scrollIntoView({block: "center", behavior: "smooth"});
        transitionLightSound.play();
    }

    btn3.addEventListener('click', handleGalleryButtonClick);
    

    var contentTT = document.getElementById("content-time-travel");
    var btn4 = document.getElementById('content-time-travel-btn');

    function handleTTButtonClick() {
        contentTT.scrollIntoView({block: "center", behavior: "smooth"});
        transitionLightSound.play();
    }

    btn4.addEventListener('click', handleTTButtonClick);
    

    var contentMuseum = document.getElementById("content-museum");
    var btn5 = document.getElementById('content-museum-btn');

    function handleMuseumButtonClick() {
        contentMuseum.scrollIntoView({block: "center", behavior: "smooth"});
        transitionLightSound.play();
    }

    btn5.addEventListener('click', handleMuseumButtonClick);
    

    var contentPhotoArt = document.getElementById("content-photo-art");
    var btn6 = document.getElementById('content-photo-art-btn');

    function handlePhotoArtButtonClick() {
        contentPhotoArt.scrollIntoView({block: "center", behavior: "smooth"});
        transitionLightSound.play();
    }

    btn6.addEventListener('click', handlePhotoArtButtonClick);


    var contentFond = document.getElementById("content-fond");
    var btn7 = document.getElementById('content-fond-btn');

    function handleFondButtonClick() {
        contentFond.scrollIntoView({block: "center", behavior: "smooth"});
        transitionLightSound.play();
    }

    btn7.addEventListener('click', handleFondButtonClick);

});

