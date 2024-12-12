const miliHTML = document.querySelector('#mili');
const detikHTML = document.querySelector('#detik');
const menitHTML = document.querySelector('#menit');
const jamHTML = document.querySelector('#jam');
const mulaiBtn = document.querySelector('#mulai');
const berhentiBtn = document.querySelector('#berhenti');
const ulangiBtn = document.querySelector('#ulangi');
let mili = detik = menit = jam = 0

const start = (() => {
    mili++
    miliHTML.innerHTML = mili
    if ( mili == 100) {
        mili = 0
        detik++
        detikHTML.innerHTML = detik
    }
    if ( detik == 60) {
        detik = 0
        menit++
        menitHTML.innerHTML = menit
    }
    if ( menit == 60) {
        menit = 0
        jam++
        jamHTML.innerHTML = jam
    }

})

const mulai = (() => {
    console.log('mulai')
    timerInterval = setInterval(start, 10);
}) 
const berhenti = (() => {
    console.log('berhenti');
    clearInterval(timerInterval)
}) 
const ulangi = (() => {
    console.log('ulangi');
    mili = detik = menit = jam = 0
    miliHTML.innerHTML = mili
    detikHTML.innerHTML = detik;
    menitHTML.innerHTML = menit;
}) 



mulaiBtn.addEventListener("click", mulai);
berhentiBtn.addEventListener("click", berhenti);
ulangiBtn.addEventListener("click", ulangi);

// setInterval(function () {
//     detikText.innerHTML = detik
//     detik++
//     if (detik == 60) {
//         detik = 0
//         menit++ 
//         menitHTML.innerHTML = menit
//     }

// }, 1000)