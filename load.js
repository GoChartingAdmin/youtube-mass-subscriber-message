chrome.browserAction.onClicked.addListener(function(activeTab){
	chrome.tabs.executeScript(null, {file: 'jquery.js' }, function() {
		chrome.tabs.executeScript(null, {file: 'hook.js' });
	});
});