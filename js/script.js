
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

/*anchors*/

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}



