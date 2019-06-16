// var currentLinks = chrome.storage.sync.get('linkCount', function (data) {
//     console.log(data);
//     return data.linkCount;
// });

chrome.webNavigation.onCompleted.addListener(function (e) {
    var currentLinks = chrome.storage.sync.get('linkCount', function (data) {
        return data.linkCount;
    })
    console.log(currentLinks);
    chrome.storage.sync.set({
        'linkCount': currentLinks++
    }, function () {
        console.log('reddit visits: ' + currentLinks);
    });
},
    { url: [{ hostSuffix: 'reddit.com' }] }
);