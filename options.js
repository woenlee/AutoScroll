'use strict';

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#ffffff'];
function constructOptions(kButtonColors) {
    let buttonsDiv = document.getElementById('buttonDiv');
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({color: item}, function() {
                console.log('color is ' + item);
            })
        });
        buttonsDiv.appendChild(button);
        //page.appendChild(button);
    }
}
constructOptions(kButtonColors);