// const slider = document.getElementById("slider");
var slider = document.querySelectorAll(".slider");
// var filter = document.getElementById("filter");
var filter = document.querySelectorAll(".image-new")
// const imageBox = document.getElementById("box");
var imageBox = document.querySelectorAll(".image-original");

//  oninput="changeImageFilter(this.value)";
//  onchange="changeImageFilter(this.value)";
for (let i=0; i<slider.length; i++){
    slider[i].addEventListener("input",function(){
        // alert(this.value);
        // var newWidth = (slider.value/100)*imageBox.offsetWidth+"px";
        var newWidth = slider[i].value+"%";
        // alert(newWidth);
        filter[i].style.width = newWidth;
    });
};

