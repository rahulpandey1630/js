function getColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.random();

    return `rgba(${r}, ${g}, ${b}, ${a})`
}

const start = document.getElementById('start');
const stop = document.getElementById('stop');
let interval;

start.addEventListener('click', function () {
    interval = setInterval(function () {
        document.body.style.backgroundColor = getColor();
    }, 1000);
});

stop.addEventListener('click', function () {
    clearInterval(interval);
});