var textfield;
var output;
var submit;

function setup() {
  console.log(this);
  noCanvas();
  textfield = select("#input");
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(newText);
}

function WordColorChange() {
   //console.log(this.html());
   var a = color(random(255),random(255),random(255));
   this.style('color', a);
   this.html('yumyum');
   this.style('font-size', 40);
  //console.log(this);
  //console.log('hover');
}

function emoji() {
   //console.log(this.html());
   // var c = color(255, 255, 0);
   // this.style('background-color', c);
  this.html('🍦');
  this.style('font-size', 30);

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
      span.mousePressed(emoji);
    }
  }
  //console.log(words);
}









/**/
