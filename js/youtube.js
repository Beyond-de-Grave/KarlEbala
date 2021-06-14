// var x = document.getElementsByTagName("iframe")[0].contentWindow;
// //x = window.frames[0];

// x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
// // this would turn the 1st iframe in document blue.

// var e = jQuery.Event("keydown");
// // e.which is used to set the keycode
// // e.which = 38; // it is up
// e.which = 40; // it is down
// // $("#video-frame").trigger(e);
// // $(document).trigger(jQuery.Event("keydown"));

// window.parent.document.getElementById("video-frame").click();
// $(window.parent).trigger("click");
// $("#video-frame").trigger("click");
// var e = jQuery.Event("keydown");
// e.which = 40;
// $("#video-frame").trigger(e);

// https://betacode.net/12319/javascript-keyboardevent
// document.dispatchEvent(new KeyboardEvent('keydown',{'code':40}));
// const downArrowEvent = new KeyboardEvent('keydown', {'keyCode':40, 'which':40});
// document.dispatchEvent(downArrowEvent);
// window.parent.document.dispatchEvent(downArrowEvent);

var player,
  playing = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-item", {
    height: "480",
    width: "800",
    videoId: "a6ujrnph2cs",
    playerVars: {
      autoplay: 0, // none, 1 - start after player downloading
      frameborder: 0,
      wmode: "transparent",
      cc_load_policy: 0, // hiden titles
      color: "white", // red \ white
      controls: 1, // 0 - not shown in player , 1-2 same (2 - faster)
      disablekb: 1, // 0\1 control buttons (space=play, -> = 10%, |^ = louder etc )
      enablejsapi: 1, // enable API Javascript
      // end: 10, // Positive int in sec when end video
      fs: 1, // 1 - show fullscreen button
      // hl: ru, // ru\en Interface language of the player
      iv_load_policy: 3, // 1 - show annotation , 3 - hide
      // list: , // search => поисковый запрос,  user_uploads => канал из которого загружаются видео, playlist => list=PLC77007E23FF423C6 e.g. PL + Id of the playlist
      // listType: , //  playlist, search и user_uploads. If use list -- no need for videoId
      loop: 0, // 1 - infinite loop
      modestbranding: 1, // 1 - not show Youtube logo
      // origin: , // Указывать свой домен при использовании iFrame API
      // playlist: , // Разделенные запятой videoId
      // playsinline: , // Непониль ...
      rel: 0, // 1 -Play related video after playback
      showinfo: 0, // show author
      // start: 0, //
    },
    events: {
      onStateChange: onPlayerStateChange,
      // 'onkeydown': youTubeKeyDown    // custom event
    },
  });
}
// video ---> id of div
// https://developers.google.com/youtube/iframe_api_reference
// 5. The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// -1 unstarted
// 0 ended
// 1 playing
// 2 paused
// 3 buffering
// 5 video cued

//   YT.PlayerState.ENDED
//   YT.PlayerState.PLAYING
//   YT.PlayerState.PAUSED
//   YT.PlayerState.BUFFERING
//   YT.PlayerState.CUED

//   var done = false;

function onPlayerStateChange(event) {
  console.log(event);
  if (event.data == YT.PlayerState.PLAYING) {
    if (audioClicked) {
      audio.pause();
    }
    spinningFilmSound.pause();
  }

  if (
    event.data == YT.PlayerState.ENDED ||
    event.data == YT.PlayerState.PAUSED
  ) {
    if (audioClicked) {
      audio.play();
    }

    // const videoFrame = window.parent.document.getElementById("video-frame");
    // videoFrame.focus();
    // videoFrame.click();
    // document.dispatchEvent(downArrowEvent);
    // window.parent.document.dispatchEvent(downArrowEvent);
    // window.parent.document.getElementById('video-frame').click();
    // $("#video-frame").trigger(e);
    // $(document).trigger(e);
    // $('#video-frame').focus();
    // $(document).trigger('click');
    // $('#video-frame').trigger('click');
  }
}

