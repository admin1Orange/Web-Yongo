const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");




btnRight.addEventListener("click", e => moveToRight())
btnLeft.addEventListener("click", e => moveToLeft())

let operacion =0;
    couter= 0;
    widthVideo= 100 / sliderSection.length;


function moveToRight(){
    if (couter >= sliderSection.length-1){
        couter=0;
        operacion=0;
        slider.style.transform = `translate(-${operacion}%)`;
        
    }
    else{
        couter++;

        operacion= operacion + widthVideo;
        slider.style.transform = `translate(-${operacion}%)`;
    }
    

}

function moveToLeft(){
    couter--;
    if(couter < 0){
        couter= sliderSection.length-1;
        operacion=widthVideo *(sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
    }else{
        operacion= operacion - widthVideo;
        slider.style.transform = `translate(-${operacion}%)`
    }

    
}



//document.addEventListener("DOMContentLoaded", function () {
//    var div1 = document.getElementById("intro");
//    var div2 = document.getElementById("galeria");
//    var video1 = document.getElementById("introVideo");
//    var video2 = document.getElementById("insumos");
//
//    window.addEventListener("scroll", function (event) {
//        event.preventDefault(); // Evita el desplazamiento predeterminado
//
//        var scrollPosition = window.scrollY;
//
//        // Decide cuándo cambiar de div
//        if (scrollPosition > 0) {
//            div1.style.display = "none";
//            div2.style.display = "block";
//            video2.play(); // Inicia automáticamente el segundo video
//        } else {
//            div1.style.display = "block";
//            div2.style.display = "none";
//            video1.play(); // Inicia automáticamente el primer video
//        }
//    });
//
//
//    video1.play();
//});
//

const btnLeft1 = document.querySelector(".btn-left1"),
    btnRight1 = document.querySelector(".btn-right1"),
    slider1 = document.querySelector("#slider1"),
    sliderSection1 = document.querySelectorAll(".slider-section1");




btnRight1.addEventListener("click", e => moveToRight1())
btnLeft1.addEventListener("click", e => moveToLeft1())

let ope =0;
    cou= 0;
    widthVideo1= 100 / sliderSection1.length;


function moveToRight1(){
    if (cou >= sliderSection1.length-1){
        cou=0;
        ope=0;
        slider1.style.transform = `translate(-${ope}%)`;
    }
    else{
        cou++;

        ope= ope + widthVideo1;
        slider1.style.transform = `translate(-${ope}%)`;
    }
    

}

function moveToLeft1(){
    cou--;
    if(cou < 0){
        cou= sliderSection1.length-1;
        ope=widthVideo1 *(sliderSection1.length-1);
        slider1.style.transform = `translate(-${ope}%)`;
    }else{
        ope= ope - widthVideo1;
        slider1.style.transform = `translate(-${ope}%)`
    }

    
}
