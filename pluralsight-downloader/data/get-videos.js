// "self" is a global object in content scripts
// Listen for a "drawBorder"
self.port.on("get-videos", function() {
	console.log( document.getElementById("video").src );
});