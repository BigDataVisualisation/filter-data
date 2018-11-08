var slider;

var data = [13,245,11,2,3,16,55];

function setup() {
  createCanvas(800, 600);

  slider = createSlider(0, 250);
  slider.position(100, 100);

}

function draw() {

  background(255);

  text(slider.value(),200,200);

  var threshold = slider.value();

  var selection = data.filter(function(d){
    return d<threshold;
  }); 

  console.log(selection);

}