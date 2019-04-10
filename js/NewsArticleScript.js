$(document).ready(function() {
    $(".menu-col").click(function() {
        $(".mobile-nav").animate({
            left: "0"
        })
    })
    $(".clear-icon").click(function() {
        $(".mobile-nav").animate({
            left: "-250px"
        })
    })
})