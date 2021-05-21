var nextSound = new Audio("content/next.mp3");
nextSound.volume = 0.5;
var hoverImgSound = new Audio("content/hoverImg.mp3");
hoverImgSound.volume = 0.5;

var arrow = { left: 37, up: 38, right: 39, down: 40 };

function clickSoundHandler() {
    $(".bp-lr").click(function () {
        // nextSound.pause(); 
        nextSound.play();
    });
};
function arrowSoundHandler() {
    $(".bp-lr").keydown(function (e) { //document
        if (e.which == arrow.left || arrow.right) {
            // nextSound.pause(); 
            nextSound.play();
            return false;
        }
    });
};



// https://api.jquery.com/siblings/
// Works like shit
// function hoverSoundHandler(){
//     $("#bp_container img").hover(function() {
//         // nextSound.pause(); 
//         // ":not(button)"   #bp_container~img .siblings()
//         hoverImgSound.play();
//     });
// };


//   S O U N D   O N    M E N U   H O V E R
var hoverSound = new Audio("content/hover.mp3");
hoverSound.volume = 0.3;
// Solution to multiple sounds
// https://css-tricks.com/examples/SoundOnHover/
$(".gallery-item").mouseenter(function () {
    hoverSound.play();
});

//     W R A P   C A P T I O N S   W I T H   H 3

$(".caption h3").each(function () {
    var tempHTML = "<h3>" + $(this).html() + "</h3>";
    $(this).html(tempHTML);
});

// ! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     G A L L E R Y    I T S E L F
//   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !

//   Classic-color

const classicCount = 26;
const classicId = 'classic';
createGallery(classicCount, classicId);



// Saint-Petersburg

const spbCount = 26;
const spbId = 'spb';
createGallery(spbCount, spbId);




//   Revolution

const revolutionCount = 14;
const revolutionId = 'revolution';
createGallery(revolutionCount, revolutionId);



//   Culture

const cultureCount = 29;
const cultureId = 'culture';
createGallery(cultureCount, cultureId);





//   Tzar

const tzarCount = 16;
const tzarId = 'tzar';
createGallery(tzarCount, tzarId);



//   Photoreport

const reportCount = 58;
const reportId = 'photo-art';
createGallery(reportCount, reportId);



//   SASHA BULLA

const sashaCount = 12;
const sashaId = 'sasha';
createGallery(sashaCount, sashaId);



//   VICTOR BULLA

const victorCount = 25;
const victorId = 'victor';
createGallery(victorCount, victorId);





// lightGallery(document.getElementById('lightgallery'), {
//     thumbnail:true,
//     animateThumb: false,
//     showThumbByDefault: false
// }); 


function createGallery(count, Id) {
    // const classicCount = 26;
    // const classicId = 'classic';

    document.getElementById(Id + '-button').onclick = function () {

        // Make counting Array
        var countArray = [];
        for (var i = 1; i <= count; i++) {
            countArray.push(i);
        };
        // Remap array to PATH array
        var imageArray = countArray.map(function (user) {

            var selectedLanguage = window.selectedLanguage;
            var selector = ".caption-" + Id + "-" + user;

            // var captionHTML = $(selector).find('h3.' + selectedLanguage).html();
            // var captionHTML = document.querySelectorAll(selector + " h3." + selectedLanguage).innerHTML;
            // Get all h3 from wrapped tag lang=x
            var captionHTML ="";
            var divs = document.querySelectorAll(selector + " h3." + selectedLanguage), i;
            for (i = 0; i < divs.length; ++i) {
                captionHTML = captionHTML + divs[i].innerHTML;
            };

            return {
                src: 'content/' + Id + '/' + user + '-min.jpg',
                // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
                // caption: document.querySelector(".caption-classic-"+user).innerHTML
                // caption: "<h3>" + captionHTML + "</h3>"
                caption: captionHTML
            };
        });
        // alert(window.selectedLanguage)
        BigPicture({
            el: this,
            gallery: imageArray,
            loop: true,
        });
        clickSoundHandler();
        arrowSoundHandler();
        // hoverSoundHandler();
    };
};




// document.getElementById('classic-button').onclick = function () {
//     var numberOfPicturesClassic = [];

//     for (var i = 1; i <= classicCount; i++) {
//         numberOfPicturesClassic.push(i);
//     };
//     // alert(numberOfPictures)
//     // ['1', '2', '3']
//     var classicImages = numberOfPicturesClassic.map(function (user) {

//         var selectedLanguage = window.selectedLanguage;
//         var selector = ".caption-classic-" + user;
//         var captionHTML = $(selector).find('h3.' + selectedLanguage).html();

//         return {
//             src: 'content/classic/' + user + '-min.jpg',
//             // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
//             // caption: document.querySelector(".caption-classic-"+user).innerHTML
//             // caption: "<h3>" + captionHTML + "</h3>"
//             caption: captionHTML
//         };
//     });
//     // alert(window.selectedLanguage)
//     BigPicture({
//         el: this,
//         gallery: classicImages,
//         loop: true,
//     });
//     arrowSoundHandler();
//     // hoverSoundHandler();
// };





// var numberOfPicturesSpb = [];

// for (var i = 1; i <= spbCount; i++) {
//     numberOfPicturesSpb.push(i);
// };
// // alert(numberOfPictures)
// // ['1', '2', '3']
// var spbImages = numberOfPicturesSpb.map(function (user) {

//     var selector = ".caption-spb-" + user;
//     var captionHTML = $(selector).find('h3.' + selectedLanguage).html();

