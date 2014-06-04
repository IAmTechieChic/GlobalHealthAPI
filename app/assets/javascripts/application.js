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

$(document).ready(function(){
      	var myLatlng = new google.maps.LatLng(-33.890542, 151.274856);
        var mapOptions = {
          center: myLatlng,
          scrollwheel: false,
          zoom: 11
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var locations = [
		        ['Bondi Beach', -33.890542, 151.274856, 4],
		        ['Coogee Beach', -33.923036, 151.259052, 5],
		        ['Cronulla Beach', -34.028249, 151.157507, 3],
		        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
		        ['Maroubra Beach', -33.950198, 151.259302, 1]
		    ];

        var marker, i;

         for (i = 0; i < locations.length; i++) {
       		marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
       	 });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

  //       var marker = new google.maps.Marker({
		//     position: myLatlng,
		//     map: map,
		//     title:"Hello World!"
		// });

    //       var contentString = '<p>Hey guys, I&rsquo;m in Atlanta!</p>';

		  // var infowindow = new google.maps.InfoWindow({
		  //     content: contentString
		  // });

		  // google.maps.event.addListener(marker, 'click', function() {
		  //   infowindow.open(map,marker);
		  // });

      });
