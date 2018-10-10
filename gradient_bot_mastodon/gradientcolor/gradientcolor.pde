void setup(){
  // Set the sketch size to 512 pixels wide by 256 pixels high.
size(512, 325);

}
void draw(){
// Choose between RGB and HSB.
int colorMode = RGB;

// These are the two colors we want to use, in RGBA order.
color color1 = color(random(255), random(255), random(255), 255);
color color2 = color(random(255), random(255), random(255), 255);

//// Set the sketch size to 512 pixels wide by 256 pixels high.
//size(512, 325);

// Set the background color to white.
background(255);

// These define the four edges of the square.
int margin = 0;
int left = margin;
int top = margin;
int right = width - margin;
int bottom = height - margin;

// These will be used in the for-loop.
color currentStroke = color1;
float step = 0;

// Start at the top of the rectangle.
// Add one until the bottom is reached.
for (int i = top; i <= bottom; ++i) {

  // Convert the loop's i counter to a range between
  // 0 and 1 (0 .. 100%).
  step = map(i, top, bottom, 0.0, 1.0);

  // Linear interpolation.
  currentStroke = lerpColor(color1, color2, step, colorMode);
  stroke(currentStroke);

  // Syntax is line(startx, starty, endx, endy).
  line(left, i, right, i);
}
  save("output.png");
  exit();
  noLoop();
  }
