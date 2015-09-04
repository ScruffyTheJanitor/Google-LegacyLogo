chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.executeScript({
		code: "document.getElementById('hplogo').src='http://www.google.com/images/srpr/logo9w.png'"
	});
});