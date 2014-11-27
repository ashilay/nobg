"use strict";
// chrome.extension.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		console.log("clearBg");
// 		document.body.style.background = "green";
// 	}
// );

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
});