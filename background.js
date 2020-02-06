function rad(){
  chrome.tabs.executeScript(null,{
    file: '/js/on.js'
  });
};

function rad2(){
  chrome.tabs.executeScript(null,{
    file: '/js/off.js'
  });
};