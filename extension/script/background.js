var enabled = true;

chrome.browserAction.onClicked.addListener(function() {
    if(enabled) {
        chrome.browserAction.setIcon({path:"icon-disabled48.png"}); 
        enabled = false;  
    } else {
        chrome.browserAction.setIcon({path:"icon48.png"});
        enabled = true;
    }
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details)
        if (!enabled)
            return;
        var u = new URL(details.url);
        var searchParams = u.searchParams;
        if (searchParams.get("language") == "objc")
            return;
        searchParams.set("language", "objc");
        return {redirectUrl: u.toString()};
    },
    {urls: ["https://developer.apple.com/*"]},
    ["blocking"]);