var textfield;
var output;
var submit;

let lex;

function setup() {
  console.log(this);
  noCanvas();
  textfield = select("#input");
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(newText);

    lex = new RiLexicon();
}

function WordColorChange() {
   //console.log(this.html());
   var a = color(random(255),random(255),random(255));
   this.style('color', a);
   this.style('font-size', 40);
  //console.log(this);
  //console.log('hover');
}

function Highlight() {
   console.log(this.html());
   var c = color(255, 255, 0);
   this.style('background-color', c);

  // this.html('🍦');
  // this.style('font-size', 30);

  let rhymes = lex.rhymes(this.html());
  console.log(rhymes);
  if (rhymes.length != 0){
    this.html(rhymes[0]);
  } else {
    this.html("blah");
  }

  //console.log(this);
  //console.log('hover');
}


function newText() {
  var s = textfield.value();

  var words = s.split(/(\W+)/);
  console.log(words);
  for (var i = 0; i < words.length; i++) {

    var span = createSpan(words[i]);
    span.parent(output);

    if (!/\W+/.test(words[i])) {
      //span.style('background-color', color(random(255), 0, random(255)));
      span.mouseOver(WordColorChange);
      span.mousePressed(Highlight);
    }
  }
  //console.log(words);
}










/**/
