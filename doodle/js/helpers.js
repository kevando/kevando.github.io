function log(text) {
  var p = document.createElement("p");
  p.innerHTML = text;
  p.id = "logger";
  document.body.appendChild(p);
}
