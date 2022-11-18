window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.height = "70px";
    document.getElementById("navbar").style.flexDirection = "row";
    document.getElementById("nav-title").style.display = "none";
    document.getElementById("logo").style.display = "block";
    document.getElementById("nav-items").style.justifySelf = "center";
  } else {
    document.getElementById("navbar").style.height = "170px";
    document.getElementById("navbar").style.flexDirection = "column";
    document.getElementById("navbar").style.justifyContent = "center";
    document.getElementById("nav-title").style.display = "flex";
    document.getElementById("logo").style.display = "none";
  }
}