var self = require("sdk/self");
var tabs = require("sdk/tabs");

var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: "./icon-16.png",
  onClick: function() {
    var worker = tabs.activeTab.attach({
      contentScriptFile: [self.data.url("jquery-1.11.3.min.js"), self.data.url("get-videos.js")]
    });
    worker.port.emit("get-videos");
	
	worker.port.on("newVideo", function (text) {
	  button.label = text;
	});

  }
});