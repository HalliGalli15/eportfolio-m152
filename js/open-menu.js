function openMenu() {
  var x = document.getElementById("nav-items");
  var y = document.getElementById("navbar");
  var navButton = document.getElementById("nav-button");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.height = "150px";
    navButton.style.transform = "rotate(0)";
  } else {
    x.style.display = "block";
    y.style.height = "350px";
    navButton.style.transform = "rotate(180deg)";
  }
}
