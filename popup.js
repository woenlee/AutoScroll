let startScroll = document.getElementById('startScroll');
startScroll.style.backgroundColor = '#00FF7F';

//Scroll window object
startScroll.onclick = function begin() {
    setInterval(scroll, 100);
}

function scroll(element) {
    console.log('scrolling!');
    chrome.tabs.executeScript(
        {code: 'window.scrollBy(0,2);'});
};