'use strict';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        history: new Date().getTime(),
        delayMode: false
    }, undefined);
});