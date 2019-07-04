'use strict';

chrome.webRequest.onBeforeRequest.addListener((request) => {
    chrome.storage.sync.get(['delayMode'], (data) => {
        if (data.delayMode) {
            sleep(100)
        }
    })
}, { urls: ["<all_urls>"] }, ['blocking'])

const sleep = (ms) => {
    let start = new Date().getTime()
    while (new Date() < start + ms) { }
    return;
}