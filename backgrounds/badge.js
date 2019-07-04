'use strict';

chrome.history.onVisited.addListener((historyItem) => {
    let hostname = new URL(historyItem.url).hostname;
    chrome.storage.sync.get(['history'], (data) => {
        let searchQuery = { text: hostname, startTime: data.history, maxResults: 1000 };
        chrome.history.search(searchQuery, (historyItems) => {
            chrome.browserAction.setBadgeText({ text: historyItems.length.toString() });
        });
    });
});

const getDate = (daysAgo) => {
    let today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() - daysAgo).getTime();
};