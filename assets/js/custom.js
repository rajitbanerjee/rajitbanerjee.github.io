/* TYPEWRITER EFFECT */

let i = 0;
let txt = "Rajit Banerjee";
txt = "     " + txt; // wait for document to load (need help!)

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 75);
  }
}

function resetCursor() {
  let el = document.getElementById("typing");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}

/* SWITCH THEME */

function switchTheme() {
  // Toggle theme
  let sections = document.getElementsByTagName("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.toggle("invert");
  }
  let footer = document.getElementsByTagName("footer");
  footer[0].classList.toggle("invert");

  // Reset name typewriter cursor
  document.getElementById("typing").innerHTML = "";
  i = 0;
  typeWriter();
}