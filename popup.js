let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    console.log('color is ' + color);
    chrome.tabs.executeScript(
        //tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
};