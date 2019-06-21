'use strict';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ history: 8 }, () => {
        console.log(`Current history set to 7 days.`);
    });
});