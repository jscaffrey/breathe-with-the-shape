var text = ["Breathe out", "Breathe in"];
var counter = 0;
var elem = document.getElementById("message");
var inst = setInterval(change, 4000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}