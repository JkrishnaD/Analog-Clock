let hr = document.getElementById("hHand")
let min = document.getElementById("mHand")
let sec = document.getElementById("sHand")

function time() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotation = 30 * h + m / 2;
    let minRotation = 6 * m;
    let secRotation = 6 * s;

    hr.style.transform = `rotate(${hRotation}deg)`
    min.style.transform = `rotate(${minRotation}deg)`
    sec.style.transform = `rotate(${secRotation}deg)`
}

setInterval(time, 1000);