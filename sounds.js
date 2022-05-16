let volume = 0;
const fader = document.getElementById("fader");

fader.addEventListener("click", () => {
    console.log(slider.value);
    volume = slider.value / 100;
});

const button1 = document.getElementById("button1");
button1.addEventListener("click", playAudio1);

function playAudio1() {
    const sound1 = new Audio("sounds/bass.mp3");
    sound1.play();
    sound1.volume = volume;
}

const button2 = document.getElementById("button2");
button2.addEventListener("click", playAudio2);

function playAudio2() {
    const sound2 = new Audio("sounds/drum.mp3");
    sound2.play();
    sound2.volume = volume;
}

const button3 = document.getElementById("button3");
button3.addEventListener("click", playAudio3);

function playAudio3() {
    const sound3 = new Audio("sounds/beat.mp3");
    sound3.play();
    sound3.volume = volume;
}

const button4 = document.getElementById("button4");
button4.addEventListener("click", playAudio4);

function playAudio4() {
    const sound4 = new Audio("sounds/sound4.mp3");
    sound4.play();
    sound4.volume = volume;
}

const button5 = document.getElementById("button5");
button5.addEventListener("click", playAudio5);

function playAudio5() {
    const sound5 = new Audio("sounds/sound5.mp3");
    sound5.play();
    sound5.volume = volume;
}

const Metronom = document.getElementById("Metronom");
Metronom.addEventListener("click", playMetronom);

const metro = new Audio("sounds/Metro.wav");

function playMetronom() {
    metro.loop = true;
    metro.play();
    metro.volume = volume;
}

const stopp = document.getElementById("stopp");
stopp.addEventListener("click", stoppmetro);

function stoppmetro() {
    metro.loop = false;
    metro.pause();
}

let slider = document.getElementById("fader");

let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
};


