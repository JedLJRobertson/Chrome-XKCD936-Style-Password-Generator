var doCopy = document.getElementById("copyCheck");
var length = document.getElementById("length");

// Listeners to update storage
length.addEventListener("change", function()    {
    chrome.storage.sync.set({length: length.value});
})
doCopy.addEventListener("change", function()    {
    chrome.storage.sync.set({doCopy: doCopy.checked});
})

// Load variables from storage
chrome.storage.sync.get('length', function(data) {
    length.value = data.length;
});
chrome.storage.sync.get('doCopy', function(data) {
    doCopy.checked = data.doCopy;
});