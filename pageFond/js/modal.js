document.addEventListener('DOMContentLoaded', function () {

    // var tipSound = new Audio("content/tip.mp3");
    // tipSound.volume = 0.3;
    // $("#tip-button").click(function () {
    //     tipSound.play();
    // });

    // Construction 
    // const infoButton = document.querySelector("#tip-button");
    // const contentInfo = document.querySelector("#tip-content").innerHTML;
    // createModal(contentInfo, infoButton);


    // Base Function
    function createModal(content, targetButton) {

        const documentBody = document.body;
        const overlayElement = document.createElement("div");
        overlayElement.classList.add("overlay");

        documentBody.appendChild(overlayElement);

        // Apply styles
        overlayElement.style.display = "none";
        overlayElement.style.position = "fixed";
        overlayElement.style.background = "black";
        overlayElement.style.top = "5%";
        overlayElement.style.left = "5%";
        overlayElement.style.bottom = "2%";
        overlayElement.style.right = "5%";
        overlayElement.style.zIndex = "99999";
        overlayElement.style.borderRadius = "10px";

        // Container
        const contentContainerElement = document.createElement("div");
        contentContainerElement.classList.add("modal-content-container");
        contentContainerElement.style.position = "fixed";
        contentContainerElement.style.background = "black";
        // contentContainerElement.style.top = "5%";
        // contentContainerElement.style.left = "5%";
        // contentContainerElement.style.bottom = "2%";
        // contentContainerElement.style.right = "5%";
        contentContainerElement.style.zIndex = "99999";
        contentContainerElement.style.borderRadius = "10px";

        contentContainerElement.style.width = "100%";
        contentContainerElement.style.height = "100%";

        overlayElement.appendChild(contentContainerElement);

        // Close element
        const closeElement = document.createElement("a");
        closeElement.classList.add("closeButton");
        closeElement.textContent = "x";

        closeElement.style.color = "#ffffff";
        closeElement.style.fontSize = "40px";
        closeElement.style.fontWeight = "bold";
        closeElement.style.borderRadius = "50%";
        closeElement.style.border = "4px solid #ffffff";
        closeElement.style.width = "50px";
        closeElement.style.height = "50px";
        closeElement.style.textAlign = "center";
        closeElement.style.margin = "20px";
        closeElement.style.position = "absolute";
        // closeElement.style.right = "-5%";
        // closeElement.style.top = "-5%";
        closeElement.style.right = "0";
        closeElement.style.top = "0";
        // closeElement.style.transform = "rotate(45deg)";
        closeElement.style.transition = "all 0.6s";
        closeElement.style.boxSizing = "content-box";

        // closeElement.addEventListener("mouseenter", e =>{
        //     closeElement.style.transform = "rotate(135deg)";
        // });
        // closeElement.mouseover(function() {
        //     closeElement.style.transform = "rotate(135deg)";
        // });
        // closeElement.addEventListener("mouseover", e =>{
        //     closeElement.style.transform = "rotate(0deg)";
        // });
        // var css = '.close:hover{ transform: rotate(135deg); }';
        // var style = document.createElement('style');

        // if (style.styleSheet) {
        //     style.styleSheet.cssText = css;
        // } else {
        //     style.appendChild(document.createTextNode(css));
        // }
        // closeElement.appendChild(style);


        contentContainerElement.appendChild(closeElement);


        // Content
        const contentElement = document.createElement("div");
        contentElement.classList.add("modal-content");
        contentElement.innerHTML = content;
        contentElement.style.display = "flex";
        contentElement.style.justifyContent = "center";
        contentElement.style.alignItems = "center";
        contentElement.style.width = "100%";
        contentElement.style.height = "100%";

        for (let i = 0; i < contentElement.children.length; i++) {
            contentElement.children[i].style.width = "100%";
            contentElement.children[i].style.height = "100%";
            contentElement.children[i].style.borderRadius = "10px";
        }

        contentContainerElement.appendChild(contentElement);


        // Add animation
        overlayElement.classList.add('animate__animated');

        targetButton.addEventListener("click", e => {
            e.preventDefault();
            overlayElement.style.display = "block";
            overlayElement.classList.add("animate__backInLeft"); // Start animation
            overlayElement.classList.remove('animate__backOutLeft'); // удаляем эффект закрытия
        });

        closeElement.addEventListener("click", e => {
            e.preventDefault();
            // overlayElement.style.display = "block";
            overlayElement.classList.add("animate__backOutLeft"); // Start animation
            overlayElement.classList.remove('animate__backInLeft'); // удаляем эффект закрытия
            // documentBody.removeChild(overlayElement);
        });




    };


});