//     return {
//         src: 'content/spb/' + user + '-min.jpg',
//         // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
//         // caption: document.querySelector(".caption-spb-"+user).innerHTML 
//         caption: captionHTML
//     };
// });
// document.getElementById('spb-button').onclick = function () {
//     BigPicture({
//         el: this,
//         gallery: spbImages,
//         loop: true,
//     });
//     arrowSoundHandler();
// };



// var numberOfPicturesRevolution = [];

// for (var i = 1; i <= revolutionCount; i++) {
//     numberOfPicturesRevolution.push(i);
// };
// // alert(numberOfPictures)
// // ['1', '2', '3']
// var revolutionImages = numberOfPicturesRevolution.map(function (user) {

//     var selector = ".caption-revolution-" + user;
//     var captionHTML = $(selector).find('h3.' + selectedLanguage).html();

//     return {
//         src: 'content/revolution/' + user + '-min.jpg',
//         // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
//         // caption: document.querySelector(".caption-revolution-"+user).innerHTML
//         caption: captionHTML
//     };
// });
// document.getElementById('revolution-button').onclick = function () {
//     BigPicture({
//         el: this,
//         gallery: revolutionImages,
//         loop: true,
//     });
//     arrowSoundHandler();
// };




// var numberOfPicturesCulture = [];

// for (var i = 1; i <= cultureCount; i++) {
//     numberOfPicturesCulture.push(i);
// };
// // alert(numberOfPictures)
// // ['1', '2', '3']
// var cultureImages = numberOfPicturesCulture.map(function (user) {

//     var selector = ".caption-culture-" + user;
//     var captionHTML = $(selector).find('h3.' + selectedLanguage).html();

//     return {
//         src: 'content/culture/' + user + '-min.jpg',
//         // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
//         // caption: document.querySelector(".caption-culture-"+user).innerHTML
//         caption: captionHTML
//     };
// });
// document.getElementById('culture-button').onclick = function () {
//     BigPicture({
//         el: this,
//         gallery: cultureImages,
//         loop: true,
//     });
//     arrowSoundHandler();
// };




// var numberOfPicturesTzar = [];

// for (var i = 1; i <= tzarCount; i++) {
//     numberOfPicturesTzar.push(i);
// };
// // alert(numberOfPictures)
// // ['1', '2', '3']
// var tzarImages = numberOfPicturesTzar.map(function (user) {

//     var selector = ".caption-tzar-" + user;
//     var captionHTML = $(selector).find('h3.' + selectedLanguage).html();

//     return {
//         src: 'content/tzar/' + user + '-min.jpg',
//         // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
//         // caption: document.querySelector(".caption-tzar-"+user).innerHTML
//         caption: captionHTML
//     };
// });
// document.getElementById('tzar-button').onclick = function () {
//     BigPicture({
//         el: this,
//         gallery: tzarImages,
//         loop: true,
//     });
//     arrowSoundHandler();
// };




// var numberOfPicturesReport = [];

// for (var i = 1; i <= reportCount; i++) {
//     numberOfPicturesReport.push(i);
// };
// // alert(numberOfPictures)
// // ['1', '2', '3']
// var reportImages = numberOfPicturesReport.map(function (user) {

//     var selector = ".caption-photo-art-" + user;
//     var captionHTML = $(selector).find('h3.' + selectedLanguage).html();

//     return {
//         src: 'content/photo-art/' + user + '-min.jpg',
//         // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
//         // caption: document.querySelector(".caption-photo-art-"+user).innerHTML
//         caption: captionHTML
//     };
// });
// document.getElementById('photo-art-button').onclick = function () {
//     BigPicture({
//         el: this,
//         gallery: reportImages,
//         loop: true,
//     });
//     arrowSoundHandler();
// };




// var numberOfPicturesSasha = [];

// for (var i = 1; i <= sashaCount; i++) {
//     numberOfPicturesSasha.push(i);
// };
// // alert(numberOfPictures)
// // ['1', '2', '3']
// var sashaImages = numberOfPicturesSasha.map(function (user) {

//     var selector = ".caption-sasha-" + user;
//     var captionHTML = $(selector).find('h3.' + selectedLanguage).html();

//     return {
//         src: 'content/sasha/' + user + '-min.jpg',
//         // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
//         // caption: document.querySelector(".caption-sasha-"+user).innerHTML
//         caption: captionHTML
//     };
// });
// document.getElementById('sasha-button').onclick = function () {
//     BigPicture({
//         el: this,
//         gallery: sashaImages,
//         loop: true,
//     });
//     arrowSoundHandler();
// };




// var numberOfPicturesVictor = [];

// for (var i = 1; i <= victorCount; i++) {
//     numberOfPicturesVictor.push(i);
// };
// // alert(numberOfPictures)
// // ['1', '2', '3']
// var victorImages = numberOfPicturesVictor.map(function (user) {

//     var selector = ".caption-victor-" + user;
//     var captionHTML = $(selector).find('h3.' + selectedLanguage).html();

//     return {
//         src: 'content/victor/' + user + '-min.jpg',
//         // caption: '<h3>Свято-Исидоровская церковь эстонского православного братства.</h3><h3>St. Isidorus church of Estonian Orthodox fraternity.</h3><h3>1912</h3>'
//         // caption: document.querySelector(".caption-victor-"+user).innerHTML
//         caption: captionHTML
//     };
// });
// document.getElementById('victor-button').onclick = function () {
//     BigPicture({
//         el: this,
//         gallery: victorImages,
//         loop: true,
//     });
//     arrowSoundHandler();
// };

