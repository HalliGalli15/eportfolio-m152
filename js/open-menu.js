function openMenu() {
  var items = document.getElementById("nav-items");
  var navbar = document.getElementById("navbar");
  var navButton = document.getElementById("nav-button");

  if (items.style.display === "block") {
    items.style.display = "none";
    navButton.style.transform = "rotate(0)";
  } else {
    items.style.display = "block";
    navButton.style.transform = "rotate(180deg)";
  }
}
