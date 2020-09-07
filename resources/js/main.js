
var mixer = mixitup('.container');
$(document).ready(function() {
    // STICKY MENU
    'use strict';
    $(".js--services-section").waypoints(function(direction) {
        if (direction === "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
    // ACTIVE LINK
    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $("nav a img.logo").click(function() {
        $("nav ul li a").removeClass("active");
        $("nav ui li:first-child a").addClass("active");
    });

    // MIXITUP(PORTFOLIO SECTION)




});


// SMOOTH SCROLL IE EDGE SAFARI
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top

            }, 800, function() {
                window.location.hash = hash;
            });
        }

    });

});


// HUMBERG MENU
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "100%";
}