var player,
  playing = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-item", {
    height: "480",
    width: "800",
    videoId: "ABO8qyrLA9E",
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
    },
  });
}

function onPlayerStateChange(event) {
  console.log(event);
  if (event.data == YT.PlayerState.PLAYING) {
    if (audioClicked) {
      audio.pause();
    }
  }

  if (
    event.data == YT.PlayerState.ENDED ||
    event.data == YT.PlayerState.PAUSED
  ) {
    if (audioClicked) {
      audio.play();
    }
  }
}

// video ---> id of div
// function onPlayerStateChange(event) {
//     if(!playing){
//         // alert('onPlay is clicked'); //Just to check

//         if(audioClicked){
//             audio.pause();
//         }
//         spinningFilmSound.pause();
//         // playing = true;
//         setTimeout(() => playing = true, 7000);

//     } else if (playing) {

//         if(audioClicked){
//             audio.play();
//         }
//         // Slow Fade
//         document.getElementById("video-item").style.setProperty('--animate-duration', '4s');
//         animateCSS('#video-item', 'fadeOut').then((message) => {

//                 document.getElementById("video-frame").style.setProperty("transition", "opacity 2s");
//                 setTimeout(function () {
//                     document.getElementById("video-frame").style.opacity = 0;
//                 }, 0);
//                 // Do something after the animation
//                 // Smooooooth & slow scroll into view
//                 $(document).ready(function(){
//                     $('html, body').animate({
//                       scrollTop: $("#main-city__title").offset().top
//                     }, 10000);
//                 });
//                 // document.getElementById("main-city__title").scrollIntoView({block: "center", behavior: "smooth"});
//         });

//         setTimeout(() => playing = false, 5000);
//         // playing = false;
//     };
// };

// https://developers.google.com/youtube/iframe_api_reference?hl=ru

// Parameters:
// https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ru
