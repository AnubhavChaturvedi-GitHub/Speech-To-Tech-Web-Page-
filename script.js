const output = document.getElementById('output');
const startButton = document.getElementById('startButton');
let finalTranscript = '';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

startButton.addEventListener('click', () => {
    finalTranscript = '';
    output.textContent = '';
    recognition.start();
    startButton.textContent = 'Listening...';
});

recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript)
        .join('');

    if (e.results[0].isFinal) {
        finalTranscript = transcript; // Update finalTranscript with current transcript
        output.textContent = finalTranscript; // Display current transcript
    }
});

recognition.addEventListener('end', () => {
    startButton.textContent = 'Start Listening';
    recognition.start(); // Start listening again after it ends
});

// Additional event listener to handle manual stop
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { // Stop listening when the Escape key is pressed
        recognition.stop();
        startButton.textContent = 'Start Listening';
    }
});
