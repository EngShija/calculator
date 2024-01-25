
function display(val) {
    document.getElementById('input').value += val
    return val
}

function solve() {
    let x = document.getElementById('input').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

function clearScreen() {
    document.getElementById('input').value = null
    document.getElementById('result').value = null
}

function sin() {
    var val1 = document.getElementById('input').value;
    val1 = parseInt(val1, 10) * (Math.PI / 180);
    var val2 = document.getElementById('input').value = Math.sin(val1);
    return val2
}

function cos() {
    var val1 = document.getElementById('input').value;
    val1 = parseInt(val1, 10) * (Math.PI / 180);
    var val2 = document.getElementById('input').value = Math.cos(val1);
    return val2
}

function tan() {

    var val1 = document.getElementById('input').value;
    val1 = parseInt(val1, 10) * (Math.PI / 180);
    if (val1 == 90) {
        return console.error();
    }
    var val2 = document.getElementById('input').value = Math.tan(val1);
    return val2
}

function elen() {

    var val1 = document.getElementById('input').value;
    val1 = Math.E
    document.getElementById('input').value = Math.E
    return val1
}

function ln() {
    var val1 = document.getElementById('input').value;
    document.getElementById('input').value = Math.log(val1)
    return Math.log
}

function log() {
    var val1 = document.getElementById('input').value;
    document.getElementById('input').value = Math.log10(val1)
    return Math.log10
}

function del() {
    addEventListener('click', () => {
        let currentValue = display.value;
        currentValue = currentValue.slice(0, -1);
        display.value = currentValue;
    });
}
// function del() {
//    var del = document.getElementById('input').value
//    return del.slice(0, -1)
// }
function event()
{
var input = document.createElement('input'); document.body.appendChild(input)
input.value = localStorage.getItem('input')
input.oninput = function(event) {localStorage.setItem('input', input.value)
}
}
function FormValidation() {
    var x = document.forms['myForm']['p1'].value
    var y = document.forms['myForm']['p2'].value
    if (x == y) {
        return true
    } else {
        alert('Your passwords did not match!')
    }
}