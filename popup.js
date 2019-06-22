'use strict';

let historyValue = document.getElementById('historyValue');
let setHistory = document.getElementById('setHistory');

chrome.storage.sync.get(['history'], (data) => {
    historyValue.setAttribute('value', data.history);
});

setHistory.onclick = () => {
    let days = historyValue.value;
    chrome.storage.sync.set({ history: days });
};
