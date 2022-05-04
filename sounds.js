const test = 0;
console.log(test);


const button1 = document.getElementById("button1");
button1.addEventListener("click", playAudio1);

function playAudio1() {
    const sound1 = new Audio("sounds/bass.mp3");
    sound1.play();
}

const button2 = document.getElementById("button2");
button2.addEventListener("click", playAudio2);

function playAudio2() {
    const sound2 = new Audio("sounds/drum.wav");
    sound2.play();
}

const button3 = document.getElementById("button3");
button3.addEventListener("click", playAudio3);

function playAudio3() {
    const sound3 = new Audio("sounds/bass_short.wav");
    sound3.play();
}

const Metronom = document.getElementById("Metronom");
Metronom.addEventListener("click", playMetronom);


const metro = new Audio("sounds/Metro.wav");

function playMetronom() {
    metro.loop = true;
    metro.play();
}

const stopp = document.getElementById("stopp");
stopp.addEventListener("click", stoppmetro);

function stoppmetro() {
    metro.loop = false;
    metro.pause();
}

