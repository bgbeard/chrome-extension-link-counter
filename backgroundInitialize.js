'use strict';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ history: 7 }, () => {
    });
});