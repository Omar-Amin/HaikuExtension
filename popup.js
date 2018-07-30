
chrome.browserAction.onClicked.addListener(function (tab2) {
	chrome.tabs.create({url:"https://www.sync-video.com/random"},function (tab){
		chrome.tabs.executeScript(tab.ib, {
			file: 'buttonAction.js'
		});
	});
});

/*
document.addEventListener('DOMContentLoaded',function() {
  var swiggleBox = document.getElementById('btnOpenLink');
  swiggleBox.addEventListener('click',function(){
    chrome.tabs.create({url:"https://www.sync-video.com/random"},function (tab){
			chrome.tabs.executeScript(tab.ib, {
				file: 'buttonAction.js'
			});
		});
  });
});*/



/* Idk what this is, but let's keep it
document.addEventListener('DOMContentLoaded',function(){
  var s = document.getElementsByClassName("btn btn-close btn-join btn-info btn-large");
  s.addEventListener('click',function(){
    chrome.tabs.create({url:"https://www.sync-video.com"});
  });
});*/
