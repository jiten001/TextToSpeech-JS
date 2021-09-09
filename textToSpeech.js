
// GET and SET Rate, Volume and pitch
/*
//COMMETNT START


let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

let voices = [];


// Voices on Loaded

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    speech.voice = voices[0];

    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.option[i] = new Option(voice.name, i)));
};



document.querySelector("#rate").addEventListener("input", () => {

    const rate = document.querySelector("#rate").value;

    speech.rate = rate;

    document.querySelector("#rate-label").innerHTML = rate;
});

document.querySelector("#volume").addEventListener("input", () => {

    const volume = document.querySelector("#volume").value;

    speech.volume = volume;

    document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {

    const pitch = document.querySelector("#pitch").value;

    speech.pitch = pitch;

    document.querySelector("#pitch-label").innerHTML = pitch;
});




document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
});


document.querySelector("#start").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
});

document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});


//COMMENT END
*/

const speakNow = document.getElementById("start")
// let msg = document.getElementById("talking").value;



const textToAudio = () => {
    // let msg = document.getElementById("text-to-speech").value;
    let msg = document.getElementById("talking").value;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
    
};

speakNow.addEventListener("click", textToAudio);
