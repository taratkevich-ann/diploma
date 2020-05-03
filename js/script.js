/*preloader*/
window.onload = function(){
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none'
};


$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', '' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});


/*basket page*/

var basket = document.getElementById('basket');
var  open_basket = document.getElementById("open_basket");
var close = document.getElementsByClassName("close")[0];

open_basket.onclick = function () {
    basket.style.display = "block";
};

close.onclick = function () {
    basket.style.display = "none";
};



