'use strict';

document.addEventListener('DOMContentLoaded', () => {
    main();
    document.getElementById('setHistory').addEventListener('click', eventHandler);
})

const main = () => {
    chrome.storage.sync.get(['history'], (data) => {
        document.getElementById('historyValue').setAttribute('value', data.history);
    });
};

const eventHandler = (e) => {
    let days = document.getElementById('historyValue').value;
    console.log(days);
    console.log("hello world");
    // chrome.storage.sync.set({ history: days }, () => {
    //     console.log(days);
    // });
};
