var button = jQuery(".button");
var preloader = jQuery("#preloader");
var longitudediv = jQuery(".longitude");
var lattitudediv = jQuery(".lattitude");
var locationdiv = jQuery(".location");

if(navigator.geolocation){
	button.click(function(e) {
		e.preventDefault();
		preloader.show();
		navigator.geolocation.getCurrentPosition(exportPosition, errorPosition);
	});
}
else{
	alert("Sorry your browser doesn't support the Geolocation API");
}

function errorPosition(){
	alert("Sorry couldn't find your location");
	pretext.show();
}

function exportPosition(position){
	lattitude = position.coords.lattitude;
	longitude = position.coords.longitude;
	
	jQuery('#map').html('<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.co.uk/?ie=UTF8&amp;ll='+latitude+','+longitude+'&amp;spn=0.332359,0.617294&amp;t=m&amp;z=11&amp;output=embed"></iframe>');
	longitudediv.html("Longitude: "+longitude);
	lattitudediv.html("Lattitude: "+lattitude);
	
	jQuery.ajax({
		url:'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true',
		type: 'POST',
		dataType: 'json',
		success: function(data){
			locationdiv.html('Location: '+data.results[0].address_components[2].long_name);
		},
		error: function(xhr, textStatus, errorThrown){
			errorPosition();
		}
	})
}