let startScroll = document.getElementById('startScroll');
startScroll.style.backgroundColor = '#00FF7F';
var pixels,waitTime,timeout;

//Scroll object
startScroll.onclick = function begin() {
    clearTimeout(timeout);
    var slider = document.getElementById("myRange");
    if(slider.value < 300)
        waitTime = 300 - slider.value;
    else
        waitTime = 1;
    pixels = 1;
    if(slider.value >= 300)
        pixels = 2;
    else if(slider.value >= 350)
        pixels = 3;
    else if(slider.value >= 400)
        pixels = 4;
    else if(slider.value >= 450)
        pixels = 5;
    else if(slider.value >= 500)
        pixels = 6;
    timeout = setInterval(scroll, waitTime);
}

function scroll(element) {
    chrome.tabs.executeScript(
        {
            code: 'window.scrollBy(0, ' + pixels + ');'
        }
    );
};