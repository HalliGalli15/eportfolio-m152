function openMenu() {
  var x = document.getElementById("nav-items");
  var y = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.height = "100";
  } else {
    x.style.display = "block";
    y.style.height = "350";
  }
}