// On blur event ??

// window.addEventListener('blur',function(){
//     // const targetBlock = document.getElementById("video-frame");
//     window.setTimeout(function () {
//     if (document.activeElement instanceof HTMLIFrameElement) {
//         console.log("iframe click");
//         body.focus();
//     }
//     }, 0);
// });

// $(document).ready(function(){
//     $("iframe").load(function(){
//         $(this).contents().on("mousedown, mouseup, click", function(){
//             alert("Click detected inside iframe.");
//             $(this).parent("#video-frame").click();
//         });
//     });
// });

// var iframeMouseOver = false;
// $("#video-item")
//     .off("mouseover.iframe").on("mouseover.iframe", function() {
//         iframeMouseOver = true;
//     })
//     .off("mouseout.iframe").on("mouseout.iframe", function() {
//         iframeMouseOver = false;
//     });

// $(window).off("blur.iframe").on("blur.iframe", function() {
//     if(iframeMouseOver){
//         $j("#video-frame").click();
//     }
// });

// function onPlayerStateChange(event) {
//     if (!playing) {
//         // alert('onPlay is clicked'); //Just to check

//         if (audioClicked) {
//             audio.pause();
//         }
//         spinningFilmSound.pause();
//         // playing = true;
//         setTimeout(() => playing = true, 7000);

//         // $('#video-frame').trigger('click');
//         // $('.video-intro').trigger('click');
//         // $(document).trigger('click');
//         // simulateClick();

//     } else if (playing) {

//         if (audioClicked) {
//             audio.play();
//         }

//         setTimeout(() => playing = false, 5000);
//         // playing = false;

//         $('#video-frame').focus();

//         // $(document).trigger('click');
//         // simulateClick();
//         // Using jQuery: video-intro ?
//         // $('#video-frame').trigger('click');
//         // $('.video-intro').trigger('click');

//         // Using JavaScript:
//         // document.getElementById('video-frame').click();

//         // // Slow Fade
//         // document.getElementById("video-item").style.setProperty('--animate-duration', '4s');
//         // animateCSS('#video-item', 'fadeOut').then((message) => {

//         //         document.getElementById("video-frame").style.setProperty("transition", "opacity 2s");
//         //         setTimeout(function () {
//         //             document.getElementById("video-frame").style.opacity = 0;
//         //         }, 0);
//         //         // Do something after the animation
//         //         // Smooooooth & slow scroll into view
//         //         $(document).ready(function(){
//         //             $('html, body').animate({
//         //               scrollTop: $("#main-city__title").offset().top
//         //             }, 10000);
//         //         });
//         //         // document.getElementById("main-city__title").scrollIntoView({block: "center", behavior: "smooth"});
//         // });

//     };
// };

// https://developers.google.com/youtube/iframe_api_reference?hl=ru

// Parameters:
// https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ru

// function youTubeKeyDown(event) {
//     // if (checkCurrentSection == 4){
//     if (event.code == 'ArrowDown') {
//         event.preventDefault(); // Disable default action
//         player.pauseVideo();
//         spinningFilmSound.pause();
//         // Slow Fade
//         document.getElementById("video-item").style.setProperty('--animate-duration', '4s');
//         animateCSS('#video-item', 'fadeOut').then((message) => {

//             document.getElementById("video-frame").style.setProperty("transition", "opacity 2s");
//             setTimeout(function () {
//                 document.getElementById("video-frame").style.opacity = 0;
//             }, 0);
//             // Do something after the animation
//             // Smooooooth & slow scroll into view
//             $(document).ready(function () {
//                 $('html, body').animate({
//                     scrollTop: $("#main-city__title").offset().top
//                 }, 10000);
//             });
//             // document.getElementById("main-city__title").scrollIntoView({block: "center", behavior: "smooth"});
//         });
//     };
// };

