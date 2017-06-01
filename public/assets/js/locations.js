module.exports = function getLocations() {
		$.get("/", function(data) {
			var locations = [];
			for (var i = 0; i < data.length; i++) {
	        	locations.push([data.name, data.lat, data.lng]);
	        }
		});
		return locations;
}