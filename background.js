function genXKCDPassword(info,tab){
    chrome.tabs.executeScript({
          file: 'content.js'
        });
    
 }


var id = chrome.contextMenus.create({
    "title": "Generate XKCD-Style Password",
    "contexts":["editable"],  // ContextType
    "onclick": genXKCDPassword   // A callback function
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({length: 4});
    chrome.storage.sync.set({doCopy: true});
  });