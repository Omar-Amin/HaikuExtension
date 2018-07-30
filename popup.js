
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'buttonAction.js'
	});
});

/*
document.addEventListener('DOMContentLoaded',function() {
  var swiggleBox = document.getElementById('btnOpenLink');
  swiggleBox.addEventListener('click',function(){
    chrome.tabs.create({url:"https://www.sync-video.com/random"});
		chrome.browserAction.addListener(function (tab) {
			chrome.tabs.executeScript(tab.ib, {
				file: 'buttonAction.js'
			});
		});
  });
});*/

/*
document.addEventListener('DOMContentLoaded',function(){
  var s = document.getElementsByClassName("btn btn-close btn-join btn-info btn-large");
  s.addEventListener('click',function(){
    chrome.tabs.create({url:"https://www.sync-video.com"});
  });
});*/
