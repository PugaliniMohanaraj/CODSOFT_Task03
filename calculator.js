function clearScreen() {
  document.getElementById("output").value = "";
}

function display(value) {
  document.getElementById("output").value += value;
}

function calculate() {
  var p = document.getElementById("output").value;
  var q = eval(p);
  document.getElementById("output").value = q;
}

function del() {
  output.value = output.value.slice(0, -1);
}
