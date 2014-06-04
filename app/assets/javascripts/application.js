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
//= require_tree .

$(document).ready(function (){

    var myLatLng = new google.maps.LatLng(10.7833, -0.8500);

    var mapOptions = {
    zoom: 6,
    scrollwheel: false,
    center:myLatLng
     };

     var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

     var locations = [
      ['Toma', 12.7667, -2.8833, 1],
      ['Nouna', 12.7333, -3.8667, 2],
      ['Adansi South', 6.30, -1.50, 3],
      ['Adansi North', 6.2833, -1.5167, 4],
      ['Tenkodogo', 11.7833, -0.3667, 5],
      ['Diébougou', 10.9667, -3.2500, 6],
      ['Obuasi Municipal', 6.2000, -1.6833, 7],
      ['Asutifi', 6.9833, -2.3833, 8],
      ['Tougouri', 13.3153, -0.5181, 9],
      ['Kintampo North', 8.0533, -1.7269, 10],
      ['Sunyani West', 7.3667, -2.3167, 11]

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
