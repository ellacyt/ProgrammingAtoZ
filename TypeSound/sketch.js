// A2Z F18
// Daniel Shiffman
// http://shiffman.net/a2z

// Thank you to: https://github.com/dariusk/metaphor-a-minute/blob/master/metaphor.js

// Sign up for Wordnik here: https://www.wordnik.com/
// Developer documentation: http://developer.wordnik.com/

// A random word
let randomWordURL = "https://api.wordnik.com/v4/words.json/randomWord?" +
                    "&minLength=5&maxLength=-1" +
                    "&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";

let input;
let inputText = '';

function preload(){

      a = loadSound('assets/a.mp3');
      b = loadSound('assets/b.mp3');
      c = loadSound('assets/c.mp3');
      d = loadSound('assets/d.mp3');
      e = loadSound('assets/e.mp3');
      f = loadSound('assets/f.mp3');
      g = loadSound('assets/g.mp3');
      h = loadSound('assets/h.mp3');
      i = loadSound('assets/i.mp3');
      j = loadSound('assets/j.mp3');
      k = loadSound('assets/k.mp3');
      l = loadSound('assets/l.mp3');
      m = loadSound('assets/m.mp3');
      n = loadSound('assets/n.mp3');
      o = loadSound('assets/o.mp3');
      p = loadSound('assets/p.mp3');
      q = loadSound('assets/q.mp3');
      r = loadSound('assets/r.mp3');
      s = loadSound('assets/s.mp3');
      t = loadSound('assets/t.mp3');
      u = loadSound('assets/u.mp3');
      v = loadSound('assets/v.mp3');
      w = loadSound('assets/w.mp3');
      x = loadSound('assets/x.mp3');
      y = loadSound('assets/y.mp3');
      z = loadSound('assets/z.mp3');
}

function setup() {
  noCanvas();
  // Some buttons
  let button1 = select('#word');
  button1.mousePressed(randomWord);

    input = select('#textinput');

}

// Load the JSON for each one
function randomWord() {
  wordnik('words', randomWordURL);
}


function wordnik(where, url) {
  loadJSON(url, wordLoaded);
  function wordLoaded(data) {
    let div = createDiv(data.word);
    div.parent(where);
  }
}


function keyTyped() {
  if (key === 'a') {
    a.play();
  } else if (key === 'b') {
    b.play();
  } else if (key === 'c') {
    c.play();
  } else if (key === 'd') {
    d.play();
  } else if (key === 'e') {
    e.play();
  } else if (key === 'f') {
    f.play();
  } else if (key === 'g') {
    g.play();
  } else if (key === 'h') {
    h.play();
  } else if (key === 'i') {
    i.play();
  } else if (key === 'j') {
    j.play();
  } else if (key === 'k') {
    k.play();
  } else if (key === 'l') {
    l.play();
  } else if (key === 'm') {
    m.play();
  } else if (key === 'n') {
    n.play();
  } else if (key === 'o') {
    o.play();
  } else if (key === 'p') {
    p.play();
  } else if (key === 'q') {
    q.play();
  } else if (key === 'r') {
    r.play();
  } else if (key === 's') {
    s.play();
  } else if (key === 't') {
    t.play();
  } else if (key === 'u') {
    u.play();
  } else if (key === 'v') {
    v.play();
  } else if (key === 'w') {
    w.play();
  } else if (key === 'x') {
    x.play();
  } else if (key === 'y') {
    y.play();
  } else if (key === 'z') {
    z.play();
  }
  // uncomment to prevent any default behavior
  // return false;
}
