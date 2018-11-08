var data = [];
var ready = false;

function setup() {
  createCanvas(800, 600);

  d3.csv("ages.csv", function (d) {
    return {
      name: d.name,
      age: +d.age
    };
  }).then(function (csv) {
    data = csv;
    ready = true;
  });
}

function draw() {

  if (!ready) {
    background(255, 0, 0);
    return;
  } else {
    background(255);
  }

  //get all the people who are younger than 50
  var selection = data.filter(function(d){
    return d.age < 50;
  });


  for (var i = 0; i < selection.length; i++) {
    var d = selection[i];
    var y = 50 + i*20;
    text(d.name + ' ' + d.age,100,y);
  }

}