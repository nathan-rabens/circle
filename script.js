
function calculate () {
  var circle = document.createElement('div');
  var rad = document.getElementById('rad').value;
  var area = rad * rad * Math.PI;
  var text = "The area of your circle is " + area + ", congrats";
  circle.style.width = rad * 2 + "px";
  circle.style.height = rad * 2 + "px";
  circle.style.backgroundColor = "red";
  circle.style.borderRadius = "50%";
  var header = document.getElementById("header");
  document.body.appendChild(circle);
  circleInfo ();
};


function circleInfo () {
  var rad = document.getElementById('rad').value;
  var area = rad * rad * Math.PI;
  var radText = document.getElementById ('radText');
  radText.innerText = "The area of your circle is " + area + ", crushed it!";
};
