document.addEventListener('DOMContentLoaded',function() {
  var swiggleBox = document.getElementById('btnOpenLink');
  swiggleBox.addEventListener('click',function(){
    chrome.tabs.create({url:"https://www.sync-video.com/random"})
  });
});

document.addEventListener('DOMContentLoaded',function(){
  document.getElementsByClass('btn btn-close btn-join btn-info btn-large').click();
});
