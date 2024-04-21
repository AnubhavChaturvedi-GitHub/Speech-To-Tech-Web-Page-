# Speech to Text

![Screenshot](https://github.com/AnubhavChaturved1/SpeechToText/blob/main/Screenshot%202024-04-01%20231330.png)

This is a simple web application that allows users to convert speech to text using the browser's built-in speech recognition capabilities.

## Demo

You can try the live demo [here](https://allorizenproject1.netlify.app/).

## Usage

1. Open the `index.html` file in a web browser.
2. Click the "Start Listening" button to begin speech recognition.
3. Speak into the microphone.
4. The recognized text will appear in the output area below the button.

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

- The web application uses the browser's `SpeechRecognition` interface to recognize speech input.
- When the "Start Listening" button is clicked, speech recognition begins.
- As the user speaks, the recognized text is displayed in real-time in the output area.
- Once the browser detects the end of the speech input, it stops recognition and updates the button text to "Start Listening" again.
- The application automatically restarts speech recognition after a brief pause, allowing users to continue speaking without needing to click the button again.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

This web application was created by [Anubhav Chaturvedi].

---
