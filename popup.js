'use strict';

let historyValue = document.getElementById('historyValue');
let setHistory = document.getElementById('setHistory');
let totalLinks = document.getElementById('totalLinks');

chrome.storage.sync.get(['history', 'startHistory'], (data) => {
    historyValue.setAttribute('value', data.history);
});

setHistory.onclick = () => {
    let days = historyValue.value;
    chrome.storage.sync.set({ history: days });
};

