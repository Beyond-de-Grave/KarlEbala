

// Classic map set
// https://learn.javascript.ru/map-set

// array.map
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const bookCount = 59;
var countIntArray = [];

// Array of int
for (var i = 1; i <= bookCount; i++) {
    countIntArray.push(i);
};
// alert(numberOfPictures)
// ['1', '2', '3']
var namesOfPicturesBook = countIntArray.map(function (number) {
    return 'content/book/' + number + '.jpg';
});

// alert(namesOfPicturesBook.length);
// alert(namesOfPicturesBook);

// Append all images to div

const documentBook = document.querySelector("#magazine");
for (var i = 1; i <= namesOfPicturesBook.length; i++) {
    var image = document.createElement("img");
    image.src = namesOfPicturesBook[i-1];
    documentBook.appendChild(image);
};



// Turn.js
// http://turnjs.com/docs/How_Turn.js_Works

// Not working damn
window.addEventListener('resize', function(event) {
    if (event == true) {
        window.location.reload();
    }
}, true);

window.onresize = function(event) {
    window.location.reload();
};

$('#magazine').turn({
    gradients: true,
    // width: 1600,
    // height: 400,
    // width: 1 * window.innerWidth,
    // height: 0.6 * window.innerHeight,
    width: 0.86 * window.innerWidth,
    height: 0.9 * window.innerHeight,
    // width: 0.01 * document.getElementById("#magazine").clientWidth,
    // height: 0.01 * document.getElementById("#magazine").clientHeight,
    autoCenter: true,
    display: "single",
    acceleration: true
});


// $("#zoom-viewport").turn({when: {
// 	doubleTap: function(event) {
// 		// Implementation
//         $("#zoom-viewport").turn("zoomIn");
// 	}
// }
// });


// Button bookmark click

$("#book-start").click(function (e) { 
    e.preventDefault();
    $("#magazine").turn("page", 1);
});
$("#book-middle").click(function (e) { 
    e.preventDefault();
    $("#magazine").turn("page", 15);
});
$("#book-end").click(function (e) { 
    e.preventDefault();
    $("#magazine").turn("page", 47);
});


// Next Page with arrows

var nextSound = new Audio("content/next.mp3");
nextSound.volume = 0.5;

var arrow = { left: 37, up: 38, right: 39, down: 40 };


$(document).keydown(function (e) { //document
    // if (e.which == arrow.left || arrow.right) { 
    //     // nextSound.pause(); 
    //     nextSound.play();
    //    return false;
    // }
    if (e.which == arrow.right) {
        nextSound.pause(); 
        nextSound.play();
        $("#magazine").turn("next");
        return false;
    }
    if (e.which == arrow.left) {
        nextSound.play();
        $("#magazine").turn("previous");
        return false;
    }
});





// PAGE FLIP 

// HTML 

// <!-- https://github.com/Nodlik/StPageFlip -->
// <!-- https://nodlik.github.io/StPageFlip/docs/index.html -->
// <!-- One below is generated from webpack -->
// <!-- <script src="../lib/StPageFlip/dist/js/pageFlip.browser.js"></script> -->

// JS

// npm install typescript --save-dev
// Path to libs
// npm config get prefix
// npm list -g
// npm install --dev webpack webpack-cli
// npx webpack ..\lib\StPageFlip\webpack.config.js
// https://monsterlessons.com/project/lessons/es6-moduli
// npm uninstall `ls -1 node_modules | tr '/\n' ' '`
// mkdir node_modules && cd ...
// npm install --save-dev webpack webpack-cli
// Unresolve dependency
// npm config set legacy-peer-deps true
// npm fund

// import { PageFlip } from 'page-flip';

// const pageFlip = new PageFlip(htmlParentElement, settings);

// Script tag
// const pageFlip = new St.PageFlip(htmlParentElement, settings);

// const pageFlip = new St.PageFlip(document.getElementById('book'), {
//     width: 400, // required parameter - base page width
//     height: 600, // required parameter - base page height
// });

// pageFlip.loadFromImages(['content/book/1.jpg', 'content/book/2.jpg']);

{/* <div id="book">
    <div class="my-page" data-density="hard">
        Page Cover
    </div>
    <div class="my-page">
        Page one
    </div>
    <div class="my-page">
        Page two
    </div>
    <div class="my-page">
        Page three
    </div>
    <div class="my-page">
        Page four
    </div>
    <div class="my-page" data-density="hard">
        Last page
    </div>
</div>

const pageFlip = new PageFlip(document.getElementById('book'), {
    width: 400, // required parameter - base page width
    height: 600, // required parameter - base page height
});

pageFlip.loadFromHTML(document.querySelectorAll('.my-page')); */}

