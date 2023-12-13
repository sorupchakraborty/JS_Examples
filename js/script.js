// js start
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//text change
function textChange() {
    document.getElementById("h2").innerHTML = "hello "
}

//show date
function showDate() {
    document.getElementById('d_h2').innerHTML = Date();
}

// bulb on/off

function bulbOn() {
    document.getElementById('img1').src = "images/off.gif";
}
function bulbOff() {
    document.getElementById('img1').src = "images/on.gif";

}
// font change
function changeFont() {

    document.getElementById('f_h2').style.fontSize = "60px";
}
// show/hide
function show() {
    document.getElementById('c_h2').style.display = "block";

}

function hide() {
    document.getElementById('c_h2').style.display = "none";

}

// Doc write

function writeOutput() {
    document.write('Hello World');
}


// js end
