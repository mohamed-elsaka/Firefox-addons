// "self" is a global object in content scripts
// Listen for a "drawBorder"
self.port.on("get-videos", function() {
	var videoURL, videoTitle;
	videoURL = $("#video").attr("src");
	videoTitle = $("div.videoControlsText div.ng-binding").text();
	$("#html5Player").append('Some text');
	self.port.emit("newVideo", videoTitle + ": " + videoURL );
});