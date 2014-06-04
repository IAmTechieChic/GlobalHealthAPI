// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function (){

    var myLatLng = new google.maps.LatLng(12.3333, 1.6667);

    var mapOptions = {
    zoom: 7,
    center:myLatLng
     };

     var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

     var locations = [
      ['Toma', 12.7667, -2.8833, 1],
      ['Nouna', 12.7333, -3.8667, 2],
      ['Adansi South', 6.30, -1.50, 3],
      ['Adansi North', 6.2833, -1.5167, 4]
    ];
    
    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
}
    // var contentString = "<b>Hi guys</b>";

    // var infowindow = new google.maps.InfoWindow({
    //   content: contentString
    //     });

    // google.maps.event.addListener(marker, 'click', function() {
    // infowindow.open(map,marker);
    //     });


});
