var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


// var element = document.getElementById("move-here-1");

// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({ block: "end" });
// element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });


// // Scroll to a certain element
// document.querySelector('.video-intro').scrollIntoView({
//     behavior: 'smooth'
// });

// // Select all links with hashes
// $('a[href*="#"]')
//     // Remove links that don't actually link to anything
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function (event) {
//         // On-page links
//         if (
//             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//             &&
//             location.hostname == this.hostname
//         ) {
//             // Figure out element to scroll to
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             // Does a scroll target exist?
//             if (target.length) {
//                 // Only prevent default if animation is actually gonna happen
//                 event.preventDefault();
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000, function () {
//                     // Callback after animation
//                     // Must change focus!
//                     var $target = $(target);
//                     $target.focus();
//                     if ($target.is(":focus")) { // Checking if the target was focused
//                         return false;
//                     } else {
//                         $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                         $target.focus(); // Set focus again
//                     };
//                 });
//             }
//         }
//     });


//     // jQuery animation
// $('#menu-bar').click(function() {
//     $('#menu-navigation').toggle('slow', function() {
//       // Animation complete.
//     });
//   });


// 

// window.onload = function() {
//     var oFrame = document.getElementById("video-frame");
//     iFrame.contentWindow.document.onclick = function() {
//         // ga('send', 'event', 'link', 'click', 'My Frame Was Clicked');
//         audio.pause();
//     };
// };

// function handleFirstPlay(event) {
//     let vid = event.target;
//     vid.onplay = null;
//     // Start whatever you need to do after playback has started
//     audio.pause();
// }


// // Scrolling
// var step = 25;
// var scrolling = false;

// // Wire up events for the 'scrollUp' link:
// $("#").bind("click", function(event) {
//     event.preventDefault();
//     // Animates the scrollTop property by the specified
//     // step.
//     $("#move-here-1").animate({
//         scrollTop: "-=" + step + "px"
//     });
// }).bind("mouseover", function(event) {
//     scrolling = true;
//     scrollContent("up");
// }).bind("mouseout", function(event) {
//     // Cancel scrolling continuously:
//     scrolling = false;
// });


// $("#scroll-button").bind("click", function(event) {
//     event.preventDefault();
//     $("#move-here-1").animate({
//         scrollTop: "+=" + step + "px"
//     });
// }).bind("mouseover", function(event) {
//     scrolling = true;
//     scrollContent("down");
// }).bind("mouseout", function(event) {
//     scrolling = false;
// });

// function scrollContent(direction) {
//     var amount = (direction === "up" ? "-=1px" : "+=1px");
//     $("#move-here-1").animate({
//         scrollTop: amount
//     }, 1, function() {
//         if (scrolling) {
//             // If we want to keep scrolling, call the scrollContent function again:
//             scrollContent(direction);
//         }
//     });
// }