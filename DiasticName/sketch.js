// A2Z F18
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F18
// http://shiffman.net/a2z



// Many DOM elements
let dropZone, input, button, sample, clearButton;

// An array to keep track of all the new DOM elements being added
let paragraphs = [];

let inputText = '';

// An extra element, an input element
let seedInput;

function setup() {

  noCanvas();

  // Selecting the text field and button
  input = select('#textinput');
  button = select('#submit');
  // What to do when button pressed
  button.mousePressed(handleInput);

  // This link allows quick testing with a file
  // that's ready to load instantly
  sample = select('#sample');
  sample.mousePressed(loadFile);

  // This button clears the new paragraph elements
  // added
  clearButton = select('#clear');
  clearButton.mousePressed(clearText);

  // Diastic Seed
  seedInput = select('#seed');

}

// Load a file for quick testing
function loadFile() {
  loadStrings('files/adjectives2.txt', fileLoaded);
}
// When the file is loaded
function fileLoaded(data) {
  let txt = data.join('\n');

  input.html(txt);
  // Note the use of a function that will "process" the text
  // This is b/c the text might come in a number of different ways
  // process(txt);
}

// Handle dropzone events
function highlight() {
  dropZone.style('background', '#AAA');
}

function unHighlight() {
  dropZone.style('background','');
}

// Handle the text input field
function handleInput() {
  process(input.value());
}

// Clear all the divs with remove()
function clearText() {
  input.html('');
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].remove();
  }
  paragraphs = [];
}
