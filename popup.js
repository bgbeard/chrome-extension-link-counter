'use strict';

let setHistory = document.getElementById('setHistory');
let delayMode = document.getElementById('delayMode');

chrome.storage.sync.get(['delayMode'], (data) => {
    if (data.delayMode) {
        delayMode.checked = true
    }
})

setHistory.onclick = () => {
    chrome.storage.sync.set({ history: new Date().getTime() });
};

delayMode.onchange = () => {
    if (delayMode.checked) {
        chrome.storage.sync.set({ delayMode: true })
    } else {
        chrome.storage.sync.set({ delayMode: false })
    }
}