const output = document.querySelector('#salida');
const micro = document.querySelector('#microfono');

micro.addEventListener('click', executeSpeechAPI);

function executeSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function () {
        output.classList.add('show');
        output.textContent = 'Listening...'
    };

    recognition.onspeechend = function () {
        output.textContent = 'Recording has stopped...';
        recognition.stop();
    };

    recognition.onresult = function (cheems) {
        console.log(cheems.results[0][0]);

        const {confidence, transcript} = cheems.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Recorded: ${transcript}`;

        const approach = document.createElement('p');
        approach.innerHTML = `Approximate percentage: ${parseInt(confidence * 100)}%`;

        output.appendChild(speech);
        output.appendChild(approach);
    };
};