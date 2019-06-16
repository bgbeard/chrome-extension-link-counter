'use strict';
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ linkCount: '0' }, function () {
        chrome.storage.sync.get('linkCount', function (data) {
            console.log(data);
        });
    });

});