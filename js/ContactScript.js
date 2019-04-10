

function initMap() {
    
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
        var uluru = {lat: 40.664403, lng: -73.708256};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }