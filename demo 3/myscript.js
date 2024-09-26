var val1 = 1;
var val2 = 9;
var myName = "Tjia, David Rikhy";

//Document object
document.getElementById("my-btn").addEventListener("click", function () {
  myfunction(myName, vall, val2);
});

//your function hy remember your function
function myFunction(name, a, b) {
  var value = a * b;
  var join = name + ": " + value;
  document.getElementById("value-demo").innerHTML = join;
}
