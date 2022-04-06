const textCollection = [
    "$ echo ('Hello World!') // Hello World!",
    "console.log ('Hello World!'); // Hello World!",
    "Console.WriteLine ('Hello World!'); // Hello World!",
    "var_dump ('Hello World!'); // string(12) \"Hello World!\"",
    "\<h1\>Hello World!\<\/h1\>",
    "System.out.println('Hello World!'); // Hello World"

];	// Anzuzeigender Text, KEIN < oder >
const duration = 100; // Dauer pro Buchstabe in ms
let newText = true;

let i = 0;

const textLine = document.getElementById('codeLine');

function randomText () {
    const randomNumber = Math.floor(Math.random() * textCollection.length);
    console.log(randomNumber);
    return textCollection[randomNumber];
}

let text;

function typeWriter(newText) {
    if (newText) {
        textLine.innerText = "";
        text = randomText();
        newText = false;
    }
    const letters = text.length;
    if (i < letters) {
        textLine.innerHTML = textLine.innerHTML + text.charAt(i);
        console.log(text.charAt(i));
        i++;
        setTimeout(() => {
            typeWriter(false);
        }, duration);
    } else {
        i = 0;
        setTimeout(() => {
            typeWriter(true);
        }, 2000);
    }
}
window.onload = typeWriter(true);