// function YTDownKey(event) {
//     // if (checkCurrentSection == 4){
//     event.preventDefault(); // Disable default action
//     player.pauseVideo();
//     spinningFilmSound.pause();
//     // Slow Fade
//     document.getElementById("video-item").style.setProperty('--animate-duration', '4s');
//     animateCSS('#video-item', 'fadeOut').then((message) => {

//         document.getElementById("video-frame").style.setProperty("transition", "opacity 2s");
//         setTimeout(function () {
//             document.getElementById("video-frame").style.opacity = 0;
//         }, 0);
//         // Do something after the animation
//         // Smooooooth & slow scroll into view
//         $(document).ready(function () {
//             $('html, body').animate({
//                 scrollTop: $("#main-city__title").offset().top
//             }, 10000);
//         });
//         // document.getElementById("main-city__title").scrollIntoView({block: "center", behavior: "smooth"});
//     });
// };

// $(function () {

//     // embed the video
//     onYouTubeIframeAPIReady();

//     // bind events to the arrow keys
//     $(document).keydown(function (e) {
//         switch (e.which) {
//             // case 37: // left (rewind)
//             //     rewind();
//             //     break;
//             // case 38: // Up
//             //     upFunc();
//             //     break;
//             // case 39: // right (fast-forward)
//             //     fastforward();
//             //     break;
//             case 40: // down
//                 YTDownKey();
//                 break;
//             default: return; // exit this handler for other keys
//         }
//         e.preventDefault(); // prevent the default action (scroll / move caret)
//     });
// });

///    !!!!!!!!!!!!!!!!!!!!!!!!!!!!

// <div id="video"></div>

// function embedYouTubeVideo() {
//     player = new YT.Player('video', {
//          videoId: 'M7lc1UVf-VE'
//     });
// }

// function rewind() {
//     var currentTime = player.getCurrentTime();
//     player.seekTo(currentTime - 30, true);
//     player.playVideo();
// }

// function fastforward() {
//     var currentTime = player.getCurrentTime();
//     player.seekTo(currentTime + 30, true);
//     player.playVideo();
// }

// $(function(){

//     // embed the video
//     embedYouTubeVideo();

//     // bind events to the arrow keys
//     $(document).keydown(function(e) {
//         switch(e.which) {
//             case 37: // left (rewind)
//                 rewind();
//             break;
//             case 39: // right (fast-forward)
//                 fastforward();
//             break;
//             default: return; // exit this handler for other keys
//         }
//         e.preventDefault(); // prevent the default action (scroll / move caret)
//     });
// });

////    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var addYoutubeEventListener = (function() {

//     var callbacks = [];
//     var iframeId = 0;

//     return function (iframe, callback) {

//         // init message listener that will receive messages from youtube iframes
//         if(iframeId === 0) {
//             window.addEventListener("message", function (e) {

//                 if(e.origin !== "https://www.youtube.com" || e.data === undefined) return;
//                 try {
//                     var data = JSON.parse(e.data);
//                     if(data.event !== 'onStateChange') return;

//                     var callback = callbacks[data.id];
//                     callback(data);
//                 }
//                 catch(e) {}
//             });
//         }

//         // store callback
//         iframeId++;
//         callbacks[iframeId] = callback;
//         var currentFrameId = iframeId;

//         // sendMessage to frame to start receiving messages
//         iframe.addEventListener("load", function () {
//             var message = JSON.stringify({
//                 event: 'listening',
//                 id: currentFrameId,
//                 channel: 'widget'
//             });
//             iframe.contentWindow.postMessage(message, 'https://www.youtube.com');

//             message = JSON.stringify({
//                 event: "command",
//                 func: "addEventListener",
//                 args: ["onStateChange"],
//                 id: currentFrameId,
//                 channel: "widget"
//             });
//             iframe.contentWindow.postMessage(message, 'https://www.youtube.com');
//         });
//     }
// })();

// addYoutubeEventListener(document.getElementById("player"), function(e) {

//     switch(e.info) {
//         case 1:
//             // playing

//             break;
//         case 0:
//             // ended

//             break;
//     }
// });
