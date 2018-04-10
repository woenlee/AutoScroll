var slider = document.getElementById("myRange");
var output = document.getElementById("sliderVal");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}