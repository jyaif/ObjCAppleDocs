var enabled = true;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (enabled && tab.url.indexOf("developer.apple.com/reference") != -1 && tab.url.indexOf("?language=objc") == -1) {
            var objcURL = tab.url + "?language=objc";
            chrome.tabs.executeScript(null,{"code": "window.history.back()"});
            chrome.tabs.update(tab.id, {url: objcURL});
        }
});


chrome.browserAction.onClicked.addListener(function() {
    if( enabled )
    {
        chrome.browserAction.setIcon({path:"objcdisabled.png"}); 
        enabled = false;  
    }
    else
    {
        chrome.browserAction.setIcon({path:"objc.png"}); 
        enabled = true;
    }

});